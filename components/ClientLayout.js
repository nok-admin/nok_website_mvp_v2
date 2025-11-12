'use client'

import { useState, createContext, useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import DemoModal from './DemoModal'

export const DemoModalContext = createContext()

export function useDemoModal() {
  return useContext(DemoModalContext)
}

export default function ClientLayout({ children }) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <DemoModalContext.Provider value={{ openDemoModal: () => setIsDemoModalOpen(true) }}>
      <Header onRequestDemo={() => setIsDemoModalOpen(true)} />
      <main>
        {children}
      </main>
      <Footer />
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </DemoModalContext.Provider>
  )
}

