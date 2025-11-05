// components/Projects.js
export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-24 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Project One</h3>
          <p className="text-gray-600">Description of project one.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Project Two</h3>
          <p className="text-gray-600">Description of project two.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Project Three</h3>
          <p className="text-gray-600">Description of project three.</p>
        </div>
      </div>
    </section>
  );
}
