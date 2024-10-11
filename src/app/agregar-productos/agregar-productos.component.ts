import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-productos',
  standalone: true,
  imports: [
    FormsModule,           // Para formularios por template
    ReactiveFormsModule
  ],
  templateUrl: './agregar-productos.component.html',
  styleUrl: './agregar-productos.component.css'
})
export class AgregarProductosComponent {
  productoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]],
      descripcion: ['']
    });
  }

  onSubmit() {
    if (this.productoForm.valid) {
      // Generar un ID aleatorio para el nuevo producto
      const nuevoProducto = {
        id: Math.floor(Math.random() * 1000),
        ...this.productoForm.value,
      };

      this.productoService.agregarProducto(nuevoProducto);
      this.router.navigate(['/']);
    }
  }
}
