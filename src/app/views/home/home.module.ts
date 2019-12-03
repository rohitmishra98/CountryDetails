import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CountrySelectorModule } from '../../components/country-selector/country-selector.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    HomeRoutingModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    CountrySelectorModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ HomeComponent]
})
export class HomeModule { }
