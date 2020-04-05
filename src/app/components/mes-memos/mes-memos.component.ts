import { Component, OnInit } from '@angular/core';
import { Memo } from 'src/app/modele/memo';
import { AddMemoService } from 'src/app/services/add-memo.service';

@Component({
  selector: 'app-mes-memos',
  templateUrl: './mes-memos.component.html',
  styleUrls: ['./mes-memos.component.scss']
})
export class MesMemosComponent implements OnInit {

  listMemos: Memo[] = [];
  newMemo: Memo;
  listMemosDoneOrDelete: Memo[] = [];

  constructor(private memoService: AddMemoService) { }

  ngOnInit() {
    // this.getMemoInLocalStorage();
    
    // for(let i=0; i < this.listMemos.length ; i++){
    //   console.log("Mémo n°" + i);
    //   console.log("titre: " + this.listMemos[i].titre);
    //   console.log("contenu :" + this.listMemos[i].contenu);
    // }
    //console.log(this.listMemos);

    this.rechercherLesMemos();
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

  /**
   * Nous recherchons tout les mémos stocké dans notre base de donnée 
   */
  rechercherLesMemos(){
    this.memoService.getMemos().subscribe({
      next: data => {
        for(const d of (data as any)){
          this.newMemo = new Memo();
          this.newMemo.id = d.id;
          this.newMemo.titre = d.titre;
          this.newMemo.contenu = d.contenu;
          this.newMemo.priorite = d.priorite;
          this.listMemos.push(this.newMemo);
        }
        console.log(this.listMemos);
      },
      error: error => console.error('Il y a eu une erreur!', error)
    });

    //console.log("Voici les mémos récupéré : ");
    //console.log(this.listMemos);
  }


}
