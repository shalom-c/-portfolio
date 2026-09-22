import React from 'react'

const steps = [
  { id: 1, title: 'Discover', desc: "Understand the client's business, audience and goals." },
  { id: 2, title: 'Design', desc: 'Create the visual direction, layout and user experience.' },
  { id: 3, title: 'Develop', desc: 'Build the website using modern frontend technologies.' },
  { id: 4, title: 'Launch', desc: 'Test, optimize and deploy the final website.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.id} className="p-6 border rounded-lg text-center">
              <div className="text-2xl font-bold text-slate-700">0{s.id}</div>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
