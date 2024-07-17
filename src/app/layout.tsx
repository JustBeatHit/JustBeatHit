import '@/stylesheets/base.scss';
import ConfigureAmplifyClientSide from "./components/ConfigureAmplify";

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
        <ConfigureAmplifyClientSide />
        {children}
      </body>
    </html>
  )
}