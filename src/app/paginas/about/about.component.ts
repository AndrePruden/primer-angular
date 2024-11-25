import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy{
  constructor(private productosService: ProductosService){

  }

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe(
      data => console.log(data),
      error => console.log("HAY UN ERROR"),
      () => console.log("Proceso Terminado")
    )
  }

  ngOnDestroy(): void {
    console.log("ADIOS MUNDO")
  }

}
