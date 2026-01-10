"use client"

import { motion } from "framer-motion"
import { Settings, ShieldCheck, Cog, Ruler, ClipboardList, Package } from "lucide-react"

const experiences = [
  {
    company: "ANABEEB – Arabian Pipeline & Services Company",
    location: "KSA | Middle East | India",
    role: "Shutdown Project Manager (Senior Project Leader)",
    period: "Jan 2013 – Present",
    description:
      "Leading large-scale shutdown and turnaround projects across oil & gas refineries, petrochemical, power, and fertilizer plants with full responsibility from tendering to project closeout.",
    tasks: [
      { icon: <Settings className="w-5 h-5" />, text: "Planned and executed complete shutdown and turnaround activities including mechanical maintenance, overhauling, and inspections." },
      { icon: <ShieldCheck className="w-5 h-5" />, text: "Ensured strict compliance with PTW systems, JSA, ISO 9001, ISO 14001, and OHSAS 18001 safety standards." },
      { icon: <Cog className="w-5 h-5" />, text: "Managed manpower mobilization, resource allocation, and execution for shutdown teams exceeding 2,000 personnel." },
      { icon: <ClipboardList className="w-5 h-5" />, text: "Prepared project schedules, progress reports, and coordinated closely with QA/QC, safety, and client teams." },
      { icon: <Ruler className="w-5 h-5" />, text: "Planned and monitored shutdown activities using Primavera P6 to ensure on-time and cost-effective delivery." },
      { icon: <Package className="w-5 h-5" />, text: "Controlled materials, tools, and shutdown inventories to minimize downtime and optimize resource utilization." },
    ],
  },
  {
    company: "H.L. Engineers Pvt. Ltd.",
    location: "India",
    role: "Mechanical Executive Engineer",
    period: "Jun 2010 – Dec 2012",
    description:
      "Worked on fabrication, machining, and manufacturing of ASME-coded chemical process equipment for turnkey chemical plant projects.",
    tasks: [
      { icon: <Settings className="w-5 h-5" />, text: "Handled fabrication and assembly of pressure vessels, filter dryers, reactors, and chemical process equipment." },
      { icon: <Cog className="w-5 h-5" />, text: "Supervised welding processes (TIG/MIG), machining operations, and fabrication calculations as per ASME codes." },
      { icon: <ClipboardList className="w-5 h-5" />, text: "Managed job distribution, manpower handling, and shop-floor execution activities." },
      { icon: <ShieldCheck className="w-5 h-5" />, text: "Ensured quality compliance and inspection of manufactured equipment under ASME ‘U’ Stamp standards." },
      { icon: <Ruler className="w-5 h-5" />, text: "Supported erection, commissioning, and small project execution for chemical process plants." },
      { icon: <Package className="w-5 h-5" />, text: "Implemented process improvements to enhance productivity and manufacturing efficiency." },
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-industrial-blue font-bold text-xs uppercase tracking-widest mb-4 block"
          >
            Track Record
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
            Industrial Journey
          </h2>
          <div className="w-16 h-1 bg-amber-accent mx-auto mt-6" />
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 md:p-12 rounded-xl border border-white/5 relative group hover:border-industrial-blue/30 transition-all duration-500"
            >
            <span className="absolute top-4 right-4 text-4xl font-black text-primary/50 pointer-events-none select-none leading-none z-[-1]">
              {String(index + 1).padStart(2, "0")}
            </span>
              <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-black text-foreground mb-2 group-hover:text-industrial-blue transition-colors tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="text-primary font-bold tracking-widest text-sm uppercase">
                    {exp.role}
                  </p>
                </div>
                <div className="md:text-right">
                  <p className="text-sm font-black text-foreground/90 bg-white/5 px-4 py-2 inline-block border border-white/5">
                    {exp.period}
                  </p>
                  <p className="text-xs text-primary mt-2 tracking-widest uppercase">
                    {exp.location}
                  </p>
                </div>
              </div>

              <p className="text-secondary text-lg mb-8 max-w-3xl leading-relaxed">
                {exp.description}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exp.tasks.map((task, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex flex-col gap-4 p-5 bg-white/5 border border-white/5 rounded-lg group/task hover:bg-industrial-blue/5 hover:border-industrial-blue/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-industrial-blue text-dark-navy rounded-sm group-hover/task:rotate-12 transition-transform">
                      {task.icon}
                    </div>
                    <p className="text-sm text-secondary/90 leading-relaxed font-medium">
                      {task.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
