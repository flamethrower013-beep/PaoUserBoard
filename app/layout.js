import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


export const metadata = {
  title: "Pao",
  description: "Manage your tournament",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen  antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
