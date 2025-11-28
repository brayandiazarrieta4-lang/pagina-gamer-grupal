"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/services/gameService";

interface ProductCardProps {
    product: Product;
    onEdit?: (product: Product) => void;
    onDelete?: (id: string) => void;
}

export function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
    const formattedPrice = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    }).format(product.price);

    return (
        <Card className="group relative overflow-hidden rounded-2xl border bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
            {/* IMAGEN ALARGADA EXACTAMENTE COMO TU REFERENCIA */}
            <div className="relative aspect-3/4 overflow-hidden bg-muted">
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.title || "Producto"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                            e.currentTarget.src =
                                "https://via.placeholder.com/600x600?text=MiJuego";
                        }}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-200">
                        <span className="text-2xl font-bold text-gray-500">Sin Imagen</span>
                    </div>
                )}
                {/* BOTONES EN HOVER – SE DESPLIEGAN HACIA ABAJO (la tarjeta se alarga) */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full shadow-2xl transition-all duration-300 ease-out group-hover:translate-y-0">
                    <div className="p-4">
                        <div className="flex gap-3">
                            {/* BOTÓN COMPRAR */}
                            <Button className="flex-1 h-12 bg-black text-white font-bold rounded-full hover:bg-gray-800 shadow-lg">
                                COMPRAR
                            </Button>

                            {/* BOTÓN AGREGAR AL CARRITO con texto */}
                            <Button className="flex-1 h-12 bg-white text-black font-bold rounded-full border-2 border-black hover:bg-gray-100 shadow-lg">
                                <ShoppingCart className="h-5 w-5 mr-2" />
                                AGREGAR
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* CONTENIDO INFERIOR – más espacioso y bonito */}
            <div className="space-y-5 p-6">
                <h3 className="line-clamp-2 text-lg font-bold leading-tight text-gray-900">
                    {product.title}
                </h3>

                <p className="text-3xl font-extrabold text-gray-900">{formattedPrice}</p>
                {/* BOTONES DE ADMINISTRACIÓN – estilo como en tu imagen */}
                {(onEdit || onDelete) && (
                    <div className="flex gap-2 border-t  px-4 py-3">
                        {onEdit && (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="flex-1 h-9 rounded-full border border-black text-gray-700 hover:bg-gray-100 font-medium"
                                onClick={() => onEdit(product)}   // ← ahora sí funciona perfecto
                            >
                                Editar
                            </Button>
                        )}
                        
                        {onDelete && (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="flex-1 h-9 text-red-600 border-black border rounded-full hover:bg-red-50  font-medium"
                                onClick={() => onDelete(product.id!)}
                            >
                                Eliminar
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </Card>

    );
}