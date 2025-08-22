import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Import React
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Avent",
  description: "Transform Industrial Distribution with AI Agents",
  icons: {
    icon: '/avent.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const rb2bKey = process.env.NEXT_PUBLIC_RB2B_KEY || "W6Z57HQ8ZJOX"
  return (
    <html lang="en">
      <head>
        {rb2bKey ? (
          <Script
            id="rb2b"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(key){if(window.reb2b)return;window.reb2b={loaded:true};var s=document.createElement("script");s.async=true;s.src="https://ddwl4m2hdecbv.cloudfront.net/b/"+key+"/"+key+".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s,document.getElementsByTagName("script")[0]);}("${rb2bKey}");`,
            }}
          />
        ) : null}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'