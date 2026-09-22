import React from 'react'

const skillGroups = {
  'Front-End': ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Tailwind CSS', 'DOM Manipulation', 'Web Interfaces'],
  'Development': ['Git', 'GitHub', 'JSON', 'NPM', 'Vite', 'VS Code', 'Debugging'],
  'Design': ['UI Design', 'UX Principles', 'Figma', 'Wireframing', 'Design Systems', 'Typography', 'Responsive Layouts'],
  'CMS / Website Dev': ['WordPress', 'Shopify', 'Webflow', 'Landing Pages', 'E-commerce'],
  'Other': ['SEO Basics', 'Performance', 'Accessibility', 'Cross-Browser Testing', 'Deployment']
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skillGroups).map(([group, items]) => (
            <div key={group} className="card p-4">
              <h3 className="font-semibold">{group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="text-sm px-3 py-1 bg-slate-800 border border-slate-700 rounded">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
