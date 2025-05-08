import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[{
      path:'categories',
      loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesModule),
      pathMatch: 'full',
      data: {title:'Categorias', subTitle:'Crie novas categorias'}
    },
    {
      path:'places',
      loadChildren: () => import('../places/places.module').then(m => m.PlacesModule),
      pathMatch: 'full',
      data: {title:'Lugares', subTitle:'Crie novos lugares'}
    },
    {
      path:'gallery',
      loadChildren: () => import('../gallery/gallery.module').then(m => m.GalleryModule),
      pathMatch: 'full',
      data: {title:'Galeria', subTitle:'Consulte lugares para visitar'}
    }
  ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
