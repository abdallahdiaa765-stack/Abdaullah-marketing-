import './globals.css'
export const metadata = {
  title: 'Abdullah Marketing',
  description: 'Social Media Marketing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  )
}
