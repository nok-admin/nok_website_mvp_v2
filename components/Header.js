'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header({ onRequestDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-4xl font-black text-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors font-medium">
              Platform
            </Link>
            <Link href="/case-studies" className="text-gray-600 hover:text-black transition-colors font-medium">
              Case Studies
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors font-medium">
              About
            </Link>
            <button 
              onClick={onRequestDemo}
              className="btn-primary px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800"
            >
              Request a Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-100">
            <Link href="/" className="block text-gray-600 hover:text-black transition-colors font-medium">
              Platform
            </Link>
            <Link href="/case-studies" className="block text-gray-600 hover:text-black transition-colors font-medium">
              Case Studies
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-black transition-colors font-medium">
              About
            </Link>
            <button 
              onClick={onRequestDemo}
              className="w-full px-6 py-2 bg-black text-white rounded-lg font-medium"
            >
              Request a Demo
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

