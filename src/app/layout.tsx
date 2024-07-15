import '../stylesheets/base.scss';

export const metadata = {
  title: 'Just Beat Hit',
  description: 'Jeux musicaux en ligne',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}