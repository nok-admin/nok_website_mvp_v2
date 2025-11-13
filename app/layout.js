import './globals.css'
import ClientLayout from '@/components/ClientLayout'

export const metadata = {
  title: 'NOK - Turn Returns Into Revenue',
  description: 'The platform built for brands to take control of their reverse supply chain',
  icons: {
    icon: '/logos/Nok-Logomark copy.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}

