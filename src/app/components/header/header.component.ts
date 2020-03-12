import { Component, OnInit } from '@angular/core';
import { formatDate, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dateActuel: Date;
  date: string;
  
  constructor() { }

  ngOnInit() {
    //récuperd la date actuel
    this.getDate();
  }

  getDate(){
    registerLocaleData(localeFr, 'fr', localeFrExtra);
    this.dateActuel = new Date();
    this.date = formatDate(this.dateActuel, 'MM-dd-yyyy', 'fr-FR');
  }

}
