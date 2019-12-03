import { Component, OnInit } from '@angular/core';
import { CountrySelectorService } from '../../components/country-selector/country-selector.service';

@Component({
  templateUrl: 'languages.component.html'
})
export class LanguageComponent implements OnInit {
  languageList: ILanguage;
  constructor(private countryService: CountrySelectorService){}
  ngOnInit() {
    this.countryService.selectedCountryData.subscribe(
      res =>{
      if(res)
       this.languageList = res.languages
      }
    );
  }
}

export interface ILanguage{
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}