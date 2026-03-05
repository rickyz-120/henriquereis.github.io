"use client"

import { projects } from "@/lib/portfolio-data"
import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Clock } from "lucide-react"

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projetos" ref={sectionRef} className="relative py-24 sm:py-32">
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
              03
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Projetos
          </h2>
          <p className="mb-12 max-w-2xl text-base text-foreground/50">
            Uma selecao de projetos que demonstram minhas habilidades em analise de dados, 
            visualizacao e ciencia de dados.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card/30 transition-all duration-500 hover:border-primary/40 hover:bg-card/50 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Status indicator */}
              {project.status === "em-breve" && (
                <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 backdrop-blur-sm">
                  <Clock size={12} className="text-accent" />
                  <span className="text-xs font-medium text-accent">Em Breve</span>
                </div>
              )}

              {/* Card content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-foreground/50">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-foreground/60 transition-all hover:border-primary/40 hover:text-accent"
                    >
                      <ExternalLink size={14} />
                      Ver Projeto
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-foreground/60 transition-all hover:border-primary/40 hover:text-accent"
                    >
                      <Github size={14} />
                      Codigo
                    </a>
                  )}
                  {project.status === "em-breve" && !project.link && !project.github && (
                    <span className="text-sm text-foreground/30 italic">
                      Projeto em desenvolvimento...
                    </span>
                  )}
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute inset-0 -z-10 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
