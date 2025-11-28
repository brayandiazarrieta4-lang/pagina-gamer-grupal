'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { productService } from '@/services/gameService';
import type { Product } from '@/types/game';
import { ShoppingCart, Download } from 'lucide-react';

export default function GamePage() {
  const { id } = useParams() as { id: string };
  const [game, setGame] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productService
      .getById(id)
      .then(setGame)
      .catch(() => setGame(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-5xl font-black text-purple-400">CARGANDO...</p>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-4xl font-bold text-red-500">JUEGO NO ENCONTRADO</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Fondo cyberpunk */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 max-w-7xl">
        {/* Título */}
        <h1 className="text-5xl md:text-7xl font-black text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          {game.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Imagen */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border-4 border-purple-600/60 shadow-2xl">
              {game.image ? (
                <Image
                  src={game.image}
                  alt={game.title}
                  width={1200}
                  height={600}
                  className="w-full"
                  priority
                />
              ) : (
                <div className="bg-gray-800 w-full h-96 flex items-center justify-center">
                  <span className="text-6xl font-bold text-purple-600 opacity-30">NO IMAGE</span>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar compra */}
          <div>
            <div className="bg-black/80 backdrop-blur-xl border-2 border-purple-600/60 rounded-2xl p-8">
              <div className="mb-8">
                <p className="text-5xl font-black text-cyan-400">${game.price}</p>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-2xl py-5 rounded-xl mb-4 hover:scale-105 transition flex items-center justify-center gap-3">
                <ShoppingCart className="w-8 h-8" />
                AÑADIR AL CARRITO
              </button>

              <button className="w-full bg-cyan-600 text-black font-bold text-2xl py-5 rounded-xl hover:bg-cyan-500 transition flex items-center justify-center gap-3">
                <Download className="w-8 h-8" />
                COMPRAR AHORA
              </button>
            </div>
          </div>
        </div>

        {/* Descripción */}
        {game.description && (
          <div className="mt-16 bg-black/60 backdrop-blur-md border border-purple-600/40 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-purple-400 mb-6">Sobre este juego</h2>
            <p className="text-xl text-gray-300 leading-relaxed">{game.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}