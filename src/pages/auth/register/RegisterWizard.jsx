import React, { useState } from 'react'

function RegisterWizard({ onNavigate }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    badgeNumber: '',
    password: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="auth-container">
      {/* Back navigation behavior changes depending on current step position */}
      <button
        className="back-btn"
        onClick={() => step === 1 ? onNavigate('login') : setStep(step - 1)}
        aria-label="Go back"
      >
        <span className="back-arrow"></span>
      </button>

      {/* STEP 1: ACCOUNT PROFILE BASICS */}
      {step === 1 && (
        <>
          <h1 className="auth-title">Registration</h1>
          <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter official email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-login" style={{ marginTop: '2rem' }}>Next: Verification</button>
          </form>
        </>
      )}

      {/* STEP 2: MULTI-PAGE AGENCY VERIFICATION SUB-FLOW */}
      {step === 2 && (
        <>
          <h1 className="auth-title">Verification</h1>
          <p style={{ color: 'var(--secondary-blue)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            Provide your official responder credentials for authorization assessment.
          </p>
          <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
            <div className="form-group">
              <label>Badge / Operational ID Number</label>
              <input
                type="text"
                placeholder="BFP-XXXX-XXXX"
                value={formData.badgeNumber}
                onChange={(e) => handleInputChange('badgeNumber', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Account Password</label>
              <input
                type="password"
                placeholder="Minimum 8 characters"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-login" style={{ marginTop: '2rem' }}>Submit Credentials</button>
          </form>
        </>
      )}

      {/* STEP 3: FINAL VERIFICATION STATE */}
      {step === 3 && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⏳</div>
          <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Review Pending</h2>
          <p style={{ color: 'var(--secondary-blue)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '2rem' }}>
            Your credential verification submission is being assessed by system administrators. You will receive an notification status update shortly.
          </p>
          <button className="btn-login" onClick={() => onNavigate('login')} style={{ width: '100%' }}>
            Return to Login
          </button>
        </div>
      )}

      {step < 3 && (
        <div className="auth-footer-fixed">
          Already have an account?
          <button className="footer-link" onClick={() => onNavigate('login')}>Sign In</button>
        </div>
      )}
    </div>
  )
}

export default RegisterWizard