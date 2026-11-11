import { copyFile, mkdir } from "node:fs/promises"

// GitHub Pages serves static files, so each client-side route needs an entry.
for (const page of ["about", "pricing", "faq", "hipaa", "privacy", "terms"]) {
  await mkdir(`dist/${page}`, { recursive: true })
  await copyFile("dist/index.html", `dist/${page}/index.html`)
}
