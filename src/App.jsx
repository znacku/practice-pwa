import React, { useState } from 'react'
import './App.css'

function App() {
  const [reports, setReports] = useState([
    { id: 1, type: 'Structure Fire', location: 'Station Sector A', status: 'Dispatched' },
    { id: 2, type: 'Medical Emergency', location: 'Zone 4', status: 'In Progress' }
  ])

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>FirePulse Mobile</h1>
        <span className="status-badge">Online System</span>
      </header>

      {/* Main Content Dashboard */}
      <main className="dashboard-content">
        <section className="stat-card">
          <h3>Active Incidents</h3>
          <p className="stat-number">{reports.length}</p>
        </section>

        <h2>Recent Dispatches</h2>
        <div className="report-list">
          {reports.map(report => (
            <div key={report.id} className="report-card">
              <div className="report-details">
                <h4>{report.type}</h4>
                <p>{report.location}</p>
              </div>
              <span className={`status ${report.status.toLowerCase().replace(' ', '-')}`}>
                {report.status}
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Nav Bar */}
      <nav className="bottom-nav">
        <button className="nav-item active">Dashboard</button>
        <button className="nav-item">Map View</button>
        <button className="nav-item">Alerts</button>
      </nav>
    </div>
  )
}

export default App