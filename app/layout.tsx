"use client";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-black">
        <HideNavbarOnAuth>
          <Navbar />
        </HideNavbarOnAuth>
        {children}
      </body>
      <HideNavbarOnAuth>
        <Footer />
      </HideNavbarOnAuth>
    </html>
  );
}

// Componente pequeño y reutilizable
function HideNavbarOnAuth({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage =
    pathname?.startsWith("/login") || pathname?.startsWith("/register");

  if (isAuthPage) return null;
  return <>{children}</>;
}
