"use client"

import { personalInfo, socialLinks } from "@/lib/portfolio-data"
import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contato" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="absolute left-0 top-0 h-px w-full bg-border" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              04
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Contato
          </h2>
          <p className="mb-12 max-w-2xl text-base text-foreground/50">
            Tem um projeto interessante ou quer trocar ideias sobre dados? 
            Ficarei feliz em conversar.
          </p>
        </div>

        <div
          className={`grid gap-6 md:grid-cols-3 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Email card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-card/30 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <Mail size={22} />
            </div>
            <div>
              <h3 className="mb-1 font-medium text-foreground">Email</h3>
              <p className="text-sm text-foreground/50">{personalInfo.email}</p>
            </div>
            <div className="mt-auto flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Enviar email <ArrowUpRight size={14} />
            </div>
          </a>

          {/* LinkedIn card */}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card/30 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <Linkedin size={22} />
              </div>
              <div>
                <h3 className="mb-1 font-medium text-foreground">LinkedIn</h3>
                <p className="text-sm text-foreground/50">Vamos nos conectar</p>
              </div>
              <div className="mt-auto flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Ver perfil <ArrowUpRight size={14} />
              </div>
            </a>
          )}

          {/* GitHub card */}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card/30 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <Github size={22} />
              </div>
              <div>
                <h3 className="mb-1 font-medium text-foreground">GitHub</h3>
                <p className="text-sm text-foreground/50">Veja meus repositorios</p>
              </div>
              <div className="mt-auto flex items-center gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Ver perfil <ArrowUpRight size={14} />
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
