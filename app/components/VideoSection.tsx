export default function VideoSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white py-16">
      <div className="relative w-[90%] aspect-video max-w-6xl overflow-hidden rounded-3xl">
        <div
          className="absolute inset-0 w-full h-full z-10 border-gray-500 rounded-3xl"
          style={{ borderWidth: "0.1px" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl">
          <video className="absolute inset-0 w-full h-[105%] object-cover" autoPlay loop muted playsInline>
            <source
              src="https://imflvurocidruuiokmzq.supabase.co/storage/v1/object/public/images//donecutsupa.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

