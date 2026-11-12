import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaFacebook, FaBolt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div className="container footer_container">
                <article>
                    <Link to='/' className='nav_brand' style={{ marginBottom: '0.5rem' }}>
                        <span className='brand_icon'><FaBolt /></span>
                        <span className='brand_text'>THUNDER <span>ATHLETICS</span></span>
                    </Link>
                    <p>
                        Thunder Athletics empowers athletes and fitness enthusiasts of all levels to unleash their full physical potential through world-class coaching, modern equipment, and an elite community.
                    </p>
                    <div className="footer_socials">
                        <a href='https://www.facebook.com' target='_blank' rel='noreferrer noopener' aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href='https://www.instagram.com' target='_blank' rel='noreferrer noopener' aria-label="Instagram">
                            <AiFillInstagram />
                        </a>
                        <a href='https://www.twitter.com' target='_blank' rel='noreferrer noopener' aria-label="Twitter">
                            <AiOutlineTwitter />
                        </a>
                        <a href='https://www.linkedin.com' target='_blank' rel='noreferrer noopener' aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>
                </article>
                <article>
                    <h4>Quick Links</h4>
                    <Link to="/about">About Us</Link>
                    <Link to="/plans">Membership Plans</Link>
                    <Link to="/trainers">Expert Trainers</Link>
                    <Link to="/gallery">Club Gallery</Link>
                    <Link to="/contact">Get in Touch</Link>
                </article>
                <article>
                    <h4>Programs</h4>
                    <Link to="/plans">Strength & Conditioning</Link>
                    <Link to="/plans">Cardio & Endurance</Link>
                    <Link to="/plans">Personal Coaching</Link>
                    <Link to="/plans">Functional Movement</Link>
                    <Link to="/about">Club FAQs</Link>
                </article>
                <article>
                    <h4>Contact Details</h4>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.2rem 0' }}>
                        <FaEnvelope style={{ color: 'var(--color-secondary)' }} />
                        <a href="mailto:contact@thunderathletics.com">contact@thunderathletics.com</a>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.2rem 0' }}>
                        <FaEnvelope style={{ color: 'var(--color-secondary)' }} />
                        <small>Alt: <a href="mailto:support@thunderathletics.com">support@thunderathletics.com</a></small>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.2rem 0' }}>
                        <FaPhoneAlt style={{ color: 'var(--color-secondary)' }} />
                        <a href="tel:+18008486337">+1 (800) 848-6337</a>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.2rem 0' }}>
                        <FaPhoneAlt style={{ color: 'var(--color-secondary)' }} />
                        <small>Alt: <a href="tel:+15558486337">+1 (555) 848-6337</a></small>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.2rem 0' }}>
                        <FaMapMarkerAlt style={{ color: 'var(--color-secondary)' }} />
                        <span>742 Thunderbolt Blvd, NY 10001</span>
                    </p>
                </article>
            </div>
            <div className="footer_copyright">
                <small>&copy; {new Date().getFullYear()} Thunder Athletics. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer