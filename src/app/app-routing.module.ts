import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenedorComponent } from './components/containers/contenedor/contenedor.component';
import { LayoutComponent } from './components/containers/layout/layout.component';


const routes: Routes = [{path:'',component:LayoutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
