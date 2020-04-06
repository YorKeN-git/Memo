import { Component, OnInit } from '@angular/core';
import { AddMemoService } from 'src/app/services/add-memo.service';
import { Memo } from 'src/app/modele/memo';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {
  //Mes variables pour les chiffres clés 
  nbMemosEnCours: number = null;
  nbMemosRealise: number = null;
  nbMemosSupprime: number = null;
  nbMemosTotal: number = null;

  listMemos: Memo[] = [];
  newMemo: Memo;

  constructor(private memoService: AddMemoService) { }

  ngOnInit() {
    
    this.initChiffreCle();
    
  }

  /**
   * Initialise les chiffres clés de l'application
   */
  initChiffreCle(){
    setTimeout(() => {
      this.memoService.getMemos().subscribe({
        next: data => {
          this.listMemos = [] as Memo[];
          for(const d of (data as any)){
            if(d.status == "null"){
              this.nbMemosEnCours++;
            }else if(d.status == "fait"){
              this.nbMemosRealise++;
            }else{
              this.nbMemosSupprime++;
            }
          }
          this.nbMemosTotal = this.nbMemosEnCours + this.nbMemosRealise + this.nbMemosSupprime ;
        },
        error: error => console.error('Il y a eu une erreur!', error)
      });
    }, 1000);
  }

}
