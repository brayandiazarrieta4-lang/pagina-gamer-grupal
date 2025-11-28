'use client';

import { FormEvent, useEffect, useState } from 'react';
import { productService } from '@/services/gameService';
import type { Product } from '@/services/gameService';
import { ProductCard } from '@/components/ui/Productcard';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await productService.getAll();
      setProducts(data);
    } catch {
      toast.error('Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const f = new FormData(e.currentTarget);

  const newProduct = {
    title: f.get('title') as string,
    name: f.get('title') as string,                    // MockAPI usa "name" como identificador
    price: Number(f.get('price') || 0),
    description: (f.get('description') as string) || 'Sin descripción',
    image: (f.get('image') as string) || 'https://via.placeholder.com/600x600?text=Game',

    // ← Añade estos campos obligatorios (puedes poner valores por defecto)
    genre: 'Acción',                    // o añade un input en el formulario
    platforms: ['PC', 'PlayStation', 'Xbox'],  // o un campo multiselect
    releaseDate: new Date().toISOString().split('T')[0], // hoy
    developer: 'Mi Estudio',            // o un input
    category: 'Videojuego',
  };

  try {
    await productService.create(newProduct);
    toast.success('Producto creado');
    setOpen(false);
    load();
  } catch (err) {
    console.error(err);
    toast.error('Error al crear producto');
  }
};

  const handleDelete = async (id: string) => {
    if (!confirm('¿Eliminar este producto?')) return;
    try {
      await productService.remove(id);
      toast.success('Producto eliminado');
      load();
    } catch {
      toast.error('Error al eliminar');
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setOpen(true);
  };

  if (loading) return <div className="py-32 text-center text-3xl">Cargando...</div>;

  function handleUpdate(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Gestión de Productos</h1>

          <Dialog open={open} onOpenChange={(val) => { setOpen(val); if (!val) setEditingProduct(null); }}>
            <DialogTrigger asChild>
              <Button size="lg" className="gap-2">
                <Plus className="w-5 h-5" />
                Nuevo Producto
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{editingProduct ? 'Editar Producto' : 'Nuevo Producto'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={editingProduct ? handleUpdate : handleCreate} className="space-y-4">
                <div>
                  <Label>Título</Label>
                  <Input name="title" defaultValue={editingProduct?.title} required />
                </div>
                <div>
                  <Label>Precio</Label>
                  <Input name="price" type="number" defaultValue={editingProduct?.price} required />
                </div>
                <div>
                  <Label>Descripción (opcional)</Label>
                  <Textarea name="description" defaultValue={editingProduct?.description || ''} />
                </div>
                <div>
                  <Label>URL Imagen (opcional)</Label>
                  <Input name="image" defaultValue={editingProduct?.image} placeholder="https://..." />
                </div>
                <DialogFooter>
                  <Button type="submit">
                    {editingProduct ? 'Guardar Cambios' : 'Crear Producto'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}