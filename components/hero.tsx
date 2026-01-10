"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ShieldCheck, Zap } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-1/4 -left-24 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8"
            >
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">
                Excellence in Shutdown & Turnaround Project Execution
              </span>
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black mb-8 text-foreground tracking-tighter leading-none">
              Rajnish <br />
              <span className="text-primary inline-block hover:scale-105 transition-transform cursor-default">
                Patel
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-medium">
              Project Manager at{" "}
              <a
                href="https://www.anabeeb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-black underline decoration-primary/30 decoration-4 hover:decoration-primary transition-colors"
              >
                ANABEEB
              </a>{" "}
              with 13+ years of experience in shutdown turnaround projects across oil & gas and process plants.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-black rounded-none h-16 px-12 transition-all hover:translate-x-2 shadow-2xl shadow-primary/20 group"
                asChild
              >
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 text-foreground hover:bg-primary/5 rounded-none h-16 px-12 transition-all bg-transparent font-bold"
              asChild
            >
              <a
                href="/rajnish resume Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Resume <Download className="ml-2 w-5 h-5" />
              </a>
            </Button>
            </div>

            <div className="mt-16 flex items-center gap-12 border-t border-primary/10 pt-12">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-foreground">13+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Years Exp</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-foreground">45+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  SHUTDOWN PROJECTS
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-foreground">2400+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  MANPOWER HANDLED
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl group border-2 border-primary/20">
              <img
                src="/hero pic.png"
                alt="Rajnish Patel"
                className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Overlay Stat */}
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-xl translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="font-black text-sm uppercase tracking-tighter">ANABEEB – Arabian Pipeline & Services Company
Project Manager</span>
                </div>
                <p className="text-xs text-muted-foreground">
                 Leading large-scale shutdown and turnaround projects across oil & gas and petrochemical plants.
                </p>
              </div>
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute -top-12 -right-12 w-64 h-64 border-4 border-primary/5 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 border-4 border-accent/5 rounded-full -z-10 animate-[spin_15s_linear_infinite_reverse]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
