import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';
import { NgModule } from '@angular/core';

//modulos
import { RouterModule, Routes } from '@angular/router';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [
  //path:'/dashboard' PagesRouting
  //path:'/auth' AuthRouting
  {path:'', redirectTo:'/dashboard',pathMatch:'full'},
  { path: '**', component: NopagefoundComponent },
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
