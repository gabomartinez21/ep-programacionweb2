import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-detalles-de-productos',
  standalone: true,
  imports: [],
  templateUrl: './detalles-de-productos.component.html',
  styleUrl: './detalles-de-productos.component.css'
})
export class DetallesDeProductosComponent implements OnInit {
  producto: any;

  constructor(private route: ActivatedRoute, private productoService: ProductoService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productoService.obtenerProductoPorId(id);
  }
}
