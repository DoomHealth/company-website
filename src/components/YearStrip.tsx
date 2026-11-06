const WEEKS = 52
const VISIT = 40

export function YearStrip() {
  return (
    <figure className="year" aria-label="Fifty-two weeks. One of them is the visit.">
      <svg viewBox={`0 0 ${WEEKS * 10} 56`} role="presentation">
        {Array.from({ length: WEEKS }, (_, i) => {
          const visit = i === VISIT
          return (
            <line
              key={i}
              x1={6 + i * 10}
              x2={6 + i * 10}
              y1={visit ? 6 : 20}
              y2={visit ? 46 : 34}
              className={visit ? "tick visit" : "tick"}
            />
          )
        })}
      </svg>
      <figcaption>
        <span>The year</span>
        <span className="visit-label">The visit</span>
      </figcaption>
    </figure>
  )
}
