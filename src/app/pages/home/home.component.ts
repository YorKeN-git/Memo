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
    if(localStorage.getItem('memoList')){
      this.afficherMemo();
    }
    

  }

  afficherMemo(){
    var memoList = localStorage.getItem('memoList');
    console.log(memoList);
    JSON.parse
    for(let i=0 ; i < memoList.length ; i++){
      // document.getElementById('memo').innerHTML += '<div class="memo"><h4>'+ memoList +'</h4><p> contenu </p> <button type="button" class="btn btn-success" (click)="doneMemo()">Fait !</button> <button type="button" class="btn btn-danger" (click)="deleteMemo()">Supprimer</button>';
    }
  }

  doneMemo(){
    //TODO done memo
  }

  deleteMemo(){
    //TODO delete memo
  }

}
