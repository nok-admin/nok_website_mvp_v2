'use client'

import { useDemoModal } from '@/components/ClientLayout'

export default function IntelligentDisposition() {
  const { openDemoModal } = useDemoModal()

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 background-gradient opacity-40"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight">
            Intelligent Disposition Routing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed font-light">
            AI-powered decision engine that routes every return to the highest-value outcome automatically.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AI-Powered Decision Making</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Every returned product represents a decision point: should it be restocked, refurbished, resold, donated, or recycled? Making these decisions manually is time-consuming, inconsistent, and often results in suboptimal outcomes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span>'s intelligent disposition routing uses AI and machine learning to analyze product condition, market demand, refurbishment costs, and recovery potential to automatically route each item to the highest-value outcome.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Real-Time Value Optimization</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The optimal disposition for a product can change based on market conditions, inventory levels, and operational capacity. Our decision engine continuously evaluates these factors in real-time, ensuring every routing decision maximizes recovery value.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By considering hundreds of data points—from product condition and serial number history to current market pricing and channel performance—the system makes routing decisions that consistently outperform manual processes.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Continuous Learning</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The decision engine learns from every disposition outcome, continuously improving its routing accuracy. As it processes more returns and tracks recovery results, it becomes increasingly effective at identifying the optimal path for each product.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This machine learning approach means your returns operation becomes more profitable over time, with the system adapting to your specific product mix, market conditions, and operational constraints.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparent Decision Making</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              While the routing is automated, <span className="font-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span> provides complete transparency into decision logic. You can see why each item was routed to a specific channel, review performance metrics, and adjust routing rules to align with your business priorities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Automate your disposition routing
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            See how <span className="font-black lowercase tracking-tight text-gray-900" style={{ fontWeight: 900 }}>nok</span>'s intelligent routing can maximize recovery value.
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

