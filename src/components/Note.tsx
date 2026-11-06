import { useState } from "react"

const sections = ["history", "htn", "dm", "mood", "prevention"] as const

type SectionId = (typeof sections)[number]

export function Note() {
  const [approved, setApproved] = useState<Partial<Record<SectionId, boolean>>>({})
  const allApproved = sections.every((id) => approved[id])

  function toggle(id: SectionId) {
    setApproved((current) => ({ ...current, [id]: !current[id] }))
  }

  return (
    <section id="note" className="note-section" aria-labelledby="note-title">
      <div className="wrap note-grid">
        <div className="note-intro">
          <p className="kicker">Ambient solution</p>
          <h2 id="note-title">The page they actually sign.</h2>
          <p>
            The draft follows the practice's template. The year shows up in
            the note, beside the sentence it supports, with linked evidence.
            The clinician verifies and approves each section, then signs.
            doomhealth writes the result back to the EHR.
          </p>
          <ul className="ambient-points">
            <li>
              <strong>Linked evidence.</strong>
              A line that uses the chart or the year links to the entry, lab,
              or device reading it came from.
            </li>
            <li>
              <strong>Section approval.</strong>
              The clinician verifies and approves each section of the template.
              The note is ready to sign once those sections are approved.
            </li>
            <li>
              <strong>Unlimited custom templates.</strong>
              A practice can keep as many templates as it uses. doomhealth
              drafts into that structure, section by section.
            </li>
          </ul>
          <div className="copilot">
            <p className="kicker">Copilot · example</p>
            <blockquote>
              <p>How has his sleep changed since we started sertraline?</p>
              <footer>
                Down about 40 minutes a night over five weeks. Cited to the
                sleep record and the medication start in the chart.
              </footer>
            </blockquote>
            <blockquote>
              <p>Summarize her last year.</p>
              <footer>
                Conditions, medications, labs, and device trends — each line
                tied to a chart entry or a reading.
              </footer>
            </blockquote>
          </div>
        </div>

        <article className="paper" aria-label="Example progress note">
          <header className="paper-top">
            <span>Example · custom template</span>
            <span>Primary care</span>
          </header>
          <h3>Progress note</h3>
          <p className="paper-kicker">Follow-up · blood pressure and mood</p>

          <section className="note-block">
            <div className="note-block-head">
              <h4>History</h4>
              <Approve id="history" approved={approved.history} onToggle={toggle} />
            </div>
            <p>
              Here for follow-up. Sleep has been lighter since the dose change.
              Taking amlodipine as prescribed. Walking less on short-sleep weeks.
            </p>
          </section>

          <section className="note-block">
            <div className="note-block-head">
              <h4>Hypertension</h4>
              <Approve id="htn" approved={approved.htn} onToggle={toggle} />
            </div>
            <p>
              Resting heart rate up 12 bpm over 6 weeks since starting
              amlodipine. Home blood pressure averaging 128/78, down from
              146/92 last quarter. Continue current dose. Recheck in 4 weeks.
            </p>
            <p className="cite">Home BP cuff, 6 weeks · Chart: amlodipine started 12 Mar</p>
          </section>

          <section className="note-block">
            <div className="note-block-head">
              <h4>Type 2 diabetes</h4>
              <Approve id="dm" approved={approved.dm} onToggle={toggle} />
            </div>
            <p>
              Fasting glucose trending down since the last visit. Diet log
              shows fewer late meals. Continue current plan.
            </p>
            <p className="cite">CGM, 30 days · Patient app, diet</p>
          </section>

          <section className="note-block">
            <div className="note-block-head">
              <h4>Mood</h4>
              <Approve id="mood" approved={approved.mood} onToggle={toggle} />
            </div>
            <p>
              Weekday anxiety scores higher. Sleep down about 40 minutes a
              night since sertraline was started. Discussed timing of the dose.
              Patient will keep the daily log.
            </p>
            <p className="cite">Patient log · Chart: sertraline · Sleep record</p>
          </section>

          <section className="note-block">
            <div className="note-block-head">
              <h4>Prevention</h4>
              <Approve id="prevention" approved={approved.prevention} onToggle={toggle} />
            </div>
            <p>
              Vaccines current. Activity and calories reviewed with the patient
              and tied to the weeks sleep was short.
            </p>
            <p className="cite">Patient app · Apple Health</p>
          </section>

          <footer className="sign">
            <span>{allApproved ? "All sections approved" : "Approve each section"}</span>
            <span className="sign-line" />
            <span className={allApproved ? "sign-ready" : "sign-wait"}>
              {allApproved ? "Ready to sign" : "Sign"}
            </span>
          </footer>
        </article>
      </div>
    </section>
  )
}

function Approve({
  id,
  approved,
  onToggle,
}: {
  id: SectionId
  approved: boolean | undefined
  onToggle: (id: SectionId) => void
}) {
  return (
    <button
      type="button"
      className={approved ? "approve on" : "approve"}
      aria-pressed={Boolean(approved)}
      onClick={() => onToggle(id)}
    >
      {approved ? "Approved" : "Verify"}
    </button>
  )
}
