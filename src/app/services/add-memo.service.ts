import { Injectable } from '@angular/core';
import { Memo } from '../modele/memo';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddMemoService {
  newMemo: Memo;
  listMemo: Memo[] = [];
  path: string = "http://localhost:8080/memos/";

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
  };

  constructor(private http: HttpClient) { }
  //idMemo: number = 0 ;
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
    //Requête POST : pas necessaire de faire un traitement sur la donnée enregistré 
    this.http.post(this.path, this.newMemo, this.httpOptions).subscribe({
      next: null,
      error: error => console.error('Il y a eu une erreur!', error)
    });
  }

  getMemos(){
    return this.http.get(this.path, this.httpOptions);
  }

}
