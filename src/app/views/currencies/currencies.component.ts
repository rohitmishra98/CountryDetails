import { Component, OnInit } from '@angular/core';
import { CountrySelectorService } from '../../components/country-selector/country-selector.service';

@Component({
  templateUrl: 'currencies.component.html'
})
export class CurrencyComponent implements OnInit {
  currencyList: ICurrency;
  constructor(private countryService: CountrySelectorService){}
  ngOnInit() {
    this.countryService.selectedCountryData.subscribe(
      res =>{
      if(res)
       this.currencyList = res.currencies
      }
    );
  }
}

export interface ICurrency{
  code: string;
  name: string;
  symbol: string;
}