// import Navbar from 'apps/next-music-exclusives/components/navbar';
import './global.css';
import Sidebar3 from '../components/sidebar3';
// import Sidebar from 'apps/next-music-exclusives/components/sidebar';

export const metadata = {
  title: 'Nx Next App',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Welcome to next-music-exclusives!</title>
      </head>
      <body className="flex gap-6">
        <Sidebar3 />
        {children}
      </body>
    </html>
  );
}
