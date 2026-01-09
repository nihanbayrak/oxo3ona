import { ProjectGrid } from "@/components/project-grid"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectGrid />
    </main>
  )
}
