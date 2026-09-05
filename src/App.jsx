import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [navOpen, setNavOpen] = useState(true);          // sidebar open/closed
  const [activeTab, setActiveTab] = useState('routes');  // 'routes' | 'report' | 'rewards'
  const [searchTerm, setSearchTerm] = useState('');      // header search box

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        toggleSidebar={() => setNavOpen((v) => !v)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* middle row: sidebar + main content side by side */}
      <div className="flex flex-1 min-h-0">
        <Navbar isOpen={navOpen} activeTab={activeTab} onTabChange={setActiveTab} />
        <Body activeTab={activeTab} />
      </div>

      <Footer />
    </div>
  );
}

export default App