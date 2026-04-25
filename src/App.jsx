import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import GoverningBody from './components/GoverningBody' 
import Sandbox from './components/Sandbox'
import SuccessStories from './components/SuccessStories'
import Footer from './components/Footer'

function App() {
  // Access the environment variable inside the component
  const dbUrl = import.meta.env.VITE_DATABASE_URL;

  // Log the connection status for debugging
  if (dbUrl) {
    console.log("Cloud connection initialized.");
  } else {
    console.warn("VITE_DATABASE_URL is not defined in your .env file or Vercel settings.");
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <GoverningBody /> 
        <Sandbox />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  )
}

export default App
