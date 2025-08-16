import './App.css'
import AdminGallery from './components/AdminGallery'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Galerie d'Administration</h1>
        <p>Présentation des images de gestion et d'administration</p>
      </header>
      <main>
        <AdminGallery />
      </main>
    </div>
  )
}

export default App
