import Link from "next/link";
import Image from "next/image";
import profile from "../../public/profile.jpg"

// app/page.js
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">

      {/* *************************** Navbar *************************** */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-semibold">Tanzim</h1>
        <ul className="flex gap-6 text-gray-300"> 
          <li><Link href={"/"}>About</Link></li>
          <li><Link href={"/"}>Projects</Link></li>
          <li><Link href={"/"}>Contact</Link></li>
        </ul>
      </nav>

      {/* *************************** Hero *************************** */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <div className="w-[400px] h-[400px] rounded-[400px] bg-amber-50 mt-13 overflow-hidden">
          <Image 
            src={profile}
            alt="profile picture"
            width={400}
            height={400}
            loading="lazy"
            className="rounded-full object-cover"  
          />
          
        </div>
        <h1 className="text-5xl font-bold mt-8 mb-4">Hi, I'm Tanzim</h1>
        <p className="text-gray-400 text-lg mb-6 max-w-xl">
          I build clean and simple web applications with a focus on usability and aesthetics.
        </p>
        <button className="px-8 py-3 bg-gray-800 text-gray-100 font-semibold rounded hover:bg-gray-700 transition">
          Contact Me
        </button>
      </section>

      {/* *************************** About *************************** */}
      <section className="px-6 py-16 border-t border-gray-800 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400">
          I am a full-stack developer passionate about crafting simple, elegant, and efficient web experiences. 
          I specialize in modern tools like Next.js and Tailwind CSS.
        </p>
      </section>

      {/* *************************** Projects *************************** */}
      <section className="px-6 py-16 border-t border-gray-800 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="space-y-6">
          <div className="p-6 bg-gray-800 rounded">
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-400">A minimal web application with focus on simplicity.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-400">A clean dashboard built using Next.js and Tailwind CSS.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded">
            <h3 className="text-xl font-semibold mb-2">Project Three</h3>
            <p className="text-gray-400">A simple portfolio website with dark aesthetic design.</p>
          </div>
        </div>
      </section>

      {/* *************************** Contact *************************** */}
      <section className="px-6 py-16 border-t border-gray-800 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="px-4 py-3 rounded bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none"
          />
          <button className="px-6 py-3 bg-gray-700 text-gray-100 rounded font-semibold hover:bg-gray-600 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* *************************** Footer *************************** */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Tanzim. Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}
