import { chapters, flow } from "../content"

export function Platform() {
  return (
    <section id="platform" className="platform" aria-labelledby="platform-title">
      <div className="wrap">
        <header className="section-head">
          <p className="kicker">The platform</p>
          <h2 id="platform-title">One company. Four rooms of the practice.</h2>
          <p>
            Front office, documentation, back office, and patient care share
            one record. What the patient lives, what the voice agent books,
            and what the clinician signs all meet in the chart.
          </p>
        </header>

        <div className="chapters">
          {chapters.map((chapter) => (
            <article id={chapter.id} key={chapter.id} className="chapter">
              <p className="chapter-n">{chapter.n}</p>
              <div>
                <p className="kicker">{chapter.kicker}</p>
                <h3>{chapter.title}</h3>
              </div>
              <div>
                <p>{chapter.body}</p>
                <ul>
                  {chapter.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <ol className="flow" aria-label="How a patient moves through doomhealth">
          {flow.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
