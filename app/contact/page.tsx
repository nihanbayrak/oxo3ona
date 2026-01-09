"use client"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-light mb-16 tracking-tight">Contact</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-light mb-3">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground py-3 outline-none transition-colors font-light"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-light mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground py-3 outline-none transition-colors font-light"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-light mb-3">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground py-3 outline-none transition-colors font-light"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-light mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground py-3 outline-none transition-colors font-light resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-3 bg-foreground text-background font-light hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>

              {status === "success" && (
                <p className="mt-4 text-sm text-foreground/70">Message sent successfully!</p>
              )}

              {status === "error" && (
                <p className="mt-4 text-sm text-foreground/70">
                  Failed to send message. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
