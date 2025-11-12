'use client'

export default function CodeBlock({ children, language = 'shell' }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-400 text-xs ml-2">{language}</span>
      </div>
      <pre className="text-sm text-gray-100 font-mono">
        <code>{children}</code>
      </pre>
    </div>
  )
}

