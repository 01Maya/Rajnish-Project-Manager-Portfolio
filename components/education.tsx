"use client"

import { motion } from "framer-motion"
import { GraduationCap, School } from "lucide-react"

const education = [
  {
    type: "Bachelor of Engineering (Mechanical)",
    institution: "Veer Narmad South Gujarat University",
    period: "2006 – 2010",
    result: "First Class with Distinction (70%)",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    type: "Higher Secondary Education (HSC)",
    institution: "Gujarat Higher Secondary Education Board (GHSEB)",
    period: "2004 – 2006",
    result: "71.20%",
    icon: <School className="w-6 h-6" />,
  },
  {
    type: "Secondary Education (SSC)",
    institution: "Gujarat Secondary Education Board (GSEB)",
    period: "2002 – 2004",
    result: "79.29%",
    icon: <School className="w-6 h-6" />,
  },
]

export function Education() {
  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">
              Foundations
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 tracking-tight">
              Academic Background
            </h2>

            <div className="space-y-10">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex gap-8"
                >
                  <div className="w-16 h-16 flex-shrink-0 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-primary">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-foreground leading-tight mb-2 tracking-tight">
                      {item.type}
                    </h3>

                    {/* INSTITUTE NAME — PRIMARY COLOR */}
                    <p className="text-primary text-xs uppercase tracking-widest font-bold">
                      {item.institution}
                    </p>

                    {/* YEAR + RESULT */}
                    <div className="flex items-center gap-6 mt-2 text-xs uppercase tracking-widest">
                      {/* YEAR — PRIMARY COLOR */}
                      <span className="text-primary font-bold">
                        {item.period}
                      </span>

                      {/* RESULT */}
                      <span className="text-amber-accent font-bold px-2 py-1 bg-amber-accent/10 rounded-sm">
                        Result: {item.result}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16 rounded-2xl border border-white/5 min-h-[520px] flex flex-col justify-center"
          >
            <h3 className="text-2xl font-black text-primary mb-12 tracking-tight">
              Personal Drive
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Shutdown & Turnaround Excellence", icon: "⚙️" },
                { label: "Safety-First Leadership", icon: "🛡️" },
                { label: "Mechanical Systems Reliability", icon: "🔧" },
                { label: "Team Leadership & Coordination", icon: "👥" },
              ].map((h, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-xl"
                >
                  <span className="text-3xl">{h.icon}</span>
                  <span className="text-sm font-black text-foreground/80 tracking-tight leading-tight">
                    {h.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
