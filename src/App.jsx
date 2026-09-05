import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body />
    </div>
  );
}

export default App
