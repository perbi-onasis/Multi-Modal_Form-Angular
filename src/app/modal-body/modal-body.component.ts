import { Component } from '@angular/core';
import { ModalTrackerComponent } from '../modal-tracker/modal-tracker.component'
import {FormModalComponent} from '../form-modal/form-modal.component'
@Component({
  selector: 'app-modal-body',
  standalone: true,
  imports: [ModalTrackerComponent, FormModalComponent],
  templateUrl: './modal-body.component.html',
  styleUrl: './modal-body.component.css'
})
export class ModalBodyComponent {

}
