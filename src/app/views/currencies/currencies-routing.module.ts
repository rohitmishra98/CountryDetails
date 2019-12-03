import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currencies.component';

const routes: Routes = [
  {
    path: '',
    component: CurrencyComponent,
    data: {
      title: 'currency'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule {}
