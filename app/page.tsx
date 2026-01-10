import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />

      {/* About Section - Brief Elegant Intro */}
      <section id="about" className="py-32 px-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-6 block">
              The Professional
            </span>
            <p className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight leading-[1.15] text-foreground">
                Project Manager at <span className="text-primary">Anabeeb</span>, specializing in shutdown and turnaround projects across oil & gas and petrochemical plants.
            </p>
            <div className="mt-4 h-px w-24 bg-white/10" />
            <p className="mt-12 text-secondary leading-relaxed max-w-2xl italic text-2xl">
              “Dedicated to delivering safe, efficient, and high-impact shutdown projects through disciplined planning, strong leadership, strict safety compliance, and effective coordination across multidisciplinary teams.”
            </p>
            <div className="mt-12 h-px w-60 border-4 border-primary" />
          </div>
        </div>
      </section>

      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
