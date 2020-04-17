import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenedorComponent } from './components/containers/contenedor/contenedor.component';
import { LayoutComponent } from './components/containers/layout/layout.component';
import { LayoutpipeComponent } from './components/containers/layoutpipe/layoutpipe.component';
import { LocalStorageViernesComponent } from './components/views/local-storage-viernes/local-storage-viernes.component';


const routes: Routes = [{path:'',component:LayoutComponent},
                        {path:'pipes',component:LayoutpipeComponent},
                        {path:'local',component:LocalStorageViernesComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
