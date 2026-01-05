'use client'

import { useEffect, useState } from 'react'
import './locomo.css'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">LOCOMO</div>
          <div className="loading-bar"></div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="particles-container" id="particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 4 + 6}s`
            }}
          />
        ))}
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} id="mobileMenu">
        <div className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)} />
        <nav className="mobile-menu-links">
          <a href="#home" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#contact" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </nav>
      </div>

      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo">
            <div className="logo-icon">L</div>
            <span className="logo-text">LOCOMO</span>
          </a>

          <nav className="navbar-menu">
            <a href="#about" className="navbar-link">About</a>
            <a href="#contact" className="navbar-link">Contact</a>
            <a href="#contact" className="btn btn-outline navbar-cta">
              <span>Start Project</span>
            </a>
          </nav>

          <div className="menu-toggle" onClick={() => setIsMobileMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920" alt="Blockchain Technology" className="hero-image" />
          <div className="hero-overlay"></div>
          <div className="hero-vignette"></div>
        </div>

        <div className="hero-decor hero-decor-corner top-left"></div>
        <div className="hero-decor hero-decor-corner top-right"></div>
        <div className="hero-decor hero-decor-corner bottom-left"></div>
        <div className="hero-decor hero-decor-corner bottom-right"></div>

        <div className="hero-content">
          <div className="hero-label text-refined">Blockchain Innovation</div>
          <h1 className="hero-title heading-display">
            <span className="line">Building the Future</span>
            <span className="line">with <span className="highlight">Blockchain</span></span>
          </h1>
          <p className="hero-description">
            Leading blockchain development company in Indonesia, pioneering innovative solutions
            for decentralized applications and digital transformation.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <span>Start Your Project</span>
            </a>
            <a href="#about" className="btn btn-outline">
              <span>Learn More</span>
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <span className="hero-scroll-text">Explore</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <div className="about-label text-refined text-elegant">Our Vision</div>
              <h2 className="about-title heading-xl">
                Blockchain<br />
                <span className="text-elegant">Excellence Redefined</span>
              </h2>
              <div className="gold-line"></div>
              <p className="about-text">
                At CV LOCOMO INSPIRASI INDONESIA, we are at the forefront of blockchain technology
                development in Indonesia. Our team of expert developers and innovators are dedicated
                to creating cutting-edge blockchain solutions that transform businesses.
              </p>
              <p className="about-text">
                We specialize in developing secure, scalable, and innovative blockchain applications
                that drive digital transformation and create new opportunities for growth in the
                decentralized economy.
              </p>

              <div className="about-features">
                <div className="about-feature reveal">
                  <div className="about-feature-icon">⛓</div>
                  <h4 className="about-feature-title">Smart Contract Development</h4>
                  <p className="about-feature-text">Custom smart contracts built with security and efficiency in mind</p>
                </div>
                <div className="about-feature reveal">
                  <div className="about-feature-icon">🔐</div>
                  <h4 className="about-feature-title">Security First</h4>
                  <p className="about-feature-text">Rigorous security audits and best practices for all deployments</p>
                </div>
                <div className="about-feature reveal">
                  <div className="about-feature-icon">🚀</div>
                  <h4 className="about-feature-title">Innovation Driven</h4>
                  <p className="about-feature-text">Cutting-edge solutions leveraging the latest blockchain technologies</p>
                </div>
                <div className="about-feature reveal">
                  <div className="about-feature-icon">🌍</div>
                  <h4 className="about-feature-title">Global Standards</h4>
                  <p className="about-feature-text">Solutions that meet international blockchain development standards</p>
                </div>
              </div>
            </div>

            <div className="about-visual reveal">
              <div className="about-image-wrapper">
                <div className="about-image-frame"></div>
                <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800" alt="Blockchain Development" className="about-image" />
                <div className="about-badge">
                  <div className="about-badge-number">5+</div>
                  <div className="about-badge-text">Years Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-content">
              <div className="text-refined text-elegant">Get Started</div>
              <h2 className="heading-xl">Let's Build<br /><span className="text-elegant">Together</span></h2>
              <div className="gold-line"></div>
              <p className="contact-text">
                Ready to transform your business with blockchain technology?
                Our team is here to discuss your project and provide innovative
                solutions tailored to your needs.
              </p>

              <div className="contact-info">
                <div className="contact-item reveal">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div className="contact-details">
                    <h4>Visit Our Office</h4>
                    <p>KAMPUNG BARU SAGO, Desa/Kelurahan Sago Salido<br />Kec. IV Jurai, Kab. Pesisir Selatan<br />Provinsi Sumatera Barat</p>
                  </div>
                </div>

                <div className="contact-item reveal">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div className="contact-details">
                    <h4>Call Us</h4>
                    <a href="tel:+6282382466172">+62 823 8246 6172</a>
                  </div>
                </div>

                <div className="contact-item reveal">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div className="contact-details">
                    <h4>Contact</h4>
                    <p>Contact via WhatsApp for fastest response</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper reveal">
              <div className="form-header">
                <h3>Start Your Project</h3>
                <p>Share your project details and we'll get back to you within 24 hours</p>
              </div>

              <form className="contact-form" onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target as HTMLFormElement)
                const data = Object.fromEntries(formData)
                
                let message = `Halo CV LOCOMO INSPIRASI INDONESIA,\n\n`
                message += `Nama: ${data.firstName} ${data.lastName}\n`
                message += `Email: ${data.email}\n`
                if (data.company) message += `Perusahaan: ${data.company}\n`
                if (data.message) message += `Pesan: ${data.message}\n`

                const whatsappUrl = `https://wa.me/6282382466172?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
                ;(e.target as HTMLFormElement).reset()
              }}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company / Organization</label>
                  <input type="text" id="company" name="company" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea id="message" name="message" placeholder="Please describe your blockchain project requirements..."></textarea>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary">
                    <span>Submit Project</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-grid">
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="logo-icon">L</div>
                  <span className="logo-text">LOCOMO</span>
                </div>
                <p className="footer-description">
                  Leading blockchain development company in Indonesia, pioneering innovative
                  solutions for the decentralized future.
                </p>
                <div className="footer-social">
                  <a href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                  </a>
                  <a href="#" aria-label="GitHub">
                    <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  </a>
                </div>
              </div>

              <div className="footer-column">
                <h4>Services</h4>
                <nav className="footer-links">
                  <a href="#services">DeFi Development</a>
                  <a href="#services">NFT Solutions</a>
                  <a href="#services">Smart Contracts</a>
                  <a href="#services">Blockchain Consulting</a>
                </nav>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <nav className="footer-links">
                  <a href="#about">About Us</a>
                  <a href="#contact">Contact</a>
                </nav>
              </div>

              <div className="footer-column">
                <h4>Legal</h4>
                <nav className="footer-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">CV LOCOMO INSPIRASI INDONESIA</a>
                </nav>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-inner">
              <p className="footer-copyright">
                &copy; 2024 CV LOCOMO INSPIRASI INDONESIA. All rights reserved.
              </p>
              <div className="footer-legal">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/6282382466172?text=Halo%20CV%20LOCOMO%20INSPIRASI%20INDONESIA,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20pengembangan%20blockchain." className="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Contact via WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <div className="whatsapp-btn-text">
          <span className="whatsapp-btn-label">Chat with us</span>
          <span className="whatsapp-btn-cta">WhatsApp</span>
        </div>
      </a>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const reveals = document.querySelectorAll('.reveal');
            
            function revealOnScroll() {
              const windowHeight = window.innerHeight;
              
              reveals.forEach(function(element) {
                const elementTop = element.getBoundingClientRect().top;
                const revealPoint = 150;
                
                if (elementTop < windowHeight - revealPoint) {
                  element.classList.add('revealed');
                }
              });
            }
            
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();
          });
        `
      }} />
    </>
  )
}