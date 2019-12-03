import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currencies.component';
import { CountrySelectorModule } from '../../components/country-selector/country-selector.module';
import { CurrencyRoutingModule } from './currencies-routing.module';



@NgModule({
  declarations: [CurrencyComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    CountrySelectorModule
  ]
})
export class CurrenciesModule { }
