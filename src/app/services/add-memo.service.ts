import { Injectable } from '@angular/core';
import { Memo } from '../modele/memo';



@Injectable({
  providedIn: 'root'
})
export class AddMemoService {
  newMemo: Memo;
  listMemo: Memo[] = [];
  constructor() { }

  /**
   * 
   * @param titre : le titre du mémo 
   * @param priorite : la priorité du mémo
   * @param contenue : le contenu du mémo
   */
  createMemo(titre: string, priorite: string, contenue: string){
    //Création d'un mémo
    this.newMemo = new Memo();
    this.newMemo.titre = titre;
    this.newMemo.priorite =  priorite;
    this.newMemo.contenu = contenue;

    //Ajoute notre mémo une liste de memo 
    this.listMemo.push(this.newMemo);
    //Sauvegarde du mémo en local storage
    this.saveMemoInToLocalStorage(this.listMemo);

  }

  /**
   * 
   * @param listMemo : Notre liste de mémo a sauvegarder dans le local storage
   * Nous avons fait une méthode à part en prévision d'une possible BDD 
   */
  saveMemoInToLocalStorage(listMemo: Memo[]){
    localStorage.setItem('memoList',JSON.stringify(listMemo));
  }
}
