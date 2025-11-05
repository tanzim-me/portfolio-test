// components/Contact.js
export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-24 bg-white">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border px-4 py-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border px-4 py-2 rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="border px-4 py-2 rounded-md"
          rows="4"
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
