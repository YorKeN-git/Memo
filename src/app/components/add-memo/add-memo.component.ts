import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddMemoService } from 'src/app/services/add-memo.service';
import { Memo } from 'src/app/modele/memo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-memo',
  templateUrl: './add-memo.component.html',
  styleUrls: ['./add-memo.component.scss']
})
export class AddMemoComponent implements OnInit {

  //Formulaire pour créer notre mémo
  formAddMemo: FormGroup;

  //Notre liste de Mémo 
  listMemos: Memo[];

  constructor(private formBuilder: FormBuilder,
    private memoService: AddMemoService,
    private route: Router) { }

  ngOnInit() {
    this.formAddMemo = this.formBuilder.group({
      titreMemo: ['', Validators.required],
      priorite: ['', Validators.required],
      contenue: ['']
    })
  }

  addMemo(){
    if(this.formAddMemo.invalid){
      return;
    }else{
      //Todo add memo
      //Récuperd nos données du formulaire 
      let titre = this.formAddMemo.get('titreMemo').value;
      let priorite = this.formAddMemo.get('priorite').value;
      let contenue = this.formAddMemo.get('contenue').value;
      //Appel à notre service pour créer le mémo 
      this.memoService.createMemo(titre, priorite, contenue);
      //Réinitialise le formulaire
      this.formAddMemo.reset();
      //Redirection vers la home page 
      this.route.navigate(['/home']);

    }
  }

}
