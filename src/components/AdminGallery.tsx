import { useState, useEffect } from 'react'
import './AdminGallery.css'

interface AdminImage {
  id: string
  src: string
  alt: string
  filename: string
}

const AdminGallery = () => {
  const [selectedImage, setSelectedImage] = useState<AdminImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const adminImages: AdminImage[] = [
    {
      id: '1',
      src: 'https://i.ibb.co/qFcHT1Dm/Whats-App-Image-2025-08-16-at-00-52-40-d8e1ecb3.jpg',
      alt: 'Image d\'administration 1',
      filename: 'WhatsApp Image 2025-08-16 at 00.52.40_d8e1ecb3.jpg'
    },
    {
      id: '2',
      src: 'https://i.ibb.co/b0Q1ZB8/Whats-App-Image-2025-08-16-at-00-52-40-de6518cf.jpg',
      alt: 'Image d\'administration 2',
      filename: 'WhatsApp Image 2025-08-16 at 00.52.40_de6518cf.jpg'
    },
    {
      id: '3',
      src: 'https://i.ibb.co/j9hRP2YS/Whats-App-Image-2025-08-16-at-00-52-41_724a286c.jpg',
      alt: 'Image d\'administration 3',
      filename: 'WhatsApp Image 2025-08-16 at 00.52.41_724a286c.jpg'
    },
    {
      id: '4',
      src: 'https://i.ibb.co/Hp9CFNdP/Whats-App-Image-2025-08-16-at-00-52-40-1f598a57.jpg',
      alt: 'Image d\'administration 4',
      filename: 'WhatsApp Image 2025-08-16 at 00.52.40_1f598a57.jpg'
    },
    {
      id: '5',
      src: 'https://i.ibb.co/ch6hsVvg/Whats-App-Image-2025-08-16-at-00-52-40-274f721d.jpg',
      alt: 'Image d\'administration 5',
      filename: 'WhatsApp Image 2025-08-16 at 00.52.40_274f721d.jpg'
    },
    {
      id: '6',
      src: 'https://i.ibb.co/zVhFf7V1/Whats-App-Image-2025-08-16-at-00-52-41-fa66dcc2.jpg',
      alt: 'Image d\'administration 6',
      filename: 'WhatsApp Image 2025-08-16 at 00.52.41_fa66dcc2.jpg'
    },
    {
      id: '7',
      src: 'https://i.ibb.co/Qv2X0ZBY/Whats-App-Image-2025-08-16-at-00-52-40-8aa9ec94.jpg',
      alt: 'Image d\'administration 7',
      filename: 'WhatsApp Image 2025-08-16 at 00.52.40_8aa9ec94.jpg'
    },
    {
      id: '8',
      src: 'https://i.ibb.co/ZRFb85DX/Whats-App-Image-2025-08-16-at-00-52-41-c41294ff.jpg',
      alt: 'Image d\'administration 8',
      filename: 'WhatsApp Image 2025-08-16 at 00.52.41_c41294ff.jpg'
    },
    {
      id: '9',
      src: 'https://i.ibb.co/h1wdZt6B/Whats-App-Image-2025-08-16-at-00-52-40-5d5493b9.jpg',
      alt: 'Image d\'administration 9',
      filename: 'WhatsApp Image 2025-08-16 at 00.52.40_5d5493b9.jpg'
    },
    {
      id: '10',
      src: 'https://i.ibb.co/GQ1G7Cyp/Whats-App-Image-2025-08-16-at-00-52-40-881e2fa7.jpg',
      alt: 'Image d\'administration 10',
      filename: 'WhatsApp Image 2025-08-16 at 00.52.40_881e2fa7.jpg'
    },
    {
      id: '11',
      src: 'https://i.ibb.co/yB0J8vQJ/Whats-App-Image-2025-08-16-at-00-52-40-b91e6186.jpg',
      alt: 'Image d\'administration 11',
      filename: 'WhatsApp Image 2025-08-16 at 00-52-40_b91e6186.jpg'
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const openModal = (image: AdminImage) => {
    setSelectedImage(image)
    setCurrentImageIndex(adminImages.findIndex(img => img.id === image.id))
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % adminImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(adminImages[nextIndex])
  }

  const previousImage = () => {
    const prevIndex = currentImageIndex === 0 ? adminImages.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(adminImages[prevIndex])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal()
    } else if (e.key === 'ArrowRight') {
      nextImage()
    } else if (e.key === 'ArrowLeft') {
      previousImage()
    }
  }

  return (
    <div className="modern-gallery" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Hero Section */}
      <div className="gallery-hero">
        <div className="hero-content">
          <h1 className="hero-title">Galerie d'Administration UQAR</h1>
          <p className="hero-subtitle">Collection d'images de gestion et d'administration</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{adminImages.length}</span>
              <span className="stat-label">Images</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">HD</span>
              <span className="stat-label">Qualité</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Admin</span>
              <span className="stat-label">Type</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-image">
              <img src={adminImages[0]?.src} alt="Preview" />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-container">
        {isLoading ? (
          <div className="loading-grid">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="loading-skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-text"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="modern-grid">
            {adminImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(image)}
              >
                <div className="card-media">
                  <img src={image.src} alt={image.alt} />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <span className="view-btn">Voir l'image</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">Image {image.id}</h3>
                  <p className="card-filename">{image.filename}</p>
                  <div className="card-meta">
                    <span className="meta-tag">Administration</span>
                    <span className="meta-tag">UQAR</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modern Modal */}
      {selectedImage && (
        <div className="modern-modal-overlay" onClick={closeModal}>
          <div className="modern-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">
              <div className="modal-image-wrapper">
                <img src={selectedImage.src} alt={selectedImage.alt} />
              </div>
            </div>
s
            <div className="modal-footer">
              <div className="modal-actions">
                <button className="modal-action-btn" onClick={previousImage}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Précédente
                </button>
                <button className="modal-action-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Télécharger
                </button>
                <button className="modal-action-btn" onClick={nextImage}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Suivante
                </button>
              </div>
            </div>

            {/* Navigation */}
            <button className="modal-nav prev" onClick={previousImage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="modal-nav next" onClick={nextImage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminGallery
