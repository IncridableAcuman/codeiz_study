import Navbar from '../../components/Navbar'

const Career = () => {
  const jobs = [
  { title: 'React Frontend Developer', location: 'Remote', type: 'Full-time' },
  { title: 'Content Writer', location: 'Hybrid - Tashkent', type: 'Part-time' },
  { title: 'Course Instructor (AI/ML)', location: 'Remote', type: 'Freelance' },
];
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 px-6 py-12 md:px-20">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Careers at E-Study</h1>
        <p className="text-gray-600 text-lg">Join our mission to make learning accessible for everyone. We’re building the future of online education.</p>
      </div>

      {/* Job Listings */}
      <div className="grid gap-6 max-w-3xl mx-auto">
        {jobs.map((job, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-500">{job.location} • {job.type}</p>
            <a href="/apply" className="mt-3 inline-block text-indigo-600 hover:underline">Apply Now →</a>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">Send General Application</a>
      </div>
    </div>
    </>
  )
}

export default Career