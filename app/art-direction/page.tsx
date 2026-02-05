export default function ArtDirectionPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Video */}
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube-nocookie.com/embed/37oek6snOQg?rel=0&modestbranding=1&showinfo=0&controls=1&color=white&iv_load_policy=3&playsinline=1"
              title="LIVING TEMPLES - LAMB AMONG WOLVES"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              style={{ border: "none" }}
            />
          </div>

          {/* Credits */}
          <div className="mt-10 md:mt-14 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              {/* Title & Release */}
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                  LIVING TEMPLES - LAMB AMONG WOLVES
                </h2>
                <p className="text-muted-foreground font-light">
                  First single off the new record GLASS — out March 31st 2024
                </p>
              </div>

              {/* Credits Grid */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
                <div className="space-y-4">
                  <div>
                    <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">Director / DOP</p>
                    <p className="font-light">Adam Munnings</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">Art Director</p>
                    <p className="font-light">Elif Zuhal Bayrak</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">Producer / AD</p>
                    <p className="font-light">Paul Scheufler</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">Gaffer</p>
                    <p className="font-light">Andrea Crisci</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">Additional Production</p>
                    <p className="font-light">Romy Hansford-Gerber</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground/60 text-xs uppercase tracking-wider mb-1">"The Twins"</p>
                    <p className="font-light">Marco Litta & Johnny Questions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
