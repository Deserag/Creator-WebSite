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
  size_web: string ="";


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
      this.NameMaket = worksheet['B3'].v;
      console.log(this.NameMaket);
      //console.log("Подключение произошло")
    };

    xhr.send();
  }

  downloadExcelFile() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'assets/prototip.xlsx', true);
        xhr.responseType = 'blob'; // Используем тип 'blob' для получения файла в виде Blob

        xhr.onload = () => {
            const url = window.URL.createObjectURL(xhr.response);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'prototip.xlsx'; // Указываем имя файла для загрузки
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        };

        xhr.send();
    }

    replaceExcelFile(event: any) {
        const file = event.target.files[0];
        if (file) {
            if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                const reader = new FileReader();
                reader.onload = (e: any) => {
                    const data = e.target.result;
                    fetch('assets/prototip.xlsx')
                        .then(response => {
                            if (response.ok) {
                                console.log('Файл успешно загружен и заменен');
                            } else {
                                console.error('Произошла ошибка при загрузке файла');
                            }
                        })
                        .catch(error => {
                            console.error('Произошла ошибка при отправке файла на сервер', error);
                        });
                };
                reader.readAsArrayBuffer(file);
            } else {
                console.error('Выбранный файл не является файлом Excel');
            }
        }
    }


    changeInputColor_dannie(color: string) {
    this.ChangeColor_dannie = color;
  }
  Change_Size_Web(size:string){
    this.size_web = size;
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
