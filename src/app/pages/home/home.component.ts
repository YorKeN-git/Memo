import { Component, OnInit } from '@angular/core';
import { Memo } from 'src/app/modele/memo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titreMemo: string;
  contenuMemo: string;
  priorite: string;

  constructor() { }

  ngOnInit() {
    //charge les mémo enregistrer
    this.afficherMemo();

  }

  afficherMemo(){
    var memoList = localStorage.getItem('memoList');
    console.log(memoList);
    for(let i=0 ; i < memoList.length ; i++){
      // document.getElementById('memo').innerHTML = 
    }
  }

}
