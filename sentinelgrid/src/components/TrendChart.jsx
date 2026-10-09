export default function TrendChart({ points, threshold }) {
  const width = 700, height = 220, pad = 18
  const step = (width - pad * 2) / Math.max(points.length - 1, 1)
  const coords = points.map((value, index) => `${pad + index * step},${height - pad - (value / 100) * (height - pad * 2)}`).join(' ')
  const area = `${pad},${height - pad} ${coords} ${pad + (points.length - 1) * step},${height - pad}`
  const thresholdY = height - pad - (threshold / 100) * (height - pad * 2)
  return <div className="chart-shell"><svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" role="img" aria-label="Gas concentration trend">
    <defs><linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#64e3c2" stopOpacity=".28" /><stop offset="100%" stopColor="#64e3c2" stopOpacity="0" /></linearGradient></defs>
    {[25, 50, 75].map((line) => <line key={line} x1={pad} x2={width - pad} y1={height - pad - (line / 100) * (height - pad * 2)} y2={height - pad - (line / 100) * (height - pad * 2)} className="chart-grid" />)}
    <polygon points={area} fill="url(#areaGradient)" /><line x1={pad} x2={width - pad} y1={thresholdY} y2={thresholdY} className="threshold-line" /><polyline points={coords} className="chart-line" />
    <circle cx={pad + (points.length - 1) * step} cy={height - pad - (points.at(-1) / 100) * (height - pad * 2)} r="5" className="chart-dot" />
  </svg><div className="chart-labels"><span>− 60 min</span><span>− 30 min</span><span>Now</span></div></div>
}
