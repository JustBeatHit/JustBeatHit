import '../stylesheets/base.scss';
import Navbar from './components/Navbar';
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
      
      <body>
      <Navbar />
        {children}
        </body>
    </html>
  )
}