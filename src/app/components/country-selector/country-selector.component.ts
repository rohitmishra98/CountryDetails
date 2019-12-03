import { Component, OnInit } from '@angular/core';
import { CountrySelectorService } from './country-selector.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent implements OnInit {
  selectedCountry:string;
  countryList;
  constructor(private countryService: CountrySelectorService) { }

  ngOnInit() {
    this.getCountries();
    this.countryService.selectedCountry.subscribe(
      res => {
        console.log(res);
        this.selectedCountry = res;
        if(res !== ''){
          this.getDetails(res)
        }
      }
    );
    this.countryService.selectedCountryData.subscribe(
      res=>{
        console.log(res,'countrydata')
      }
    )
  }
  updateSelected(val){
    this.countryService.selectedCountry.next(val)
  }
  getCountries(){
    this.countryService.getDataCall('all').subscribe(
      res=>{
        this.countryList = res
        console.log(this.countryList);
      }
    )
  }
  getDetails(route){
    this.countryService.getDataCall(`alpha/${route}`).subscribe(
      res =>{
        this.countryService.selectedCountryData.next(res);
      }
    )
  }

}
