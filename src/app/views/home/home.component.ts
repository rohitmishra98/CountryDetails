import { Component, OnInit } from '@angular/core';
import { CountrySelectorService } from '../../components/country-selector/country-selector.service';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  countryDetails: any;
  constructor(private countryService: CountrySelectorService){}
  ngOnInit() {
    this.countryService.selectedCountryData.subscribe(
      res =>{
      if(res)
       this.countryDetails = res
       console.log(res)
      }
    );
  }
}

