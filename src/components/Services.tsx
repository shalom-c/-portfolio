import React from 'react'

const services = [
  { title: 'Website Design', desc: 'Design visual UI and UX for websites.', price: '$30' },
  { title: 'Front-End Development', desc: 'Build responsive and accessible front-ends.', price: '$95' },
  { title: 'Business Websites', desc: 'Create websites tailored for businesses.', price: '$95' },
  { title: 'Landing Pages', desc: 'High-converting landing page design and build.', price: '$50' },
  { title: 'Website Redesign', desc: 'Refresh and modernize existing sites.', price: '$60' },
  { title: 'E-commerce Front-End', desc: 'Storefront UI and product experiences.', price: '$190' },
  { title: 'UI Implementation', desc: 'Pixel-accurate UI builds from Figma/Sketch.', price: '$75' },
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">What I Can Help With</h2>
        <p className="mb-6 text-xs italic text-[#9CA3B8]">
          Prices are starting estimates in USD — final cost depends on project scope and requirements.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="p-6 card">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 muted text-sm">{s.desc}</p>
              <span className="mt-3 inline-flex items-center rounded-full border border-[#6C5DD3]/60 bg-[#6C5DD3]/10 px-2.5 py-1 text-[11px] font-medium text-[#6C5DD3]">
                Starting from {s.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
