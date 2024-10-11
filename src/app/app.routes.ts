import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { DetallesDeProductosComponent } from './detalles-de-productos/detalles-de-productos.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
  { path: 'listar', component: ListarProductosComponent },
  { path: 'productos/:id', component: DetallesDeProductosComponent },
  { path: 'agregar', component: AgregarProductosComponent },
];

@NgModule({
  imports: [
    AppComponent,
    ListarProductosComponent,
    AgregarProductosComponent, // Declara tu componente aquí
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
