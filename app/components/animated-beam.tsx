"use client"

import type React from "react"
import { motion } from "motion/react"
import { type RefObject, useEffect, useId, useState } from "react"

import { cn } from "@/lib/utils"

export interface AnimatedBeamProps {
  className?: string
  containerRef: RefObject<HTMLElement | null> // Container ref
  fromRef?: RefObject<HTMLElement | null>
  toRef?: RefObject<HTMLElement | null>
  itemRefs?: RefObject<HTMLElement | null>[] // Added for multiple connections
  curvature?: number
  reverse?: boolean
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  delay?: number
  duration?: number
  animationDuration?: number // Added for compatibility
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
  beamClassName?: string // Added for compatibility
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  itemRefs = [], // Support for multiple connections
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  animationDuration, // Use this for overall animation timing if provided
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  beamClassName, // Support for beam styling
}) => {
  const id = useId()
  const [paths, setPaths] = useState<string[]>([])
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })
  const effectiveDuration = animationDuration || duration

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }

  useEffect(() => {
    const updatePaths = () => {
      if (!containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const svgWidth = containerRect.width
      const svgHeight = containerRect.height
      setSvgDimensions({ width: svgWidth, height: svgHeight })

      const newPaths: string[] = []

      // If we have two specific refs (fromRef and toRef), create a single path
      if (fromRef?.current && toRef?.current) {
        const rectA = fromRef.current.getBoundingClientRect()
        const rectB = toRef.current.getBoundingClientRect()

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset

        const controlY = startY - curvature
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`
        newPaths.push(d)
      }
      // If we have multiple itemRefs, create paths between consecutive pairs
      else if (itemRefs && itemRefs.length > 1) {
        for (let i = 0; i < itemRefs.length - 1; i++) {
          const currentRef = itemRefs[i]
          const nextRef = itemRefs[i + 1]

          if (currentRef?.current && nextRef?.current) {
            const rectA = currentRef.current.getBoundingClientRect()
            const rectB = nextRef.current.getBoundingClientRect()

            const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset
            const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset
            const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset
            const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset

            const controlY = startY - curvature
            const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`
            newPaths.push(d)
          }
        }

        // Add a path from the last to the first to complete the circle
        const firstRef = itemRefs[0]
        const lastRef = itemRefs[itemRefs.length - 1]

        if (firstRef?.current && lastRef?.current) {
          const rectA = lastRef.current.getBoundingClientRect()
          const rectB = firstRef.current.getBoundingClientRect()

          const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset
          const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset
          const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset
          const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset

          const controlY = startY - curvature
          const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`
          newPaths.push(d)
        }
      }

      setPaths(newPaths)
    }

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // For all entries, recalculate the paths
      for (const entry of entries) {
        updatePaths()
      }
    })

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    // Call the updatePaths initially to set the initial paths
    updatePaths()

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect()
    }
  }, [containerRef, fromRef, toRef, itemRefs, curvature, startXOffset, startYOffset, endXOffset, endYOffset])

  // Apply beamClassName if provided to the gradient
  const effectiveGradientColor = beamClassName?.includes("bg-")
    ? `var(--${beamClassName.replace("bg-", "")})`
    : undefined

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      {paths.map((path, index) => (
        <g key={index}>
          <path d={path} stroke={pathColor} strokeWidth={pathWidth} strokeOpacity={pathOpacity} strokeLinecap="round" />
          <path
            d={path}
            strokeWidth={pathWidth}
            stroke={`url(#${id}-${index})`}
            strokeOpacity="1"
            strokeLinecap="round"
          />
          <defs>
            <motion.linearGradient
              className="transform-gpu"
              id={`${id}-${index}`}
              gradientUnits={"userSpaceOnUse"}
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: gradientCoordinates.x1,
                x2: gradientCoordinates.x2,
                y1: gradientCoordinates.y1,
                y2: gradientCoordinates.y2,
              }}
              transition={{
                delay: delay + index * 0.2, // Stagger the animations
                duration: effectiveDuration,
                ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 0,
              }}
            >
              <stop stopColor={effectiveGradientColor || gradientStartColor} stopOpacity="0"></stop>
              <stop stopColor={effectiveGradientColor || gradientStartColor}></stop>
              <stop offset="32.5%" stopColor={effectiveGradientColor || gradientStopColor}></stop>
              <stop offset="100%" stopColor={effectiveGradientColor || gradientStopColor} stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </g>
      ))}
    </svg>
  )
}

