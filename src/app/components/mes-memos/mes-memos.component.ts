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
    this.rechercherLesMemos();
  }

  getMemoInLocalStorage(){
    let save = localStorage.getItem('memoList');
    this.listMemos = JSON.parse(save);
  }

  deleteMemo(id:string){
    //Supprime le mémo 
    this.memoService.modifierMemo(id, 'supprimer', this.listMemos);
  }

  doneMemo(id:string){
    //Place le memo terminé dans une liste de mémo terminé 
    //utile à l'avenir pour les statistique 
    let statutFait = "fait";
    this.memoService.modifierMemo(id, statutFait, this.listMemos);
  }

  /**
   * Nous recherchons tout les mémos stocké dans notre base de donnée 
   */
  rechercherLesMemos(){
    this.memoService.getMemos().subscribe({
      next: data => {
        this.listMemos = [] as Memo[];
        for(const d of (data as any)){
          this.newMemo = new Memo();
          this.newMemo.id = d.id;
          this.newMemo.titre = d.titre;
          this.newMemo.contenu = d.contenu;
          this.newMemo.priorite = d.priorite;
          this.newMemo.status = d.status;
          this.newMemo.dateCreation = d.dateCreation;
          this.newMemo.dateFait = d.dateFait;
          this.newMemo.dateSuppression = d.dateSuppression;
          if(this.newMemo.status == "null"){
            this.listMemos.push(this.newMemo);
          }else{
            this.listMemosDoneOrDelete.push(this.newMemo);
          }
          
        }
        console.log(this.listMemos);
        console.log(this.listMemosDoneOrDelete);
      },
      error: error => console.error('Il y a eu une erreur!', error)
    });
  }


}
