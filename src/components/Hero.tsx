import { brief } from "../content"
import { Spark } from "./Spark"
import { YearStrip } from "./YearStrip"

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker">Healthcare, around the visit</p>
          <h1 id="hero-title">
            See the year
            <em> before you prescribe.</em>
          </h1>
          <p className="lead">
            doomhealth is the system for the front office, the note, the revenue
            cycle, and the patient between visits.
          </p>
          <p className="dek">
            Before a clinician prescribes, they see what changed: the chart,
            wearables and home devices, mood, diet, activity, and vaccines.
            The note cites its sources and writes back across 70+ EHRs.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#pilot">
              Request a pilot
            </a>
            <a className="btn btn-ghost" href="#platform">
              See the platform
            </a>
          </div>
          <YearStrip />
        </div>

        <aside className="preview" aria-label="Example brief a clinician sees before the visit">
          <header className="preview-top">
            <span>Before the visit</span>
            <span>Example</span>
          </header>
          <p className="preview-who">Primary care · hypertension, type 2 diabetes</p>
          <ul className="brief">
            {brief.map((row, index) => (
              <li key={row.label}>
                <Spark points={row.points} accent={index === 0} />
                <div>
                  <strong>{row.label}</strong>
                  <span>
                    {row.value} <em>{row.span}</em>
                  </span>
                </div>
                <b>{row.why}</b>
              </li>
            ))}
          </ul>
          <p className="preview-foot">
            Home blood pressure, vaccines, diet, and activity sit in the same
            brief. Cited in the note the clinician signs.
          </p>
        </aside>
      </div>
    </section>
  )
}
