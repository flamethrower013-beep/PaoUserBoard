import "./globals.css";


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
      </body>
    </html>
  );
}
