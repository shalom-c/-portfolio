import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 muted">I am a web developer passionate about building modern digital experiences. I enjoy transforming ideas and designs into responsive websites that are fast, accessible and easy to use.</p>
          <p className="mt-3 muted">My focus is on front-end development, responsive design, user experience and practical web solutions. I am continuously improving my development skills by building real-world projects and exploring modern technologies.</p>
        </div>

        <aside className="card p-6">
          <h3 className="text-lg font-semibold">Professional Info</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><strong>Name:</strong> Taki Sunday</li>
            <li><strong>Role:</strong> Web Developer / Front-End Developer</li>
            <li><strong>Location:</strong> Nigeria</li>
            <li><strong>Availability:</strong> Open to opportunities</li>
            <li><strong>Work type:</strong> Remote / Freelance / Contract</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
