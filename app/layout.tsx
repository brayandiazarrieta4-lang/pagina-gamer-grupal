"use client";
import Footer from "@/components/layout/Footer";
// 🎯 Corrección de ruta: Usar la ruta relativa (./)
import './globals.css';
import Navbar from "@/components/layout/Navbar";
import { usePathname } from "next/navigation";
import RotatingBar from "@/components/ui/RotatingBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* Aplicamos la clase dark a todo el cuerpo para que el tema oscuro funcione */}
      <body className="min-h-screen bg-black dark">
        <HideNavbarOnAuth>
          <RotatingBar />
          <Navbar />
        </HideNavbarOnAuth>
        {/* Contenedor principal para el contenido de la página, asegurando que el z-index del body::before no lo tape */}
        <div className="relative z-10">
          {children}
        </div>
        <HideNavbarOnAuth>
          <Footer />
        </HideNavbarOnAuth>
      </body>

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