import "./globals.css";

export const metadata = {
  title: "Zenfy PM",
  description: "Zenfy PM storefront",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
