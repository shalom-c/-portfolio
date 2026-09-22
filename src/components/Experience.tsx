import React from 'react'

const stages = [
  { title: 'Building Real-World Projects', desc: 'Developing websites and applications to strengthen practical development skills.' },
  { title: 'Front-End Development', desc: 'Building responsive interfaces using HTML, CSS, JavaScript and React.' },
  { title: 'Continuous Learning', desc: 'Learning modern development tools, frameworks and best practices.' },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">My Development Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((s) => (
            <div key={s.title} className="card p-6">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 muted text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
