// components/Hero.js
export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 min-h-screen px-6 md:px-12">
      {/* Left: Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm John Doe
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A passionate Full-Stack Developer building modern and responsive web
          applications.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Contact Me
        </a>
      </div>

      {/* Right: Illustration */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 font-bold">Your Image</span>
        </div>
      </div>
    </section>
  );
}
