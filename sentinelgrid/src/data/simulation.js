export const initialReadings = [34, 37, 39, 36, 42, 45, 43, 47, 50, 48, 46, 51, 54, 52, 57, 55, 58, 61, 59, 63, 66, 62, 60, 64]

export const sensorProfiles = {
  normal: { label: 'Normal drift', base: 42, spread: 10 },
  rising: { label: 'Rising gas concentration', base: 70, spread: 22 },
  spike: { label: 'Injected threshold spike', base: 94, spread: 7 },
}

export function nextReading(mode = 'normal', tick = 0) {
  const profile = sensorProfiles[mode] ?? sensorProfiles.normal
  const wave = Math.sin(tick / 2.6) * profile.spread * 0.28
  const noise = (Math.random() - 0.5) * profile.spread * 0.45
  return Math.max(0, Math.min(100, Math.round(profile.base + wave + noise)))
}

export function severityFor(value, threshold) {
  if (value >= threshold + 15) return 'critical'
  if (value >= threshold) return 'warning'
  return 'safe'
}

export function formatTime(date = new Date()) {
  return new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date)
}
