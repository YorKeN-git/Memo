import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewMemoComponent } from './pages/new-memo/new-memo.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add-memo', component: NewMemoComponent},
  {path: 'statistique', component:StatistiqueComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
