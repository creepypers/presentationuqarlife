import './App.css'
import { useState } from 'react'
import AdminGallery from './components/AdminGallery'
import UserGallery from './components/UserGallery'
import PresentationUqarLife from './components/PresentationUqarLife'

function App() {
  const [activeTab, setActiveTab] = useState<'admin' | 'users' | 'presentation'>('presentation')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-container">
          {/* Logo UQARLIVE */}
          <div className="header-logo">
            <a href="#" className="logo-link">
              <div className="logo-text">UQARLIVE</div>
            </a>
          </div>

          {/* Burger Menu Button - Mobile Only */}
          <button 
            className={`burger-menu ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>

          {/* Navigation Menu */}
          <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-menu">
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'presentation' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('presentation')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'admin' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('admin')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Administration
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'users' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('users')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Utilisateurs
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main>
        {activeTab === 'presentation' ? <PresentationUqarLife onDiscoverClick={() => setActiveTab('admin')} /> : 
         activeTab === 'admin' ? <AdminGallery /> : <UserGallery />}
      </main>
    </div>
  )
}

export default App
