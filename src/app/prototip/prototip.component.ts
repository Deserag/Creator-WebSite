import {Component, OnInit} from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-prototip',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './prototip.component.html',
  styleUrls: ['./prototip.component.less']
})
export class PrototipComponent implements OnInit{
  backgroundColor: string = 'white';
  NameMaket: string = '';
  TextOpisania: string = '';
  ContactDannie: string = '';
  ChangeColor_osnov: string = '';
  ChangeColor_dannie: string = '';
  ChangeColor_geo_location: string = '';
  ChangeColor_form: string = '';
  ChangeColor_compation: string = '';


  constructor() { }

  ngOnInit() {
    this.readExcelFile();
  }
  readExcelFile() {
    //console.log("Подключение произошло")
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/prototip.xlsx', true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = () => {
      const data = new Uint8Array(xhr.response);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets["data"];
      this.NameMaket = worksheet['B2'].v;
      console.log(this.NameMaket);
      //console.log("Подключение произошло")
    };

    xhr.send();
  }

  changeInputColor(color: string) {
    this.ChangeColor_osnov = color;
  }

  changeInputColor_dannie(color: string) {
    this.ChangeColor_dannie = color;
  }

  changeInputColor_geo_location(color: string) {
    this.ChangeColor_geo_location = color;
  }
  changeInputColor_form(color: string) {
    this.ChangeColor_form = color;
  }
  changeInputColor_companion(color: string) {
    this.ChangeColor_compation = color;
  }
  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
