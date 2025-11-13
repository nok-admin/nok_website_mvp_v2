export default function TradeInVisual() {
  const steps = [
    {
      number: 1,
      title: 'Submit Trade-In',
      description: 'Customer selects product, condition, and uploads photos through digital or in-store channels.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      number: 2,
      title: 'Ship or Drop-Off',
      description: 'Product is sent via provided shipping label or dropped off at a designated store location.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      number: 3,
      title: 'Evaluation',
      description: 'Nok team receives and evaluates the product to confirm details and condition.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      number: 4,
      title: 'Credit Issued',
      description: 'Customer receives credit options: in-store credit, NEW credit, or refurbished credit.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center relative">
              {/* Connector Arrow */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 z-0" style={{ width: 'calc(100% - 64px)', left: 'calc(50% + 32px)' }}>
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 h-0.5 bg-gradient-to-r from-cyan-200 to-blue-200"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                      <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step Card */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm w-full">
                {/* Step Number Badge */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="text-center">
                  <div className="text-xs font-semibold mb-2 text-gray-500">
                    Step {step.number}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

