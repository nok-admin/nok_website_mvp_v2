import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              <span className="text-4xl font-black text-black lowercase tracking-tight" style={{ fontWeight: 900 }}>nok</span>
            </div>
            <p className="text-gray-600 max-w-sm mb-4">
              The platform that turns returns into revenue. Built for brands to take control of their reverse supply chain.
            </p>
            <p className="text-sm text-gray-500">
              © 2025 nok. All rights reserved.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-sm text-gray-900 mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-black transition-colors text-sm">Platform</Link></li>
              <li><Link href="/case-studies" className="text-gray-600 hover:text-black transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-black transition-colors text-sm">About</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-black transition-colors text-sm">Careers</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-black transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-black transition-colors text-sm">Blog</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-black transition-colors text-sm">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-end items-center">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/nokrecommerce/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

