import './globals.css'

export const metadata = {
  title: 'Happy 16th Birthday!',
  description: '16 reasons why we love you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
