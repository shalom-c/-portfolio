import React from 'react'

const reasons = [
  { title: 'Responsive Development', desc: 'Websites designed to work across phones, tablets and desktops.' },
  { title: 'Clean Code', desc: 'Organized and maintainable code with reusable components.' },
  { title: 'User-Focused Design', desc: 'Interfaces designed around usability and clear user journeys.' },
  { title: 'Continuous Improvement', desc: 'Constantly learning new technologies and improving practices.' },
]

export default function Why() {
  return (
    <section id="why" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Why Work With Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="card p-4 text-sm">
              <h3 className="font-semibold">{r.title}</h3>
              <p className="mt-2 muted">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
