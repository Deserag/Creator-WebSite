import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {OknoRegistrtionComponent} from "./okno-registrtion/okno-registrtion.component";
import {MaketComponent} from "./maket/maket.component";
import {PrototipComponent} from "./prototip/prototip.component";
import {OcnovSiteComponent} from "./ocnov-site/ocnov-site.component";
//Подключение необходимых файлов для работы

const routes: Routes = [
  {path: '', component: OcnovSiteComponent},
  { path: 'maket', component: MaketComponent},
  {path: 'prototip', component: PrototipComponent},
  {path: 'okno-registration', component: OknoRegistrtionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
