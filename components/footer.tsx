export function Footer() {
  return (
    <footer className="bg-foreground py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* NAME + ROLE (STACKED, RESPONSIVE) */}
          <div className="text-center md:text-left">
            <h2 className="text-background text-3xl font-black tracking-tighter leading-tight">
              RAJNISH PATEL
            </h2>
            <p className="text-secondary text-sm uppercase tracking-widest font-bold mt-1 whitespace-nowrap">
              Project Manager | Mechanical Engineer
            </p>
          </div>

          {/* NAV LINKS */}
          <div className="flex gap-10 text-background text-[10px] uppercase tracking-[0.3em] font-black">
            {["About", "Experience", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-industrial-blue transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* TAGLINE */}
          <div className="text-center md:text-right">
            <p className="text-secondary text-[16px] uppercase font-bold tracking-widest">
              {new Date().getFullYear()} Rajnish Patel
            </p>
            <p className="text-secondary text-[20px] mt-1 italic">
              Engineered for Reliable Shutdown Excellence
            </p>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-16 pt-8 border-t border-background/10 text-center">
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-1 h-1 bg-secondary rounded-full" />
            ))}
          </div>

          <p className="text-background text-md mt-3">
            © All rights reserved. Made by{" "}
            <a
              href="https://myportfolio1it.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                underline
                decoration-[hsl(var(--foreground))]
                decoration-1
                underline-offset-1
                transition-colors duration-200
                hover:decoration-secondary
                hover:text-secondary
              "
            >
              Maya
            </a>
          </p>

          <a
            href="mailto:patelmaya9812@gmail.com"
            className="text-secondary font-semibold text-xs mt-1 inline-block"
          >
            patelmaya9812@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
