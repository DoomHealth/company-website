import { Ehrs } from "./components/Ehrs"
import { Footer } from "./components/Footer"
import { Gap } from "./components/Gap"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { Note } from "./components/Note"
import { Patient } from "./components/Patient"
import { Pilot } from "./components/Pilot"
import { Platform } from "./components/Platform"
import { useReveal } from "./useReveal"

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip" href="#top">
        Skip to content
      </a>
      <Nav />
      <main id="top">
        <Hero />
        <Gap />
        <Platform />
        <Note />
        <Patient />
        <Ehrs />
        <Pilot />
      </main>
      <Footer />
    </>
  )
}
