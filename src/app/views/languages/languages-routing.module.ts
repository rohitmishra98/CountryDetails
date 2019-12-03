import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageComponent } from './languages.component';

const routes: Routes = [
  {
    path: '',
    component: LanguageComponent,
    data: {
      title: 'languages'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class LanguagesRoutingModule {}
