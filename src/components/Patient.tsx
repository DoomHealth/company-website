import { useState } from "react"

const moods = [
  { id: "low", label: "Low" },
  { id: "heavy", label: "Heavy" },
  { id: "steady", label: "Steady" },
  { id: "good", label: "Good" },
  { id: "light", label: "Light" },
]

export function Patient() {
  const [mood, setMood] = useState("steady")
  const [requested, setRequested] = useState(false)
  const [ordered, setOrdered] = useState(false)

  return (
    <section id="patients" className="patient" aria-labelledby="patient-title">
      <div className="wrap patient-grid">
        <div className="phone-wrap" data-reveal>
          <div className="phone">
            <div className="phone-screen">
              <header className="phone-top">
                <span>doomhealth</span>
                <span>Thursday</span>
              </header>
              <p className="phone-ask">How did today feel?</p>
              <div className="moods" role="group" aria-label="Example mood log">
                {moods.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={mood === item.id ? "mood on" : "mood"}
                    aria-pressed={mood === item.id}
                    onClick={() => setMood(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <p className="phone-note">
                {mood === "steady"
                  ? "Saved to your record. Your clinician can see the trend at the next visit."
                  : `Saved to your record · ${moods.find((item) => item.id === mood)?.label}. Your clinician can see the trend at the next visit.`}
              </p>

              <h3>Requests</h3>
              <button
                type="button"
                className={requested ? "request done" : "request"}
                aria-pressed={requested}
                onClick={() => setRequested((value) => !value)}
              >
                <span>
                  <strong>Amlodipine refill</strong>
                  <small>Send to the practice</small>
                </span>
                <em>{requested ? "Requested" : "Request"}</em>
              </button>
              <button
                type="button"
                className={ordered ? "request done" : "request"}
                aria-pressed={ordered}
                onClick={() => setOrdered((value) => !value)}
              >
                <span>
                  <strong>Home BP cuff</strong>
                  <small>Order supplies</small>
                </span>
                <em>{ordered ? "Ordered" : "Order"}</em>
              </button>

              <h3>Today</h3>
              <ul className="today">
                <li>
                  <span>Sleep</span>
                  <b>6h 10m</b>
                </li>
                <li>
                  <span>Activity</span>
                  <b>6,240 steps</b>
                </li>
                <li>
                  <span>Calories</span>
                  <b>1,840</b>
                </li>
                <li>
                  <span>Flu vaccine</span>
                  <b>Window open</b>
                </li>
              </ul>
            </div>
          </div>
          <p className="phone-caption">Example patient app. Your entries stay on your record.</p>
        </div>

        <div data-reveal data-d="1">
          <p className="kicker">Patient app</p>
          <h2 id="patient-title">The year has somewhere to live.</h2>
          <p className="dek">
            Between visits, patients request medications, order the medical
            supplies they need, and keep a record of mood, anxiety, vaccines,
            diet, exercise, and calories.
          </p>
          <p className="dek">
            doomhealth brings that record into the ambient note, so the clinician
            is looking at a life when they prescribe. Patients can see the
            same year — sleep, food, movement, vaccines, and how they felt —
            and use it to live a healthier one.
          </p>
          <ul className="care-list">
            <li>
              <strong>Medications and supplies.</strong> Request a refill or
              order what the care plan calls for. The practice receives it.
            </li>
            <li>
              <strong>Mood and anxiety.</strong> A daily bookkeeping of how
              the days felt, read as a trend at the visit.
            </li>
            <li>
              <strong>Body and prevention.</strong> Diet, exercise, calories,
              and vaccines, collected once and used in the visit.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
