import React, { useState } from 'react'
import './AuthLayout.css'

function Login({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (email && password) {
      onNavigate('home')
    }
  }

  return (
    <div className="auth-container">

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
              className='password-input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg viewBox="0 0 24 24">
                  <path d="M12 19c-4.97 0-9-4.03-9-9 0-1.42.33-2.76.93-3.96l1.47 1.47C5.15 8.24 5 9.1 5 10c0 3.87 3.13 7 7 7 .9 0 1.76-.15 2.58-.43l1.47 1.47c-1.2.6-2.54.96-3.96.96zm0-14c4.97 0 9 4.03 9 9 0 1.42-.33 2.76-.93 3.96l-1.47-1.47c.25-.76.4-1.57.4-2.49 0-3.87-3.13-7-7-7-.92 0-1.73.15-2.49.4L8.04 4.93C9.24 4.33 10.58 4 12 4zm0 3.5c1.38 0 2.5 1.12 2.5 2.5 0 .39-.1.75-.26 1.07l-3.31-3.31c.32-.16.68-.26 1.07-.26zm-3.57 5.1c-.57-.73-.93-1.64-.93-2.6 0-1.38 1.12-2.5 2.5-2.5.96 0 1.87.36 2.6.93l-4.17 4.17zM2.27 4.27l2.28 2.28 13.18 13.18 2.28-2.28L4.55 2l-2.28 2.27z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              )}
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