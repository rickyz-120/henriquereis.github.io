import { personalInfo } from "@/lib/portfolio-data"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-foreground/30">
          {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
        </p>
        <p className="font-mono text-xs text-foreground/20">
          Feito com Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
