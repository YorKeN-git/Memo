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
  createMemo(titre: string, priorite: string, contenue: string ){
    //Création d'un mémo
    this.newMemo = new Memo();
    this.newMemo.titre = titre;
    this.newMemo.priorite =  priorite;
    this.newMemo.contenu = contenue;
    this.newMemo.status = "null";
    this.newMemo.dateCreation = new Date();
    this.newMemo.dateFait = null;
    this.newMemo.dateSuppression = null;
    //Requête POST : pas necessaire de faire un traitement sur la donnée enregistré 
    this.http.post(this.path, this.newMemo, this.httpOptions).subscribe({
      next: data => console.log(data), //ligne a supprimer 
      error: error => console.error('Il y a eu une erreur!', error)
    });
  }

  getMemos(){
    return this.http.get(this.path, this.httpOptions);
  }

  deleteMemo(id: string){
    let pathDelete = this.path + "/delete/" + id;
    this.http.post(pathDelete, null, this.httpOptions).subscribe(
      {
        next: null,
        error: error => console.error('Il y a eu une erreur!', error)
      }
    );
  }

  modifierMemo(id: string, status: string, listMemo: Memo[]){
    //On recherche le mémo concerné par la modification
    for (let index = 0; index < listMemo.length; index++) {
      if(listMemo[index].id === id){
        this.newMemo = new Memo();
        this.newMemo.id = listMemo[index].id ; 
        this.newMemo.titre = listMemo[index].titre;
        this.newMemo.contenu = listMemo[index].contenu;
        this.newMemo.priorite = listMemo[index].priorite;
        this.newMemo.dateCreation = listMemo[index].dateCreation;
        this.newMemo.status = status;
        console.log(this.newMemo.status);
        if(status == 'fait'){
          //Si on a cliquer sur le bouton Fait
          this.newMemo.dateFait = new Date();
        }else{
          //Sinon on a cliquer sur le bouton Supprimer
          this.newMemo.dateSuppression = new Date();
        }
        //Requête POST : pas necessaire de faire un traitement sur la donnée enregistré 
        this.http.post(this.path, this.newMemo, this.httpOptions).subscribe({
          next: null, //ligne a supprimer 
          error: error => console.error('Il y a eu une erreur!', error)
        });
      }
    }
  }

}
