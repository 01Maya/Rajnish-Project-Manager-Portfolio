"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted")
    alert("Thank you! Your inquiry has been sent successfully.")
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-primary">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-industrial-blue/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-16 items-start">
            <div>
              <span className="text-industrial-blue font-bold text-xs uppercase tracking-widest mb-4 block">
                Connect
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
                Let&apos;s Discuss <br />
                Shutdown & Turnaround Projects.
              </h2>

              <p className="text-background text-lg mb-12 max-w-xl leading-relaxed">
                Ready to lead safe, efficient, and on-time shutdown, turnaround, and maintenance projects across oil & gas,
                petrochemical, power, and fertilizer plants.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* EMAIL */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="p-6 rounded-xl border border-white/6 ring-1 ring-primary/10 bg-white/3 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 text-industrial-blue rounded-lg mb-4">
                    📧
                  </div>
                  <h4 className="text-sm font-black text-background uppercase tracking-wider mb-2">
                    Email
                  </h4>
                  <p className="text-sm text-white/80 mb-2">
                    Preferred for project discussions, tenders, and professional inquiries.
                  </p>
                  <a
                    href="mailto:rajnishbhaip@gmail.com"
                    className="text-white text-md font-black break-words inline-block"
                  >
                    rajnishbhaip@gmail.com
                  </a>
                </motion.div>

                {/* CONTACT */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.06, ease: [0.4, 0, 0.2, 1] }}
                  className="p-6 rounded-xl border border-white/6 ring-1 ring-primary/10 bg-white/3 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 text-industrial-blue rounded-lg mb-4">
                    📞
                  </div>
                  <h4 className="text-sm font-black text-background uppercase tracking-wider mb-2">
                    Contact
                  </h4>
                  <p className="text-sm text-white/80 mb-2">
                    Available for calls, meetings, and site coordination across India & the Middle East.
                  </p>
                  <div className="space-y-1">
                    <a href="tel:+919099590282" className="text-white text-md font-black block">
                      +91 90995 90282 (India)
                    </a>
                    <a href="tel:+966504902979" className="text-white text-md font-black block">
                      +966 50 490 2979 (KSA)
                    </a>
                  </div>
                </motion.div>

                {/* LOCATION */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
                    className="p-6 rounded-xl border border-white/6 ring-1 ring-primary/10 bg-white/3 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all transform hover:-translate-y-2"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-white/5 text-industrial-blue rounded-lg mb-4">
                      📍
                    </div>
                    <h4 className="text-sm font-black text-background uppercase tracking-wider mb-2">
                      Location
                    </h4>
                    <p className="text-sm text-white/60 mb-4">
                      Navsari, Gujarat, India — available for shutdown projects, site assignments, and Middle East deployments.
                    </p>
                    <span className="text-white text-md font-bold">
                      Timezone: AST (UTC +3:00)
                    </span>
                  </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
