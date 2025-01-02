import type { Metadata } from 'next'
import type { NextLayoutProps } from '~/app/type'
import '~/css/app.css'

export const metadata: Metadata = {
  title: 'Libre Move',
  description: 'Acrobatic Skills',
}

export default function RootLayout({ children }: NextLayoutProps) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
