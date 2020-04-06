import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomeComponent } from './pages/home/home.component';
import { VerticalToolsComponent } from './components/vertical-tools/vertical-tools.component';
import { AddMemoComponent } from './components/add-memo/add-memo.component';
import { NewMemoComponent } from './pages/new-memo/new-memo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MesMemosComponent } from './components/mes-memos/mes-memos.component';
import { LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StatistiqueComponent } from './components/statistique/statistique.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    HomeComponent,
    VerticalToolsComponent,
    AddMemoComponent,
    NewMemoComponent,
    MesMemosComponent,
    StatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule


  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
