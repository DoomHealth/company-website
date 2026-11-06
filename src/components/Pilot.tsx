import { useState, type FormEvent } from "react"
import { CONTACT_EMAIL, interests, roles } from "../content"

export function Pilot() {
  const [opened, setOpened] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const org = String(data.get("org") ?? "").trim()
    const role = String(data.get("role") ?? "").trim()
    const interest = String(data.get("interest") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${org || "—"}`,
      `Role: ${role}`,
      `Interest: ${interest}`,
      "",
      message || "(no note)",
    ].join("\n")

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `doomhealth — ${role} — ${name}`,
    )}&body=${encodeURIComponent(body)}`

    setOpened(true)
    window.location.href = href
  }

  return (
    <section id="pilot" className="pilot" aria-labelledby="pilot-title">
      <div className="wrap pilot-grid">
        <div>
          <p className="kicker">Pilots</p>
          <h2 id="pilot-title">Bring the year into the next visit.</h2>
          <p className="dek">
            A pilot version for a small number of clinicians: voice at the
            front door, the ambient note with patient context, and the app
            patients keep between visits.
          </p>
          <p className="dek quiet">
            Based in Mountain View and San Francisco. Write{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>

        <form className="form" onSubmit={submit}>
          <div className="fields">
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Organization
              <input name="org" type="text" autoComplete="organization" />
            </label>
            <label>
              Role
              <select name="role" defaultValue="" required>
                <option value="" disabled>
                  Select
                </option>
                {roles.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            </label>
            <label className="span">
              What do you want to see
              <select name="interest" defaultValue="The whole platform" required>
                {interests.map((interest) => (
                  <option key={interest}>{interest}</option>
                ))}
              </select>
            </label>
            <label className="span">
              Note
              <textarea name="message" rows={4} />
            </label>
          </div>
          <button className="btn" type="submit">
            Request a pilot
          </button>
          {opened && (
            <p className="form-status" role="status">
              Your email app should open a note to {CONTACT_EMAIL}. If it does
              not, write to that address directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
