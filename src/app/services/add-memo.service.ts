import { Injectable } from '@angular/core';
import { Memo } from '../modele/memo';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddMemoService {
  newMemo: Memo;
  listMemo: Memo[] = [];
  path: string = "localhost:8080/memos/";

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
  };

  constructor(private http: HttpClient) { }
  idMemo: number = 0 ;
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
    this.http.post(this.path, this.newMemo, this.httpOptions).subscribe(data => 
        console.log(data)
      );

    //this.newMemo.id = this.idMemo;
    //Ajoute notre mémo une liste de memo 
    // this.listMemo.push(this.newMemo);
    //Sauvegarde du mémo en local storage
    // this.saveMemoInToLocalStorage(this.listMemo);
    // this.idMemo++;
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
