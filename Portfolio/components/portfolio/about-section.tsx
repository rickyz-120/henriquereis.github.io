"use client"

import { aboutMe } from "@/lib/portfolio-data"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative py-24 sm:py-32"
    >
      {/* Decorative line */}
      <div className="absolute left-0 top-0 h-px w-full bg-border" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Section label */}
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              01
            </span>
          </div>

          <h2 className="mb-12 text-3xl font-bold text-foreground sm:text-4xl">
            {aboutMe.title}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Text content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {aboutMe.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-base leading-relaxed text-foreground/60 transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 150}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Stats / Highlights */}
          <div className="lg:col-span-2">
            <div
              className={`space-y-6 transition-all duration-700 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="rounded-2xl border border-border bg-card/30 p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
                  Foco Atual
                </h3>
                <ul className="space-y-3">
                  {[
                    "Business Intelligence",
                    "Ciencia de Dados",
                    "Machine Learning",
                    "Analise Exploratoria",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-foreground/70"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card/30 p-5 text-center">
                  <div className="text-2xl font-bold text-accent">BI</div>
                  <div className="mt-1 text-xs text-foreground/40">Area Principal</div>
                </div>
                <div className="rounded-2xl border border-border bg-card/30 p-5 text-center">
                  <div className="text-2xl font-bold text-accent">DS</div>
                  <div className="mt-1 text-xs text-foreground/40">Em Evolucao</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
