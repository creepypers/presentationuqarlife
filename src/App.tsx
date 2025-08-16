import './App.css'
import { useState } from 'react'
import AdminGallery from './components/AdminGallery'
import UserGallery from './components/UserGallery'
import PresentationUqarLife from './components/PresentationUqarLife'

function App() {
  const [activeTab, setActiveTab] = useState<'admin' | 'users' | 'presentation'>('presentation')

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

          {/* Navigation Menu */}
          <nav className="header-nav">
            <ul className="nav-menu">
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'presentation' ? 'active' : ''}`}
                  onClick={() => setActiveTab('presentation')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'admin' ? 'active' : ''}`}
                  onClick={() => setActiveTab('admin')}
                >
                  Administration
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'users' ? 'active' : ''}`}
                  onClick={() => setActiveTab('users')}
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
