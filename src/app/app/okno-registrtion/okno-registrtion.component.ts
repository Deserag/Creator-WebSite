import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-okno-registrtion',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './okno-registrtion.component.html',
  styleUrl: './okno-registrtion.component.css'
})
export class OknoRegistrtionComponent {
  login: string = '';
  password: string = '';
}
