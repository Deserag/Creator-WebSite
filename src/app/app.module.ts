import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from "./header/header.component";
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HeaderModule} from "./header/header.module";
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDialogRef} from "@angular/material/dialog";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {MaketComponent} from "./maket/maket.component";
//подключаем необходимые ресурсы, как из файлов программы, так и из фрейморвка

const routes: Routes = [
  { path: 'editor', component: MaketComponent }
];
@NgModule({
    declarations: [
        AppComponent,
      //обьявление компонентов в проекте
    ],
    imports: [
      FormsModule,
      BrowserAnimationsModule,
      MatDialogModule,
      BrowserModule,
      AppRoutingModule,
      HeaderModule,
      NgbModule,
      MaketComponent,
      //подключение необходимых функций для работы
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
