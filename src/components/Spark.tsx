type SparkProps = {
  points: number[]
  accent?: boolean
}

export function Spark({ points, accent = false }: SparkProps) {
  const w = 112
  const h = 36
  const min = Math.min(...points)
  const max = Math.max(...points)
  const span = max - min || 1
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w
      const y = h - 4 - ((p - min) / span) * (h - 8)
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(" ")

  return (
    <svg
      className={accent ? "spark spark-accent" : "spark"}
      viewBox={`0 0 ${w} ${h}`}
      aria-hidden="true"
    >
      <path d={d} pathLength={1} />
    </svg>
  )
}
