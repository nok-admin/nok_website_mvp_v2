'use client'

export default function TradeInWorkflow() {
  const steps = [
    {
      number: 1,
      title: 'START TRADE-IN',
      description: 'Customer begins their journey on the redirected Trade-in Page, initiating the process to exchange their current product for credit.',
      status: 'Process Initiated',
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      visual: 'laptop',
      color: 'green',
      position: 'left'
    },
    {
      number: 2,
      title: 'SELECT PRODUCT',
      description: 'Customer browses through a comprehensive list of Brand SKUs to identify their specific product model for accurate valuation.',
      status: 'Product Identification',
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      visual: 'suitcase',
      color: 'blue',
      position: 'right'
    },
    {
      number: 3,
      title: 'SELECT CONDITION',
      description: 'Choose from preset condition options ranging from "Like New" to "Non-Functioning" to determine the trade-in value accurately.',
      status: 'Condition Assessment',
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      visual: 'condition',
      color: 'purple',
      position: 'left'
    },
    {
      number: 4,
      title: 'ADD PHOTOS',
      description: 'Upload clear photos of the product to verify its actual condition and ensure accurate evaluation by the NOK team.',
      status: 'Visual Verification',
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      visual: 'camera',
      color: 'orange',
      position: 'right'
    },
    {
      number: 5,
      title: 'SHIP TO NOK OR STORE DROP-OFF',
      description: 'Send the product using the provided shipping label or drop it off at a designated store location for convenient processing.',
      status: 'Product Delivery',
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      visual: 'delivery',
      color: 'indigo',
      position: 'left'
    },
    {
      number: 6,
      title: 'NOK RECEIVES & EVALUATES',
      description: 'NOK team receives the product and conducts a thorough evaluation to confirm both the product details and actual condition.',
      status: 'Professional Assessment',
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      visual: 'evaluation',
      color: 'teal',
      position: 'right'
    },
    {
      number: 7,
      title: 'NOK EMAILS CUSTOMER WITH CREDIT',
      description: 'Customer receives an email notification with their trade-in credit options: in-store credit, NEW credit, or refurbished credit.',
      status: 'Credit Notification',
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      visual: 'credit',
      color: 'emerald',
      position: 'left'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      green: { bg: 'from-green-50 to-green-100', border: 'border-green-200', text: 'text-green-600', badge: 'bg-green-500' },
      blue: { bg: 'from-blue-50 to-blue-100', border: 'border-blue-200', text: 'text-blue-600', badge: 'bg-blue-500' },
      purple: { bg: 'from-purple-50 to-purple-100', border: 'border-purple-200', text: 'text-purple-600', badge: 'bg-purple-500' },
      orange: { bg: 'from-orange-50 to-orange-100', border: 'border-orange-200', text: 'text-orange-600', badge: 'bg-orange-500' },
      indigo: { bg: 'from-indigo-50 to-indigo-100', border: 'border-indigo-200', text: 'text-indigo-600', badge: 'bg-indigo-500' },
      teal: { bg: 'from-teal-50 to-teal-100', border: 'border-teal-200', text: 'text-teal-600', badge: 'bg-teal-500' },
      emerald: { bg: 'from-emerald-50 to-emerald-100', border: 'border-emerald-200', text: 'text-emerald-600', badge: 'bg-emerald-500' }
    }
    return colors[color] || colors.blue
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trade-In Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow the complete customer journey from start to finish for a seamless trade-in experience
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Vertical Timeline - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-200 via-cyan-400 to-cyan-600" style={{ top: '3rem', bottom: '3rem' }}></div>

          <div className="space-y-16">
            {steps.map((step, idx) => {
              const colors = getColorClasses(step.color)
              const isLeft = step.position === 'left'
              
              return (
                <div key={idx} className="relative">
                  <div className={`flex flex-col lg:flex-row items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className={`lg:w-1/2 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center mb-6">
                          <div className={`w-12 h-12 ${colors.badge} rounded-full flex items-center justify-center mr-4`}>
                            <span className="text-white font-bold text-lg">{step.number}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className={`flex items-center ${colors.text}`}>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">{step.status}</span>
                        </div>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className={`lg:w-1/2 ${isLeft ? 'lg:pl-12' : 'lg:pr-12'}`}>
                      <div className="relative">
                        {/* Timeline Dot - Hidden on mobile */}
                        <div className={`hidden lg:block absolute ${isLeft ? '-left-6' : '-right-6'} top-1/2 transform -translate-y-1/2 w-12 h-12 ${colors.badge} rounded-full flex items-center justify-center`}>
                          {step.icon}
                        </div>
                        
                        {/* Visual Card */}
                        <div className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 border-2 ${colors.border} shadow-md`}>
                          {step.visual === 'laptop' && (
                            <div className="text-center">
                              <svg className="w-16 h-16 mx-auto mb-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer Landing</h4>
                              <p className="text-gray-700">Redirected to dedicated trade-in portal</p>
                            </div>
                          )}
                          {step.visual === 'suitcase' && (
                            <div className="text-center">
                              <svg className="w-16 h-16 mx-auto mb-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">Product Catalog</h4>
                              <p className="text-gray-700">Browse available SKU options</p>
                            </div>
                          )}
                          {step.visual === 'condition' && (
                            <div>
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="text-center">
                                  <svg className="w-12 h-12 mx-auto mb-2 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                  </svg>
                                  <p className="text-sm text-gray-700">Like New</p>
                                </div>
                                <div className="text-center">
                                  <svg className="w-12 h-12 mx-auto mb-2 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <p className="text-sm text-gray-700">Non-Functioning</p>
                                </div>
                              </div>
                              <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Condition Scale</h4>
                              <p className="text-gray-700 text-center">Rate your product's current state</p>
                            </div>
                          )}
                          {step.visual === 'camera' && (
                            <div className="text-center">
                              <svg className="w-16 h-16 mx-auto mb-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">Photo Upload</h4>
                              <p className="text-gray-700">Document product condition visually</p>
                            </div>
                          )}
                          {step.visual === 'delivery' && (
                            <div>
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="text-center">
                                  <svg className="w-12 h-12 mx-auto mb-2 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                  </svg>
                                  <p className="text-sm text-gray-700">Ship</p>
                                </div>
                                <div className="text-center">
                                  <svg className="w-12 h-12 mx-auto mb-2 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                  </svg>
                                  <p className="text-sm text-gray-700">Drop-off</p>
                                </div>
                              </div>
                              <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Delivery Options</h4>
                              <p className="text-gray-700 text-center">Choose your preferred method</p>
                            </div>
                          )}
                          {step.visual === 'evaluation' && (
                            <div className="text-center">
                              <svg className="w-16 h-16 mx-auto mb-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                              </svg>
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">Expert Evaluation</h4>
                              <p className="text-gray-700">Comprehensive product assessment</p>
                            </div>
                          )}
                          {step.visual === 'credit' && (
                            <div>
                              <div className="grid grid-cols-3 gap-2 mb-4">
                                <div className="text-center">
                                  <svg className="w-8 h-8 mx-auto mb-1 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                  </svg>
                                  <p className="text-xs text-gray-700">In-store</p>
                                </div>
                                <div className="text-center">
                                  <svg className="w-8 h-8 mx-auto mb-1 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                  </svg>
                                  <p className="text-xs text-gray-700">NEW</p>
                                </div>
                                <div className="text-center">
                                  <svg className="w-8 h-8 mx-auto mb-1 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                  </svg>
                                  <p className="text-xs text-gray-700">Refurb</p>
                                </div>
                              </div>
                              <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Credit Options</h4>
                              <p className="text-gray-700 text-center">Multiple credit types available</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Completion Summary */}
        <div className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <svg className="w-16 h-16 mx-auto mb-6 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-3xl font-bold mb-4">Trade-In Process Complete</h2>
            <p className="text-xl opacity-90 mb-8">
              Turn customer trade-ins into revenue while driving new sales and maximizing recovery value for your brand
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold">7</div>
                <div className="text-sm opacity-75">Simple Steps</div>
              </div>
              <div className="w-px h-12 bg-white opacity-30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-75">Transparent</div>
              </div>
              <div className="w-px h-12 bg-white opacity-30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm opacity-75">Credit Options</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

