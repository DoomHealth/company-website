export function Note() {
  return (
    <section id="note" className="note-section" aria-labelledby="note-title">
      <div className="wrap note-grid">
        <div className="note-intro">
          <p className="kicker">Ambient documentation</p>
          <h2 id="note-title">The page they actually sign.</h2>
          <p>
            The year shows up in the note, beside the sentence it supports,
            with the source named. A copilot answers in plain language before
            or during the visit. The clinician reviews, edits, and signs.
            doomhealth writes the result back to the EHR.
          </p>
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
            <span>Example · draft for signature</span>
            <span>Primary care</span>
          </header>
          <h3>Progress note</h3>
          <p className="paper-kicker">Follow-up · blood pressure and mood</p>
          <p>
            Here for follow-up. Sleep has been lighter since the dose change.
            Taking amlodipine as prescribed. Walking less on short-sleep weeks.
          </p>
          <h4>Assessment and plan</h4>
          <p>
            <strong>Hypertension.</strong> Resting heart rate up 12 bpm over 6
            weeks since starting amlodipine. Home blood pressure averaging
            128/78, down from 146/92 last quarter. Continue current dose.
            Recheck in 4 weeks.
          </p>
          <p className="cite">Home BP cuff, 6 weeks · Chart: amlodipine started 12 Mar</p>
          <p>
            <strong>Type 2 diabetes.</strong> Fasting glucose trending down
            since the last visit. Diet log shows fewer late meals. Continue
            current plan.
          </p>
          <p className="cite">CGM, 30 days · Patient app, diet</p>
          <p>
            <strong>Mood.</strong> Weekday anxiety scores higher. Sleep down
            about 40 minutes a night since sertraline was started. Discussed
            timing of the dose. Patient will keep the daily log.
          </p>
          <p className="cite">Patient log · Chart: sertraline · Sleep record</p>
          <p>
            Vaccines current. Activity and calories reviewed with the patient
            and tied to the weeks sleep was short.
          </p>
          <p className="cite">Patient app · Apple Health</p>
          <footer className="sign">
            <span>Clinician review</span>
            <span className="sign-line" />
            <span>Sign</span>
          </footer>
        </article>
      </div>
    </section>
  )
}
