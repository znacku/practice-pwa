import React, { useState } from 'react'

function ForgotPassword({ onNavigate }) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Reset request dispatched to ${email}`)
    onNavigate('login')
  }

  return (
    <div className="auth-container">
      <button className="back-btn" onClick={() => onNavigate('login')} aria-label="Go back">
        <span className="back-arrow"></span>
      </button>

      {/* Header text match for 2-1_Forgot Password.png */}
      <h1 className="auth-title">Forgot Password?</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
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

        {/* Button copy match */}
        <button type="submit" className="btn-login" style={{ marginTop: '12rem' }}>
          Send Request
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword