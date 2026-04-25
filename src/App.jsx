import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import GoverningBody from './components/GoverningBody' // Ensure this line exists
import Sandbox from './components/Sandbox'
import SuccessStories from './components/SuccessStories'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <GoverningBody /> {/* Ensure this line is here */}
        <Sandbox />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  )
}

export default App
