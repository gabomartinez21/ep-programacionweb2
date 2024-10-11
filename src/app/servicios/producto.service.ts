import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: any[] = [];

  constructor() { }

  // Obtener los productos
  obtenerProductos() {
    return this.productos;
  }

  // Agregar un producto al array global
  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

  // Obtener un producto específico por ID
  obtenerProductoPorId(id: number) {
    return this.productos.find(producto => producto.id === id);
  }
}
