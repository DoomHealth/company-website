import { useEffect, useState } from "react"
import { nav } from "../content"

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const close = () => setOpen(false)
  const home = window.location.pathname === "/" ? "" : "/"

  return (
    <header className={scrolled || open ? "site-header scrolled" : "site-header"}>
      <div className="wrap nav-bar">
        <a className="logo" href={`${home}#top`} onClick={close}>
          <Trace />
          doomhealth
        </a>
        <nav
          id="site-menu"
          className={open ? "nav-links open" : "nav-links"}
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a key={item.href} href={`${home}${item.href}`} onClick={close}>
              {item.label}
            </a>
          ))}
          <a href="/pricing" onClick={close}>Pricing</a>
          <a href="/faq" onClick={close}>FAQs</a>
          <details className="nav-company">
            <summary>Company</summary>
            <div className="nav-company-links">
              <a href="/about" onClick={close}>About</a>
              <a href="/hipaa" onClick={close}>HIPAA &amp; security</a>
              <a href="/privacy" onClick={close}>Privacy policy</a>
              <a href="/terms" onClick={close}>Terms</a>
            </div>
          </details>
          <a className="btn btn-small" href={`${home}#pilot`} onClick={close}>
            Request a pilot
          </a>
        </nav>
        <a className="nav-pilot" href={`${home}#pilot`} onClick={close}>
          Pilot
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <i />
          <i />
        </button>
      </div>
    </header>
  )
}

function Trace() {
  return (
    <svg className="logo-mark" viewBox="0 0 28 16" aria-hidden="true">
      <path d="M1 10h5l3-7 4 11 3-6h11" />
    </svg>
  )
}
