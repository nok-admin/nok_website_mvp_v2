'use client'

import { useDemoModal } from '@/components/ClientLayout'
import { BrandedResaleVisual } from '@/components/PlatformVisuals'

export default function BrandedResale() {
  const { openDemoModal } = useDemoModal()

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-24">
        <div className="absolute inset-0 background-gradient opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Resale That Looks Like Your Brand.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                Nok powers fully branded resale experiences for leading consumer brands.
              </p>
              <button 
                onClick={openDemoModal}
                className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all inline-flex items-center shadow-lg hover:shadow-xl"
              >
                See How Nok Builds Resale Programs
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right: Storefront Visual */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-2xl">
                {/* Storefront Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-900 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-24"></div>
                  </div>
                </div>
                {/* Product Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200"></div>
                  ))}
                </div>
                <div className="mt-6 text-center text-sm text-gray-500 font-medium">
                  Branded Resale Storefront
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Examples & Infrastructure */}
      <BrandedResaleVisual />

      {/* Content Section */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Control Your Brand Narrative</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Branded resale programs allow you to maintain complete control over how your products are presented and sold in secondary markets. Unlike generic marketplace listings, branded resale channels preserve your brand identity, pricing strategy, and customer experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span>, you can create dedicated resale storefronts that reflect your brand standards, ensuring customers receive the same quality experience whether they're buying new or refurbished products.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Maximize Recovery Value</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Branded resale channels typically achieve higher recovery rates than generic marketplaces because they maintain brand trust and perceived value. Customers are willing to pay premium prices for refurbished products when they're sold through official brand channels.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our platform enables intelligent pricing strategies that optimize for both recovery value and brand protection, ensuring you maximize revenue without compromising your brand positioning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to launch your branded resale program?
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            See how <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span> can help you build a profitable branded resale channel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openDemoModal}
              className="group px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all inline-flex items-center justify-center shadow-lg"
            >
              Request a Demo
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <a 
              href="mailto:sales@nokrecommerce.com"
              className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-100 transition-all inline-flex items-center justify-center"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
