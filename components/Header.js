'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header({ onRequestDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [platformMenuOpen, setPlatformMenuOpen] = useState(false)

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
            {/* Platform Menu with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPlatformMenuOpen(true)}
              onMouseLeave={() => setPlatformMenuOpen(false)}
            >
              <button className="text-gray-600 hover:text-black transition-colors font-medium flex items-center">
                Platform
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {platformMenuOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  {/* Resale and Trade-In Section */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Resale and Trade-In</div>
                    <div className="space-y-1">
                      <Link href="/platform/branded-resale" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                        Branded Resale
                      </Link>
                      <Link href="/platform/trade-in" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                        Trade-In
                      </Link>
                      <Link href="/platform/online-marketplaces" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                        Online Marketplaces
                      </Link>
                      <Link href="/platform/excess-sales" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                        Excess Sales
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 my-2"></div>
                  
                  {/* Reverse Logistics Section */}
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Reverse Logistics</div>
                    <div className="space-y-1">
                      <Link href="/platform/returns-management" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                        Returns Management (DTC & Retail)
                      </Link>
                      <Link href="/platform/intelligent-disposition" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                        Intelligent Disposition Routing
                      </Link>
                      <Link href="/platform/system-integrations" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                        System Integrations
                      </Link>
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>
            
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
            {/* Platform Menu Mobile */}
            <div>
              <button 
                onClick={() => setPlatformMenuOpen(!platformMenuOpen)}
                className="w-full flex items-center justify-between text-gray-600 hover:text-black transition-colors font-medium"
              >
                Platform
                <svg className={`w-4 h-4 transition-transform ${platformMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {platformMenuOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                  <div className="pt-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Resale and Trade-In</div>
                    <div className="space-y-1">
                      <Link href="/platform/branded-resale" className="block py-2 text-sm text-gray-700">
                        Branded Resale
                      </Link>
                      <Link href="/platform/trade-in" className="block py-2 text-sm text-gray-700">
                        Trade-In
                      </Link>
                      <Link href="/platform/online-marketplaces" className="block py-2 text-sm text-gray-700">
                        Online Marketplaces
                      </Link>
                      <Link href="/platform/excess-sales" className="block py-2 text-sm text-gray-700">
                        Excess Sales
                      </Link>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Reverse Logistics</div>
                    <div className="space-y-1">
                      <Link href="/platform/returns-management" className="block py-2 text-sm text-gray-700">
                        Returns Management (DTC & Retail)
                      </Link>
                      <Link href="/platform/intelligent-disposition" className="block py-2 text-sm text-gray-700">
                        Intelligent Disposition Routing
                      </Link>
                      <Link href="/platform/system-integrations" className="block py-2 text-sm text-gray-700">
                        System Integrations
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
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

