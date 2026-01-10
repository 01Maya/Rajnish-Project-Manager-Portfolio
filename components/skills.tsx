"use client"

import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Core Expertise",
    skills: [
      "Shutdown & Turnaround Management",
      "Mechanical Maintenance & Overhauling",
      "Operations & Maintenance (O&M)",
      "Pre-Commissioning Activities",
      "Project Execution & Control",
    ],
  },
  {
    title: "Planning & Control",
    skills: [
      "Primavera P6 Scheduling",
      "Manpower & Resource Planning",
      "Budget Estimation & Cost Control",
      "Progress Monitoring",
      "Client Coordination",
    ],
  },
  {
    title: "Safety & Compliance",
    skills: [
      "Permit to Work (PTW)",
      "Job Safety Analysis (JSA)",
      "ISO 9001 / ISO 14001 / OHSAS 18001",
      "Plant Safety Compliance",
      "Safe Startup & Shutdown",
    ],
  },
  {
    title: "Mechanical Systems",
    skills: [
      "Pumps, Compressors & Exchangers",
      "Valves & Control Valves",
      "Blinding & De-blinding",
      "Gasket Replacement",
      "Fabrication & Welding Supervision",
    ],
  },
]

const certificates = [
  "Permit Receiver Training – ARAMCO, SABIC, SIPCHEM, YANSAB, SASREF, Oman LNG",
  "Fire & Safety Training with Live Firefighting",
  "Breathing Apparatus Training (Single & Double Line) – Mourik International, Holland",
  "Safe Startup & Shutdown of Plant & Equipment",
  "Blinding & De-Blinding of Lines and Gasket Replacement",
  "Operation & Maintenance of Pumps, Compressors, Exchangers & Valves",
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="text-industrial-blue font-bold text-xs uppercase tracking-widest mb-4 block">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
            Specialized Expertise
          </h2>
          <div className="w-16 h-1 bg-amber-accent mx-auto mt-6" />
        </div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-10 rounded-xl border border-white/5 hover:shadow-[0_0_40px_rgba(56,189,248,0.1)] hover:-translate-y-2 transition-all duration-500"
            >
              <h3 className="font-black text-foreground mb-8 text-sm tracking-[0.2em] uppercase border-b border-white/5 pb-4">
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.skills.map((skill, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-industrial-blue leading-none mt-1">•</span>
                    <p className="text-sm font-medium leading-relaxed text-secondary">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CERTIFICATES & TRAINING – FULL WIDTH */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 md:p-12 rounded-2xl border border-white/5"
        >
          <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-6">
            Certificates & Professional Training
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {certificates.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-industrial-blue text-lg leading-none mt-1">
                  ✓
                </span>
                <p className="text-secondary text-sm leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
