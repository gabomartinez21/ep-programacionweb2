import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})

export class ListarProductosComponent {
  productos: any[] = [];
  productosFiltrados: any[] = [];
  categorias: string[] = [];
  categoriaSeleccionada: string = '';

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.productos = this.productoService.obtenerProductos();
    this.categorias = this.obtenerCategorias();
    this.productosFiltrados = this.productos;
  }

  obtenerCategorias(): string[] {
    const categoriasUnicas = [...new Set(this.productos.map(producto => producto.categoria))];
    return categoriasUnicas;
  }

  filtrarPorCategoria(): void {
    if (this.categoriaSeleccionada === '') {
      this.productosFiltrados = this.productos; // Mostrar todos si no hay categoría seleccionada
    } else {
      this.productosFiltrados = this.productos.filter(producto => producto.categoria === this.categoriaSeleccionada);
      
    }
  }

  // Método para eliminar un producto
  deleteProduct(productoId: number) {
    this.productos = this.productos.filter(producto => producto.id !== productoId); // Elimina el producto del array
    this.filtrarPorCategoria(); // Actualiza la lista filtrada
  }

  // Redirigir al formulario para agregar un nuevo producto
  agregarProducto() {
    this.router.navigate(['/agregar']);
  }

  // Redirigir a la vista de detalles de un producto
  verDetalle(id: number) {
    this.router.navigate(['/productos', id]);
  }
}

