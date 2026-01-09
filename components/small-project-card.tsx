import { ArrowUpRight } from "lucide-react"

interface SmallProjectCardProps {
  title: string
  description: string
  year: string
  badge?: string
  link?: string
}

export function SmallProjectCard({ title, description, year, badge, link }: SmallProjectCardProps) {
  const Component = link ? "a" : "div"

  return (
    <Component
      {...(link && { href: link })}
      className="group cursor-pointer p-6 border border-border rounded-sm hover:border-foreground/20 transition-colors"
    >
      <div className="mb-4">
        {badge && (
          <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground mb-3">
            {badge}
          </span>
        )}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-light text-foreground">{title}</h3>
          {link && (
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      <time className="text-xs text-muted-foreground">{year}</time>
    </Component>
  )
}
