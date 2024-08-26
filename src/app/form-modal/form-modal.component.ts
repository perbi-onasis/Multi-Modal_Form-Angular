import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { IUser } from './user-model.js';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css'
})
export class FormModalComponent {
  // form: FormGroup;
  currentStep = 0;
  constructor(){
    
  }

  // On Submit
  onSubmit(){

  }


}
