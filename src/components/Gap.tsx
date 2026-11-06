import { signals } from "../content"

export function Gap() {
  return (
    <section className="gap" aria-labelledby="gap-title">
      <div className="wrap gap-grid">
        <div>
          <p className="kicker">The record</p>
          <h2 id="gap-title">
            Fifteen minutes in the room.
            <em> A year of the patient outside it.</em>
          </h2>
        </div>
        <div className="gap-copy">
          <p>
            Clinicians decide from what they can see. The chart holds
            medications, conditions, labs, and prior notes. Watches, glucose
            monitors, home blood pressure cuffs, and the patient’s own log
            keep going after the door closes.
          </p>
          <p>
            The chart is the starting point. Wearables, home devices, and the
            life the patient records are the rest of the story doomhealth brings
            into the visit.
          </p>
          <ul className="signals">
            {signals.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <small>{item.source}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
