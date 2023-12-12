import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';
import {NgModule} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';


//
@Component({
  selector: 'app-prototip',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './prototip.component.html',
  styleUrl: './prototip.component.less'
})
export class PrototipComponent{
  backgroundColor: string = 'white';
  NameMaket: string = '';
  TextOpisania: string = '';
  ContactDannie: string = '';
  ChangeColor: string = ''
  changeInputColor(color: string) {
    this.ChangeColor = color;
  }
}
