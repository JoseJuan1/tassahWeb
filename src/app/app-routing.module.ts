import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CustomComponent } from './views/layout/custom/custom.component';
import { MainComponent } from './views/layout/main/main.component';

const routes: Routes = [
    { path: 'web', component: CustomComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
