import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpFormComponent } from './forms/emp-form/emp-form.component';

const routes: Routes = [ {
  path: '', component: EmpFormComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
