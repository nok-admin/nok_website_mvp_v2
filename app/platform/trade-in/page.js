'use client'

import { useDemoModal } from '@/components/ClientLayout'
import TradeInWorkflow from '@/components/TradeInWorkflow'
import { useRef } from 'react'

export default function TradeIn() {
  const { openDemoModal } = useDemoModal()
  const contentRef1 = useRef(null)
  const contentRef2 = useRef(null)
  const contentRef3 = useRef(null)
  const containerRef = useRef(null)

  const contentRefs = [contentRef1, contentRef2, contentRef3]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-24">
        <div className="absolute inset-0 background-gradient opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Trade-In Programs That Win Loyalty.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
              Turn customer trade-ins into revenue through digital and in-store programs that drive new sales while maximizing recovery value.
            </p>
            <button 
              onClick={openDemoModal}
              className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all inline-flex items-center shadow-lg hover:shadow-xl"
            >
              Launch Your Trade-In Experience
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Content Section with Sidebar Workflow */}
      <section ref={containerRef} className="bg-white px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Main Content */}
            <div className="space-y-16">
              <div ref={contentRef1} className="bg-white/50 rounded-2xl p-6 border border-white/70 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Drive New Sales</h2>
                <p className="text-base text-gray-800 leading-relaxed mb-4">
                  Trade-in programs are powerful tools for driving new product sales. By offering customers credit for their old products, you create a compelling incentive to upgrade while simultaneously acquiring inventory for your resale channels.
                </p>
                <p className="text-base text-gray-800 leading-relaxed">
                  Our platform provides real-time trade-in valuations based on product condition, market demand, and your inventory needs, ensuring you offer competitive prices that drive conversions while maintaining profitable unit economics.
                </p>
              </div>

              <div ref={contentRef2} className="bg-white/50 rounded-2xl p-6 border border-white/70 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Processing</h2>
                <p className="text-base text-gray-800 leading-relaxed mb-4">
                  Once trade-ins are received, <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span>'s intelligent disposition engine automatically routes items to the highest-value outcome—whether that's refurbishment for resale, component harvesting, or recycling. This ensures maximum recovery value while minimizing processing time and costs.
                </p>
                <p className="text-base text-gray-800 leading-relaxed">
                  The system continuously learns from every disposition outcome, improving routing accuracy over time. As it processes more returns and tracks recovery results, it becomes increasingly effective at identifying the optimal path for each product.
                </p>
              </div>

              <div ref={contentRef3} className="bg-white/50 rounded-2xl p-6 border border-white/70 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dual Channel Support</h2>
                <p className="text-base text-gray-800 leading-relaxed mb-4">
                  Whether customers prefer the convenience of digital trade-ins or the personal touch of in-store transactions, <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> supports both channels seamlessly. Digital trade-ins allow customers to initiate the process online, upload photos, and receive shipping labels instantly.
                </p>
                <p className="text-base text-gray-800 leading-relaxed">
                  In-store trade-ins provide immediate customer service and can drive foot traffic to retail locations. Both channels integrate with the same intelligent processing system, ensuring consistent valuation and routing regardless of entry point.
                </p>
              </div>
            </div>

            {/* Sidebar Workflow */}
            <div className="lg:col-span-1">
              <TradeInWorkflow contentRefs={contentRefs} containerRef={containerRef} />
            </div>
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
