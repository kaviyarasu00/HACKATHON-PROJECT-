# Sentinel Grid — Smart Industrial Alert

A Vite + React dashboard demo for an ESP32 gas sensor, MQTT topic, and Node-RED-style alert flow.

## Git Bash / VS Code setup

```bash
mkdir smart-industrial-alert
cd smart-industrial-alert
npm install
npm run dev
```

If you are copying this project file-by-file, create the following structure first:

```text
smart-industrial-alert/
├── index.html
├── package.json
├── public/
│   └── manus-routes.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── components/
    │   ├── ActivityLog.jsx
    │   ├── Gauge.jsx
    │   ├── StatusCard.jsx
    │   └── TrendChart.jsx
    └── data/
        └── simulation.js
```

Then paste the files in this order:

1. `package.json`
2. `index.html`
3. `public/manus-routes.json`
4. `src/main.jsx`
5. `src/data/simulation.js`
6. `src/components/StatusCard.jsx`
7. `src/components/Gauge.jsx`
8. `src/components/TrendChart.jsx`
9. `src/components/ActivityLog.jsx`
10. `src/App.jsx`
11. `src/styles.css`

## Demo controls

- **Normal drift / Rising gas concentration / Injected threshold spike** changes the virtual sensor profile.
- **Inject alert** manually pushes the sensor above the threshold.
- **MQTT connected** toggles the live simulation on and off.
- **Alert at** changes the Node-RED comparator threshold.
- The LED, buzzer, gauge, activity stream, trend line, and flow nodes update from the same simulated reading.

## Real hardware extension

Replace `nextReading()` in `src/data/simulation.js` with a fetch/WebSocket/MQTT bridge when connecting a real broker. The expected UI-side reading shape is a number from `0` to `100` PPM index.
