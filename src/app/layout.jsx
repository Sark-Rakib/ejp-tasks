import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";
import ClientProvider from "./ClientProvider";
import "./globals.css";

export const metadata = {
  title: "EJP Tasks",
  description: "Next.js + NextAuth + MongoDB Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <Navbar />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
