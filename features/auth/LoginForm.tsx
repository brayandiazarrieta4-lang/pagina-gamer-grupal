import React from 'react';
import { signInAction } from "@/lib/actions/auth-actions";

export default function LoginForm() {
  return (
    <>
      {/* Fondo gamer oscuro con toque de neón */}
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 relative overflow-hidden">
        
        {/* Efecto de grid sutil gamer (opcional pero brutal) */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-transparent to-purple-900"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Card con borde neón rojo */}
          <div className="bg-black/90 border-2 border-purple-600/60 rounded-xl shadow-2xl p-8 md:p-10 backdrop-blur-xl
                          shadow-purple-600/20">
            
            {/* Título con estilo gamer */}
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text 
                         bg-linear-to-r from-purple-500 to-purple-700 mb-8 text-center tracking-wider">
              INICIAR SESION
            </h1>

            <form action={signInAction} className="space-y-6">
              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="PLAYER@EMAIL.COM"
                  required
                  className="w-full px-5 py-4 bg-zinc-900/80 border border-purple-800/50 rounded-lg 
                           text-purple-100 placeholder-purple-600/70 font-medium tracking-wide
                           focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                           transition-all duration-300 uppercase text-sm"
                />
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••••"
                  required
                  className="w-full px-5 py-4 bg-zinc-900/80 border border-purple-800/50 rounded-lg 
                           text-purple-100 placeholder-purple-600/70 font-medium tracking-wide
                           focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
                           transition-all duration-300 text-sm"
                />
              </div>

              {/* Botón GAMER full rojo fijo (sin cambio de color en hover) */}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-bold text-lg py-4 rounded-lg
                         shadow-lg shadow-purple-600/50 tracking-wider uppercase
                         transition-all duration-200 transform hover:scale-105 active:scale-95
                         border-2 border-purple-500"
              >
                INICIAR SESION
              </button>
            </form>

            {/* Texto adicional gamer */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm font-medium">
                Eres nuevo?{" "}
                <a href="/register" className="text-purple-500 hover:text-purple-400 font-bold underline underline-offset-4">
                  CREAR CUENTA
                </a>
              </p>
            </div>
          </div>

          {/* Detalle final gamer */}
          <div className="mt-8 text-center">
            <p className="text-purple-800/60 text-xs font-mono tracking-widest">
              © 2025 GAMING PLATFORM | ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </>
  );
}