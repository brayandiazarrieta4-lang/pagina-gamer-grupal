export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      {/* Fondo grid gamer */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#1f1f1f 1px, transparent 1px), linear-gradient(90deg, #1f1f1f 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto py-12">
        {/* Título grande */}
        <div className="h-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl animate-pulse mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cover + galería */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-video lg:aspect-[21/9] bg-gray-900/80 border-4 border-purple-600/40 rounded-3xl animate-pulse overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-video bg-gray-800/70 rounded-xl animate-pulse" />
              ))}
            </div>
          </div>

          {/* Sidebar compra */}
          <div className="bg-black/90 backdrop-blur-2xl border-2 border-purple-600/50 rounded-3xl p-8 space-y-6 animate-pulse">
            <div className="h-10 bg-gray-700 rounded-xl" />
            <div className="h-16 bg-purple-600/60 rounded-2xl" />
            <div className="h-16 bg-cyan-600/60 rounded-2xl" />
            <div className="space-y-4">
              <div className="h-6 bg-gray-700 rounded w-3/4" />
              <div className="h-6 bg-gray-700 rounded w-1/2" />
            </div>
          </div>
        </div>

        {/* Secciones inferiores */}
        <div className="mt-16 space-y-10">
          <div className="h-40 bg-gray-900/60 rounded-3xl animate-pulse" />
          <div className="h-32 bg-gray-900/60 rounded-3xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}