import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react'

export default function StatusCard({ icon: Icon, label, value, unit, detail, tone = 'blue', trend }) {
  const TrendIcon = trend > 0 ? ArrowUpRight : trend < 0 ? ArrowDownRight : Minus
  return <article className={`status-card tone-${tone}`}>
    <div className="status-card-top"><span className="icon-orb"><Icon size={18} strokeWidth={2.2} /></span><span className={`trend trend-${trend > 0 ? 'up' : trend < 0 ? 'down' : 'flat'}`}><TrendIcon size={14} /> {trend === 0 ? 'steady' : `${Math.abs(trend)}%`}</span></div>
    <p className="eyebrow">{label}</p><div className="metric-value">{value}<small>{unit}</small></div><p className="muted">{detail}</p>
  </article>
}
