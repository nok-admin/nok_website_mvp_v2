'use client'

export default function DispositionRouting({ onRequestDemo }) {
  const routes = [
    { label: "Repair", colorClass: "from-blue-400 to-blue-500", percentage: 35 },
    { label: "Refurbish", colorClass: "from-green-400 to-green-500", percentage: 40 },
    { label: "Resell As-Is", colorClass: "from-orange-400 to-orange-500", percentage: 15 },
    { label: "Recycle", colorClass: "from-gray-400 to-gray-500", percentage: 10 }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text and Data */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold leading-tight">
              Intelligent Disposition <span className="text-orange-400">Routing</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our AI-powered decision engine analyzes every return to maximize recovery value and minimize waste.
            </p>
            
            {/* Routing Percentages */}
            <div className="space-y-4">
              {routes.map((route, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{route.label}</span>
                    <span>{route.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${route.colorClass} rounded-full transition-all duration-1000`}
                      style={{ width: `${route.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={onRequestDemo}
              className="px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 bg-white text-gray-900 border-2 border-gray-200 hover:border-orange-500 hover:shadow-lg"
            >
              See How Our RMS Decides Smarter
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Right Column - Decision Card */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Smart Routing Decisions</h3>
            </div>
            <div className="space-y-4">
              {[
                'Condition Assessment',
                'Market Value Analysis',
                'Cost-Benefit Calculation',
                'Sustainability Scoring'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

