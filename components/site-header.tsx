export function SiteHeader() {
  return (
    <header className="sticky top-0 bg-background/95 backdrop-blur z-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-foreground" />
            <span className="text-xl font-light tracking-wide">Oxo3ana</span>
          </div>

          {/* Center Navigation - absolute positioning to truly center */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-12">
            <a href="/" className="text-sm hover:opacity-60 transition-opacity">
              Portfolio
            </a>
            <a href="/about" className="text-sm hover:opacity-60 transition-opacity">
              About
            </a>
            <a href="/contact" className="text-sm hover:opacity-60 transition-opacity">
              Contact
            </a>
          </nav>

          {/* Right Side Link */}
          <a
            href="https://www.instagram.com/oxo3ona/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-60 transition-opacity"
          >
            Instagram
          </a>
        </div>
      </div>
    </header>
  )
}
