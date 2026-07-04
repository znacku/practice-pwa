import React, { useState } from 'react'
import './index.css'

import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import RegisterWizard from './pages/auth/register/RegisterWizard'

function App() {
  const [currentScreen, setCurrentScreen] = useState('login')

  return (
    <div className="app-container">
      {currentScreen === 'login' && <Login onNavigate={setCurrentScreen} />}
      {currentScreen === 'forgot-password' && <ForgotPassword onNavigate={setCurrentScreen} />}
      {currentScreen === 'register' && <RegisterWizard onNavigate={setCurrentScreen} />}

      {/* HOMEPAGE PLACEHOLDER FOR NEXT WORK PHASE */}
      {currentScreen === 'home' && (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--primary-blue)' }}>
          <h2>Welcome to FirePulse</h2>
          <p style={{ margin: '1rem 0' }}>Static Central Hub Component</p>
          <button className="btn-login" onClick={() => setCurrentScreen('login')}>
            Log Out
          </button>
        </div>
      )}
    </div>
  )
}

export default App