import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
}

export function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted rounded-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="text-xl font-light mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
