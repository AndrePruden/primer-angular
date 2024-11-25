import { Routes } from '@angular/router';
import { ProductosComponent } from './paginas/productos/productos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { AboutComponent } from './paginas/about/about.component';
import { ArticulosComponent } from './paginas/articulos/articulos.component';

export const routes: Routes = [
    {path: 'contacto', component: ContactoComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'about', component: AboutComponent},
    {path: 'articulos', component: ArticulosComponent}
    
];
