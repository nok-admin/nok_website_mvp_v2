'use client'

import NokHero from '@/components/NokHero'
import BrandLogos from '@/components/BrandLogos'
import StackAdvantage from '@/components/StackAdvantage'
import EcosystemSection from '@/components/EcosystemSection'
import { useDemoModal } from '@/components/ClientLayout'

export default function Home() {
  const { openDemoModal } = useDemoModal()
  const features = [
    {
      title: "Automated Processing",
      description: "AI-powered return processing that identifies resale value instantly and routes items optimally.",
      number: "01"
    },
    {
      title: "Revenue Recovery",
      description: "Turn returned items into revenue through intelligent resale, donation, or recycling channels.",
      number: "02"
    },
    {
      title: "Full Visibility",
      description: "Real-time tracking and analytics across your entire reverse supply chain ecosystem.",
      number: "03"
    },
    {
      title: "Integration Ready",
      description: "Seamlessly connects with your existing e-commerce, inventory, and logistics systems.",
      number: "04"
    }
  ]

  return (
    <>
      <NokHero onRequestDemo={openDemoModal} />
      
      {/* Brand Logos */}
      <BrandLogos />
      
      {/* Stack Advantage Section */}
      <StackAdvantage />
      
      {/* Ecosystem Integration Section */}
      <EcosystemSection />
      
      {/* Features Section - HIDDEN */}
      <section className="pt-32 pb-20 px-4 bg-gray-50" style={{ display: 'none' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-600 mb-3">OUR ADVANTAGE</p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              Returns that work for you
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Before <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span>, brands lost money on every return. We built the infrastructure 
              to turn your reverse logistics into a profit center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card-hover bg-white rounded-2xl p-8 border border-gray-200" style={{ boxShadow: 'var(--shadow-sm), var(--shadow-border)' }}>
                <div className="text-5xl font-bold text-gray-200 mb-4">{feature.number}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="pt-4 pb-6 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <blockquote className="border-t border-b border-gray-200 py-10">
            <p className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 leading-tight">
              "With <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span>, returns have become an integral part of our business and brand initiatives. 
              They do such an exceptional job managing our reverse logistics and helping us strategize 
              the most optimal channels for getting value from returned goods."
            </p>
            <footer className="flex items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-40 h-20 relative">
                  <img 
                    src="/logos/Rachio.png" 
                    alt="Rachio" 
                    className="w-full h-full object-contain"
                    style={{ filter: 'brightness(0) saturate(0)' }}
                  />
                </div>
              </div>
              <div className="border-l border-gray-300 pl-8">
                <div className="font-semibold text-gray-900 text-lg">Kim Sentovich</div>
                <div className="text-gray-600">CEO, Rachio</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Product Cards - HIDDEN */}
      <section className="py-20 px-4 bg-gray-50" style={{ display: 'none' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              Complete platform for returns management
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-hover bg-white rounded-xl p-8 border border-gray-200" style={{ boxShadow: 'var(--shadow-sm), var(--shadow-border)' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Return Portal</h3>
              <p className="text-gray-600 mb-4">
                Customer-facing portal with instant approvals and smart routing decisions.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                Learn more
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="card-hover bg-white rounded-xl p-8 border border-gray-200" style={{ boxShadow: 'var(--shadow-sm), var(--shadow-border)' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Resale Engine</h3>
              <p className="text-gray-600 mb-4">
                AI-powered pricing and multi-channel distribution for maximum recovery.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                Learn more
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="card-hover bg-white rounded-xl p-8 border border-gray-200" style={{ boxShadow: 'var(--shadow-sm), var(--shadow-border)' }}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Real-time insights into return patterns, costs, and revenue recovery.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                Learn more
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-4 pb-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 lg:p-16 overflow-hidden">
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Start building today
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your returns into revenue with <span className="text-2xl font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span>'s complete reverse supply chain platform. 
                You're in control of your returns, on your terms, without layers in between.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openDemoModal}
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center"
                >
                  Request a Demo
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <a 
                  href="mailto:sales@nokrecommerce.com"
                  className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg font-semibold hover:border-gray-400 hover:bg-white/5 transition-all inline-flex items-center justify-center"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

