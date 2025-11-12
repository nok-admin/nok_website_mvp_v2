'use client'

import { useDemoModal } from '@/components/ClientLayout'
import EcosystemSection from '@/components/EcosystemSection'

export default function SystemIntegrations() {
  const { openDemoModal } = useDemoModal()

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 background-gradient opacity-40"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight">
            System Integrations
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed font-light">
            Seamlessly connect with your existing e-commerce, inventory, and logistics systems.
          </p>
        </div>
      </section>

      {/* Ecosystem Section */}
      <EcosystemSection />

      {/* Additional Content */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Built for Your Stack</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> integrates with the tools you already use, from e-commerce platforms and ERPs to warehouse management systems and customer service platforms. No need to replace your existing infrastructure—we connect to it.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our API-first architecture ensures seamless data flow between systems, enabling automated workflows that eliminate manual coordination and reduce processing time.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Real-Time Synchronization</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              All integrations provide real-time data synchronization, ensuring your inventory, orders, and customer information are always up-to-date across all systems. This unified view eliminates discrepancies and enables faster decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect your systems
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            See how <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span> integrates with your existing infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openDemoModal}
              className="group px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all inline-flex items-center justify-center"
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

