import { Component, OnInit } from '@angular/core';
import { Memo } from 'src/app/modele/memo';

@Component({
  selector: 'app-mes-memos',
  templateUrl: './mes-memos.component.html',
  styleUrls: ['./mes-memos.component.scss']
})
export class MesMemosComponent implements OnInit {

  listMemos: Memo[] = [];
  listMemosDoneOrDelete: Memo[] = [];

  constructor() { }

  ngOnInit() {
    this.getMemoInLocalStorage();
    
    // for(let i=0; i < this.listMemos.length ; i++){
    //   console.log("Mémo n°" + i);
    //   console.log("titre: " + this.listMemos[i].titre);
    //   console.log("contenu :" + this.listMemos[i].contenu);
    // }
    //console.log(this.listMemos);
    
  }

  getMemoInLocalStorage(){
    let save = localStorage.getItem('memoList');
    this.listMemos = JSON.parse(save);
  }

  deleteMemo(id:number){
    //Supprime le mémo 
  }

  doneMemo(id:number){
    //Place le memo terminé dans une liste de mémo terminé 
    //utile à l'avenir pour les statistique 
  }



}
