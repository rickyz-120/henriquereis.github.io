"use client"

import { personalInfo, socialLinks } from "@/lib/portfolio-data"
import { ArrowDown, Linkedin, Github, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentFullText.length) {
            setDisplayText(currentFullText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentFullText.slice(0, displayText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 30 : 80
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex, texts])

  return (
    <span className="font-mono text-accent">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{id: number; x: number; y: number; size: number; delay: number; duration: number}>>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
      }))
    )
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/20 animate-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <FloatingParticles />

      {/* Glow effects */}
      <div
        className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className={`relative z-10 mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-medium text-accent">
            {personalInfo.availability}
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
          <span className="text-balance">{personalInfo.name}</span>
        </h1>

        <div className="mb-6 flex items-center justify-center gap-2 text-lg text-foreground/70 sm:text-xl">
          <span>{personalInfo.role}</span>
          <span className="text-primary">{"/"}</span>
          <TypewriterText
            texts={[
              "Data Science",
              "Machine Learning",
              "Business Intelligence",
              "Data Analytics",
            ]}
          />
        </div>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-foreground/50 sm:text-lg">
          {personalInfo.tagline}
        </p>

        {/* Location */}
        <div className="mb-8 flex items-center justify-center gap-1.5 text-sm text-foreground/40">
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
        </div>

        {/* Social links */}
        <div className="mb-12 flex items-center justify-center gap-4">
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/50 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={18}
                className="text-foreground/50 transition-colors group-hover:text-accent"
              />
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/50 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10"
              aria-label="GitHub"
            >
              <Github
                size={18}
                className="text-foreground/50 transition-colors group-hover:text-accent"
              />
            </a>
          )}
        </div>

        {/* Scroll indicator */}
        <a
          href="#sobre"
          className="inline-flex animate-bounce items-center gap-2 text-sm text-foreground/30 transition-colors hover:text-accent"
          aria-label="Rolar para a secao Sobre"
        >
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  )
}
