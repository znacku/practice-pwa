import React, { useState } from 'react'
import './App.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (email && password) {
      setCurrentScreen('dashboard')
    }
  }

  return (
    <div className="app-container">

      {/* LOGIN SCREEN BASED ON 2_Login Account.png */}
      {currentScreen === 'login' && (
        <div className="auth-container">

          <button className="back-btn" aria-label="Go back">
            <span className="back-arrow"></span>
          </button>

          <h1 className="auth-title">Login Account</h1>

          <form className="auth-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* Eye Icon Representation */}
                  👁️
                </button>
              </div>
            </div>

            <div className="forgot-password-container">
              <button type="button" className="forgot-link">Forgot Password?</button>
            </div>

            <button type="submit" className="btn-login">Login</button>
          </form>

          <div className="auth-footer-fixed">
            Don’t have an account?
            <button className="footer-link" onClick={() => alert('Registration routing goes here!')}>Sign up</button>
          </div>
        </div>
      )}

      {/* DASHBOARD PREVIEW ACCESSIBLE ONCE SIGNED IN */}
      {currentScreen === 'dashboard' && (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--primary-blue)' }}>
          <h2>Welcome to FirePulse</h2>
          <p style={{ margin: '1rem 0' }}>Authenticated Successfully</p>
          <button className="btn-login" onClick={() => setCurrentScreen('login')} style={{ marginTop: '1rem' }}>
            Back to Login View
          </button>
        </div>
      )}

    </div>
  )
}

export default App