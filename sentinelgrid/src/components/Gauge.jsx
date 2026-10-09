import { ShieldAlert } from 'lucide-react'

export default function Gauge({ value, threshold, severity }) {
  const radius = 82
  const circumference = 2 * Math.PI * radius
  const dash = (value / 100) * circumference
  return <div className="gauge-wrap"><div className={`gauge gauge-${severity}`}>
    <svg viewBox="0 0 220 220" aria-label={`Gas concentration ${value} percent`}><circle className="gauge-track" cx="110" cy="110" r={radius} /><circle className="gauge-progress" cx="110" cy="110" r={radius} strokeDasharray={`${dash} ${circumference - dash}`} /><circle className="gauge-glow" cx="110" cy="110" r={radius - 9} /></svg>
    <div className="gauge-center"><strong>{value}</strong><span>PPM index</span></div>
  </div><div className="gauge-caption"><ShieldAlert size={15} /> Threshold <b>{threshold} PPM</b></div></div>
}
