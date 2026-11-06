const moves = [
  {
    n: "Read",
    text: "Medications, conditions, labs, and prior notes, plus the year from devices and the patient app.",
  },
  {
    n: "Listen",
    text: "The visit itself, the way any ambient scribe does, with the chart and the year already in view.",
  },
  {
    n: "Write",
    text: "The note, back into the chart, for the clinician to review and sign. Voice and revenue cycle use the same connection.",
  },
]

export function Ehrs() {
  return (
    <section id="ehrs" className="ehrs" aria-labelledby="ehr-title">
      <div className="wrap">
        <p className="kicker">Integrations</p>
        <div className="ehr-stat">
          <span>70+</span>
          <h2 id="ehr-title">EHRs. The note goes back to the chart they already sign.</h2>
        </div>
        <p className="ehr-lead">
          Practices stay on the record system they run. doomhealth reads and writes
          across 70+ electronic health records, including legacy systems that
          never published a clean API.
        </p>
        <ol className="moves">
          {moves.map((move) => (
            <li key={move.n}>
              <strong>{move.n}</strong>
              <p>{move.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
