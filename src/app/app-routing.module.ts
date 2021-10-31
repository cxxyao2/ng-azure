import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyParentComponent } from './my-parent/my-parent.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  { path: 'parent', component: MyParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
