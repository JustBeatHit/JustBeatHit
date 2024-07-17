import '@/stylesheets/auth.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="auth-container">
        {children}
    </div>
  )
}