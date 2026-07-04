import React, { useState } from 'react'
import './RegisterWizard.css'

function RegisterWizard({ onNavigate }) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    city: '',
    district: '',
    zone: '',
    barangay: '',
    street: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    alert("Account submission processed!")
    onNavigate('login')
  }

  return (
    <div className="auth-container" style={{ minHeight: 'auto' }}>
      <button className="back-btn" onClick={() => onNavigate('login')} aria-label="Go back">
        <span className="back-arrow"></span>
      </button>

      <h1 className="auth-title" style={{ margin: '2rem 0' }}>Create Account</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        {/* Core Contacts */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            required
          />
        </div>

        <hr className="form-divider" />

        {/* Local Jurisdiction Grid 1 */}
        <div className="form-grid-2">
          <div className="form-group">
            <label>City</label>
            <select value={formData.city} onChange={(e) => handleChange('city', e.target.value)} required>
              <option value="">Select City</option>
              <option value="quezon-city">Quezon City</option>
            </select>
          </div>
          <div className="form-group">
            <label>District</label>
            <select value={formData.district} onChange={(e) => handleChange('district', e.target.value)} required>
              <option value="">Select District</option>
              <option value="district-1">District 1</option>
            </select>
          </div>
        </div>

        {/* Local Jurisdiction Grid 2 */}
        <div className="form-grid-2">
          <div className="form-group">
            <label>Zone</label>
            <select value={formData.zone} onChange={(e) => handleChange('zone', e.target.value)} required>
              <option value="">Select Zone</option>
              <option value="zone-1">Zone 1</option>
            </select>
          </div>
          <div className="form-group">
            <label>Barangay</label>
            <select value={formData.barangay} onChange={(e) => handleChange('barangay', e.target.value)} required>
              <option value="">Select Barangay</option>
              <option value="barangay-sample">Sample Barangay</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>House no. & Street Name</label>
          <input
            type="text"
            placeholder="Enter house no. & street name"
            value={formData.street}
            onChange={(e) => handleChange('street', e.target.value)}
            required
          />
        </div>

        <hr className="form-divider" />

        {/* Security Parameters */}
        <div className="form-group">
          <label>Create Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter new password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-login" style={{ marginTop: '2rem' }}>
          Done
        </button>
      </form>

      <div className="auth-footer-fixed" style={{ marginTop: '2rem' }}>
        Already have an account?
        <button className="footer-link" onClick={() => onNavigate('login')}>Sign in</button>
      </div>
    </div>
  )
}

export default RegisterWizard