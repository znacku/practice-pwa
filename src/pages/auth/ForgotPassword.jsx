import React, { useState } from 'react'

function ForgotPassword({ onNavigate }) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Reset token dispatched to ${email}`)
    onNavigate('login')
  }

  return (
    <div className="auth-container">
      <button className="back-btn" onClick={() => onNavigate('login')} aria-label="Go back">
        <span className="back-arrow"></span>
      </button>

      <h1 className="auth-title" style={{ margin: '3rem 0 1.5rem 0' }}>Reset Password</h1>

      <p style={{ color: 'var(--secondary-blue)', textAlign: 'center', marginBottom: '2.5rem', fontSize: '0.95rem', lineHeight: '1.4' }}>
        Enter your registered agency email address below to receive verification recovery instructions.
      </p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
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

        <button type="submit" className="btn-login" style={{ marginTop: '2rem' }}>Send Link</button>
      </form>

      <div className="auth-footer-fixed">
        Remembered your credentials?
        <button className="footer-link" onClick={() => onNavigate('login')}>Sign In</button>
      </div>
    </div>
  )
}

export default ForgotPassword