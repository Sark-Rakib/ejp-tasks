import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";
import ClientProvider from "./ClientProvider";
import "./globals.css";
import { AuthProvider } from "@/Context/AuthContext";

export const metadata = {
  title: "EJP Tasks",
  description: "Next.js + NextAuth + MongoDB Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ClientProvider>
            <Navbar />
            {children}
            <Footer />
          </ClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
