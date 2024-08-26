import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import  { ModalBodyComponent } from './app/modal-body/modal-body.component.ts'
import {ModalBodyComponent} from './modal-body/modal-body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
