import { ArrowUpRight } from "lucide-react"

type Exhibition = {
  title: string
  type: string
  location: string
  year: string
  link?: string
}

const exhibitions: Exhibition[] = [
  {
    title: "Zemin Berlin",
    type: "Solo Exhibition",
    location: "Berlin",
    year: "2025",
    link: "https://zeminberlin.de/",
  },
  {
    title: "Likeacasino",
    type: "Group Exhibition",
    location: "Berlin",
    year: "2025",
  },
  {
    title: "Ziyan Records",
    type: "Group Exhibition",
    location: "Berlin",
    year: "2025",
  },
  {
    title: "Modernismus",
    type: "Solo Art Installation",
    location: "Berlin",
    year: "2024",
  },
  {
    title: "Modernismus",
    type: "Solo Art Display",
    location: "Berlin",
    year: "2024",
  },
  {
    title: "Likeacasino",
    type: "Dark Rings Like a Bell",
    location: "Berlin",
    year: "2024",
  },
  {
    title: "Zentrale Space",
    type: "Group Exhibition",
    location: "Berlin",
    year: "2021",
  },
  {
    title: "Hoodbase",
    type: "Group Exhibition",
    location: "Istanbul",
    year: "2021",
    link: "https://www.hood-base.com/",
  },
  {
    title: "Nobu Art Project",
    type: "Group Exhibition",
    location: "Antalya",
    year: "2021",
    link: "https://nobuartproject.com/",
  },
]

export default function ExhibitionsPage() {
  const groupedByYear = exhibitions.reduce(
    (acc, exhibition) => {
      if (!acc[exhibition.year]) {
        acc[exhibition.year] = []
      }
      acc[exhibition.year].push(exhibition)
      return acc
    },
    {} as Record<string, Exhibition[]>
  )

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a))

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Exhibitions</h1>
          <p className="text-muted-foreground font-light mb-20">
            Selected exhibitions and installations
          </p>

          <div className="space-y-16">
            {sortedYears.map((year) => (
              <div key={year} className="group">
                <div className="flex items-baseline gap-8 mb-8">
                  <span className="text-6xl md:text-8xl font-extralight text-muted-foreground/30">
                    {year}
                  </span>
                </div>

                <div className="space-y-1">
                  {groupedByYear[year].map((exhibition, index) => (
                    <div
                      key={`${exhibition.title}-${index}`}
                      className="group/item border-b border-border/50 last:border-b-0"
                    >
                      {exhibition.link ? (
                        <a
                          href={exhibition.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between py-5 hover:opacity-60 transition-opacity"
                        >
                          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
                            <span className="text-lg md:text-xl font-light">
                              {exhibition.title}
                            </span>
                            <span className="text-sm text-muted-foreground font-light">
                              {exhibition.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground font-light hidden sm:block">
                              {exhibition.location}
                            </span>
                            <ArrowUpRight className="w-4 h-4 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center justify-between py-5">
                          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
                            <span className="text-lg md:text-xl font-light">
                              {exhibition.title}
                            </span>
                            <span className="text-sm text-muted-foreground font-light">
                              {exhibition.type}
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground font-light">
                            {exhibition.location}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
