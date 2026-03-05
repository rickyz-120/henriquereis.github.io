"use client"

import { skillCategories, type SkillLevel } from "@/lib/portfolio-data"
import { useEffect, useRef, useState } from "react"
import {
  BarChart3,
  PieChart,
  LineChart,
  LayoutDashboard,
  Code2,
  Database,
  Terminal,
  Braces,
  Table,
  Brain,
  Calculator,
  TrendingUp,
  Cloud,
  Server,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  BarChart3,
  PieChart,
  LineChart,
  LayoutDashboard,
  Code2,
  Database,
  Terminal,
  Braces,
  Table,
  Brain,
  Calculator,
  TrendingUp,
  Cloud,
  Server,
}

function getLevelColor(level: SkillLevel): string {
  switch (level) {
    case "Avancado":
      return "bg-accent text-accent-foreground"
    case "Intermediario":
      return "bg-primary/20 text-accent"
    case "Basico":
      return "bg-secondary/50 text-foreground/60"
  }
}

function getLevelWidth(level: SkillLevel): string {
  switch (level) {
    case "Avancado":
      return "w-full"
    case "Intermediario":
      return "w-2/3"
    case "Basico":
      return "w-1/3"
  }
}

export function SkillsSection() {
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
    <section id="habilidades" ref={sectionRef} className="relative py-24 sm:py-32">
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
              02
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Habilidades & Ferramentas
          </h2>
          <p className="mb-12 max-w-2xl text-base text-foreground/50">
            Tecnologias e ferramentas que utilizo para transformar dados em valor.
            Clique nas categorias para explorar cada area.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, catIndex) => (
            <div
              key={cat.category}
              className={`group rounded-2xl border border-border bg-card/30 p-6 transition-all duration-500 hover:border-primary/40 hover:bg-card/50 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {cat.category}
              </h3>
              <p className="mb-6 text-sm text-foreground/40">{cat.description}</p>

              <div className="space-y-4">
                {cat.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon]
                  return (
                    <div key={skill.name} className="group/skill">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {IconComponent && (
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover/skill:bg-primary/20">
                              <IconComponent size={16} />
                            </div>
                          )}
                          <span className="text-sm font-medium text-foreground/80">
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getLevelColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-1 overflow-hidden rounded-full bg-border">
                        <div
                          className={`h-full rounded-full bg-primary transition-all duration-1000 ${
                            isVisible ? getLevelWidth(skill.level) : "w-0"
                          }`}
                          style={{ transitionDelay: `${catIndex * 100 + 400}ms` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
