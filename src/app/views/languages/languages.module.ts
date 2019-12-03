import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesRoutingModule } from './languages-routing.module';
import { LanguageComponent } from './languages.component';
import { CountrySelectorModule } from '../../components/country-selector/country-selector.module';



@NgModule({
  declarations: [LanguageComponent],
  imports: [
    CommonModule,
    LanguagesRoutingModule,
    CountrySelectorModule
  ]
})
export class LanguagesModule { }
