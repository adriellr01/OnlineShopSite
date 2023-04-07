import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { ShopsComponent } from './shops/shops.component';

const routes: Routes = [
  { 
    path: 'tiendas', 
    component: ShopsComponent 
  },
  { 
    path: 'roles', 
    component: RolesComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
