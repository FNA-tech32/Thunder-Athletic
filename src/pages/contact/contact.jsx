import React, { useState } from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../../images/header_bg_2.jpg'
import { MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsMessenger, BsTelephoneFill } from 'react-icons/bs'
import { FaBolt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import Card from '../../UI/card'

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Personal Training',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        program: 'Personal Training',
        message: ''
      })
    }, 4000)
  }

  return (
    <>
      <Header title='Get In Touch' img={HeaderImage}>
        <p>
          Connect with the Thunder Athletics team. Whether you are ready to start your membership,
          need program guidance, or have questions for our trainers, we are here to support your journey.
        </p>
      </Header>

      <section className="contact">
        <div className="container contact_container">
          
          {/* Top Quick Action Connect Badges */}
          <div className="contact_quick-actions">
            <h3>Connect Instantly</h3>
            <div className="contact_wrapper">
              <a href='mailto:contact@thunderathletics.com' target='_blank' rel='noreferrer noopener' title="Primary Email">
                <MdEmail />
              </a>
              <a href='https://wa.me/15558486337?text=Hi%20Thunder%20Athletics%2C%20I%20would%20like%20to%20know%20more%20about%20your%20programs.' target='_blank' rel='noreferrer noopener' title="WhatsApp Desk">
                <IoLogoWhatsapp />
              </a>
              <a href='tel:+18008486337' target='_blank' rel='noreferrer noopener' title="Direct Phone">
                <BsTelephoneFill />
              </a>
              <a href='https://m.me/ThunderAthletics' target='_blank' rel='noreferrer noopener' title="Messenger">
                <BsMessenger />
              </a>
            </div>
          </div>

          {/* Cards for Primary & Alternative Details */}
          <div className="contact_details-grid">
            {/* Email Channels */}
            <Card className="contact_detail-card">
              <span className="contact_icon"><MdEmail /></span>
              <h4>Email Contacts</h4>
              <p className="detail_label">Primary Inquiries:</p>
              <a href="mailto:contact@thunderathletics.com" className="detail_link">
                contact@thunderathletics.com
              </a>
              <p className="detail_label alt_label">Alternative Support:</p>
              <a href="mailto:support@thunderathletics.com" className="detail_link">
                support@thunderathletics.com
              </a>
            </Card>

            {/* Phone & Messaging Channels */}
            <Card className="contact_detail-card">
              <span className="contact_icon"><BsTelephoneFill /></span>
              <h4>Call & WhatsApp</h4>
              <p className="detail_label">Primary Phone (Toll-Free):</p>
              <a href="tel:+18008486337" className="detail_link">
                +1 (800) 848-6337
              </a>
              <p className="detail_label alt_label">Alternative / WhatsApp:</p>
              <a href="https://wa.me/15558486337" target="_blank" rel="noreferrer noopener" className="detail_link">
                +1 (555) 848-6337
              </a>
            </Card>

            {/* Club Locations */}
            <Card className="contact_detail-card">
              <span className="contact_icon"><MdLocationOn /></span>
              <h4>Facility Locations</h4>
              <p className="detail_label">Headquarters / Main Gym:</p>
              <p className="detail_text">742 Thunderbolt Blvd, Suite 100, NY 10001</p>
              <p className="detail_label alt_label">Alternative Training Facility:</p>
              <p className="detail_text">120 Velocity Way, West Wing, NY 10012</p>
            </Card>

            {/* Operating Hours */}
            <Card className="contact_detail-card">
              <span className="contact_icon"><MdAccessTime /></span>
              <h4>Training Hours</h4>
              <p className="detail_label">Weekdays (Mon - Fri):</p>
              <p className="detail_text">5:00 AM – 11:00 PM</p>
              <p className="detail_label alt_label">Weekends (Sat - Sun):</p>
              <p className="detail_text">7:00 AM – 9:00 PM</p>
            </Card>
          </div>

          {/* Interactive Contact & Inquiry Form */}
          <div className="contact_form-section">
            <div className="contact_form-header">
              <span className="thunder_badge"><FaBolt /></span>
              <h2>Send Thunder Athletics A Message</h2>
              <p>Have specific fitness goals or questions about memberships? Drop us a note below.</p>
            </div>

            {formSubmitted ? (
              <div className="contact_success-message">
                <FaCheckCircle className="success_icon" />
                <h3>Thank You for Reaching Out!</h3>
                <p>Your inquiry has been received. A Thunder Athletics performance coach will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact_form">
                <div className="form_group-row">
                  <div className="form_group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form_group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form_group-row">
                  <div className="form_group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="e.g. +1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form_group">
                    <label htmlFor="program">Interested Program</label>
                    <select 
                      id="program" 
                      name="program" 
                      value={formData.program} 
                      onChange={handleChange}
                    >
                      <option value="Personal Training">Personal Training</option>
                      <option value="Strength & Conditioning">Strength & Conditioning</option>
                      <option value="Cardio & Endurance">Cardio & Endurance</option>
                      <option value="Gold / Platinum Membership">Gold / Platinum Membership</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form_group">
                  <label htmlFor="message">Your Message / Fitness Goals</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required 
                    placeholder="Tell us about your fitness targets, schedule, or questions..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn lg contact_submit-btn">
                  Send Message <FaPaperPlane style={{ marginLeft: '0.6rem' }} />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}

export default Contact