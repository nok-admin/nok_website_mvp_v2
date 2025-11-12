'use client'

export default function TradeInWorkflow() {
  const steps = [
    {
      number: 1,
      title: 'Submit Trade-In',
      description: 'Customer selects product, condition, and uploads photos through digital or in-store channels.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-cyan-500 to-blue-500'
    },
    {
      number: 2,
      title: 'Ship or Drop-Off',
      description: 'Product is sent via provided shipping label or dropped off at a designated store location.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-500'
    },
    {
      number: 3,
      title: 'Evaluation',
      description: 'Nok team receives and evaluates the product to confirm details and condition.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-indigo-500 to-purple-500'
    },
    {
      number: 4,
      title: 'Credit Issued',
      description: 'Customer receives credit options: in-store credit, NEW credit, or refurbished credit.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <div className="sticky top-24 self-start">
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Trade-In Flow</h3>
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-12 bg-gradient-to-b from-cyan-300 to-blue-300"></div>
              )}
              
              {/* Step Card */}
              <div className="flex items-start gap-4">
                {/* Step Number Badge */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  {step.icon}
                </div>
                
                {/* Step Content */}
                <div className="flex-1 pt-1">
                  <div className="text-sm font-semibold text-gray-500 mb-1">Step {step.number}</div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
