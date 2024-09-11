import '../stylesheets/base.scss';
import ConfigureAmplifyClientSide from "./components/ConfigureAmplify";
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const goia = localFont({
  src: "./assets/fonts/Goia/GoiaVariable.ttf",
  display: "swap",
  variable: "--font-goia"
})

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-inter"
})

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
    <html lang="en" className={`${inter.variable} ${goia.variable}`}>
      <body>
        <ConfigureAmplifyClientSide />
        {children}
        </body>
    </html>
  )
}