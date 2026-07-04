import React, { useState } from 'react'

function Login({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (email && password) {
      onNavigate('home') // Route cleanly into home view
    }
  }

  return (
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
              👁️
            </button>
          </div>
        </div>

        <div className="forgot-password-container">
          <button type="button" className="forgot-link" onClick={() => onNavigate('forgot-password')}>
            Forgot Password?
          </button>
        </div>

        <button type="submit" className="btn-login">Login</button>
      </form>

      <div className="auth-footer-fixed">
        Don’t have an account?
        <button className="footer-link" onClick={() => onNavigate('register')}>Sign up</button>
      </div>
    </div>
  )
}

export default Login