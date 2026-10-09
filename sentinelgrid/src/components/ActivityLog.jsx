import { AlertTriangle, BellRing, Check, CheckCircle2, Radio } from 'lucide-react'
const icons = { critical: AlertTriangle, warning: BellRing, info: Radio, safe: CheckCircle2 }
export default function ActivityLog({ events, onAcknowledge }) {
  return <div className="activity-list">{events.length === 0 && <div className="empty-state">No events match this filter.</div>}{events.map((event) => { const Icon = icons[event.type] ?? Radio; return <div className={`activity-row ${event.ack ? 'is-ack' : ''}`} key={event.id}><span className={`activity-icon activity-${event.type}`}><Icon size={15} /></span><div><b>{event.title}</b><p>{event.detail}</p></div><time>{event.time}</time>{!event.ack && <button className="row-ack" onClick={() => onAcknowledge?.(event.id)} aria-label="Acknowledge alert"><Check size={13} /></button>}</div> })}</div>
}
