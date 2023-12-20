import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports:[HeaderComponent]
})
export class HeaderModule{}
