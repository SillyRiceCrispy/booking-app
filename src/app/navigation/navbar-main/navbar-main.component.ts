import { Component, OnInit } from '@angular/core';

interface Currency {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit {

  currencies: Currency[] = [
    {value: 'USD', viewValue: 'USD'},
    {value: 'ZAR', viewValue: 'ZAR'},
    {value: 'EUR', viewValue: 'EUR'}
  ];

  selectedCurrency = this.currencies[0].value;

  constructor() { }

  ngOnInit(): void {
  }

}
