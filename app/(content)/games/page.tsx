// app/tienda/page.tsx   ← esta será tu tienda para clientes
'use client';

import { useEffect, useState } from 'react';
import { productService } from '@/services/gameService';
import type { Product } from '@/services/gameService';
import { ProductCard } from '@/components/ui/Productcard';
export default function TiendaPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productService.getAll().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="py-32 text-center text-3xl">Cargando juegos...</div>;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black text-white text-center mb-12">
          TIENDA OFICIAL
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              // ← Aquí NO pasamos onEdit ni onDelete → ¡nunca aparecerán!
            />
          ))}
        </div>
      </div>
    </div>
  );
}