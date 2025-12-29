import Navbar from './components/Navbar';
import Background from './components/background';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}