import React, { useState, useEffect } from 'react'
import './UserGallery.css'

interface UserImage {
  id: string
  src: string
  alt: string
  filename: string
}

const UserGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<UserImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const userImages: UserImage[] = [
    {
      id: '1',
      src: 'https://i.ibb.co/KzXCkfmd/1.jpg',
      alt: 'Image utilisateur 1',
      filename: '1.jpg'
    },
    {
      id: '2',
      src: 'https://i.ibb.co/bjbrkDwJ/2.jpg',
      alt: 'Image utilisateur 2',
      filename: '2.jpg'
    },
    {
      id: '3',
      src: 'https://i.ibb.co/zhwB0hQS/3.jpg',
      alt: 'Image utilisateur 3',
      filename: '3.jpg'
    },
    {
      id: '4',
      src: 'https://i.ibb.co/dJJjc48g/4.jpg',
      alt: 'Image utilisateur 4',
      filename: '4.jpg'
    },
    {
      id: '5',
      src: 'https://i.ibb.co/wFVBB4Pj/5.jpg',
      alt: 'Image utilisateur 5',
      filename: '5.jpg'
    },
    {
      id: '6',
      src: 'https://i.ibb.co/3m2Z7jkt/6.jpg',
      alt: 'Image utilisateur 6',
      filename: '6.jpg'
    },
    {
      id: '7',
      src: 'https://i.ibb.co/RkR6rcq7/7.jpg',
      alt: 'Image utilisateur 7',
      filename: '7.jpg'
    },
    {
      id: '8',
      src: 'https://i.ibb.co/5hZWRgNg/8.jpg',
      alt: 'Image utilisateur 8',
      filename: '8.jpg'
    },
    {
      id: '9',
      src: 'https://i.ibb.co/chbcNMKG/9.jpg',
      alt: 'Image utilisateur 9',
      filename: '9.jpg'
    },
    {
      id: '10',
      src: 'https://i.ibb.co/LhbJbjP0/10.jpg',
      alt: 'Image utilisateur 10',
      filename: '10.jpg'
    },
    {
      id: '11',
      src: 'https://i.ibb.co/JWtQq56n/11.jpg',
      alt: 'Image utilisateur 11',
      filename: '11.jpg'
    },
    {
      id: '12',
      src: 'https://i.ibb.co/spfNrvdw/12.jpg',
      alt: 'Image utilisateur 12',
      filename: '12.jpg'
    },
    {
      id: '13',
      src: 'https://i.ibb.co/whzxTnjm/13.jpg',
      alt: 'Image utilisateur 13',
      filename: '13.jpg'
    },
    {
      id: '14',
      src: 'https://i.ibb.co/yBsqfKbt/14.jpg',
      alt: 'Image utilisateur 14',
      filename: '14.jpg'
    },
    {
      id: '15',
      src: 'https://i.ibb.co/VWcKNg0b/15.jpg',
      alt: 'Image utilisateur 15',
      filename: '15.jpg'
    },
    {
      id: '16',
      src: 'https://i.ibb.co/mCfdgSpK/16.jpg',
      alt: 'Image utilisateur 16',
      filename: '16.jpg'
    },
    {
      id: '17',
      src: 'https://i.ibb.co/ycYXY7v7/17.jpg',
      alt: 'Image utilisateur 17',
      filename: '17.jpg'
    },
    {
      id: '18',
      src: 'https://i.ibb.co/vxKym6Jt/18.jpg',
      alt: 'Image utilisateur 18',
      filename: '18.jpg'
    },
    {
      id: '19',
      src: 'https://i.ibb.co/d4R6XbPC/19.jpg',
      alt: 'Image utilisateur 19',
      filename: '19.jpg'
    },
    {
      id: '20',
      src: 'https://i.ibb.co/VW975yrr/20.jpg',
      alt: 'Image utilisateur 20',
      filename: '20.jpg'
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const openModal = (image: UserImage) => {
    const index = userImages.findIndex(img => img.id === image.id)
    setCurrentImageIndex(index)
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentImageIndex === 0 ? userImages.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(newIndex)
    setSelectedImage(userImages[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentImageIndex === userImages.length - 1 ? 0 : currentImageIndex + 1
    setCurrentImageIndex(newIndex)
    setSelectedImage(userImages[newIndex])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }

  if (isLoading) {
    return (
      <div className="gallery-loading">
        <div className="loading-content">
          <h2>CHARGEMENT</h2>
          <p>Préparation de la galerie utilisateurs...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="user-gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-content">
          <h1 className="hero-title">GALERIE UTILISATEURS</h1>
          <p className="hero-subtitle">Images d'expérience utilisateur et d'interface</p>
          <div className="hero-stats">
            <span className="stat">{userImages.length} IMAGES</span>
            <span className="stat">UTILISATEURS</span>
            <span className="stat">UX/UI</span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="gallery-grid">
          {userImages.map((image) => (
            <div key={image.id} className="gallery-item" onClick={() => openModal(image)}>
              <div className="image-container">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>UX {image.id}</h3>
                    <p>Clique pour voir</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal} onKeyDown={handleKeyDown} tabIndex={0}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-container">
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
            
            {/* Navigation Buttons */}
            <button className="modal-nav prev" onClick={goToPrevious} aria-label="Image précédente">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            
            <button className="modal-nav next" onClick={goToNext} aria-label="Image suivante">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
            
            {/* Close Button */}
            <button className="modal-close" onClick={closeModal} aria-label="Fermer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserGallery
