'use client'

import { useDemoModal } from '@/components/ClientLayout'

export default function TradeIn() {
  const { openDemoModal } = useDemoModal()

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 background-gradient opacity-40"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight">
            Trade-In Programs
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed font-light">
            Turn customer trade-ins into revenue through digital and in-store programs that drive new sales while maximizing recovery value.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Digital and Store Trade-In</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Modern trade-in programs span both digital and physical channels, allowing customers to trade in their old products whether they're shopping online or in-store. This omnichannel approach increases participation rates and creates multiple touchpoints for customer engagement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> enables seamless trade-in experiences across all channels, with instant valuation, flexible payment options, and automated processing that makes it easy for customers to upgrade while you maximize recovery value.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Drive New Sales</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Trade-in programs are powerful tools for driving new product sales. By offering customers credit for their old products, you create a compelling incentive to upgrade while simultaneously acquiring inventory for your resale channels.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our platform provides real-time trade-in valuations based on product condition, market demand, and your inventory needs, ensuring you offer competitive prices that drive conversions while maintaining profitable unit economics.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Intelligent Processing</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Once trade-ins are received, <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span>'s intelligent disposition engine automatically routes items to the highest-value outcome—whether that's refurbishment for resale, component harvesting, or recycling. This ensures maximum recovery value while minimizing processing time and costs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Launch your trade-in program
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            See how <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span> can help you build a profitable trade-in program.
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

