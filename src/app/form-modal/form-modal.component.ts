import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { IUser } from './user-model.js';
import { CommonModule } from '@angular/common';
// import { NgModel } from '@angular/forms';
import {formData, PlanType, BillingCycle, AvailableAddOns} from './form-data-model.js'

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css'
})
export class FormModalComponent {

  // variables to bind form input to 
  formData: formData = {
    name: '',
    email:'',
    phoneNumber: '',
    plan: {
      type: PlanType.Advanced,
      billingCycle: BillingCycle.Monthly,
      monthlyPrice: '',
      yearlyPrice: ''
    },
    addOns: AvailableAddOns
  }

  planOptions = [
    { name: 'Arcade', type: PlanType.Arcade, monthlyPrice: 9, yearlyPrice: 90, selected: false, imagePath: '/assets/images/icon-arcade.svg' },
    { name: 'Advanced', type: PlanType.Advanced, monthlyPrice: 12, yearlyPrice: 120, selected: false, imagePath: '/assets/images/icon-advanced.svg' },
    { name: 'Pro', type: PlanType.Pro, monthlyPrice: 15, yearlyPrice: 150, selected: false, imagePath: '/assets/images/icon-pro.svg' }
  ]

  billingCycle: 'Monthly' | 'Yearly' = "Monthly";

  currentStep:number = 0;
  constructor(){
    
  }

  // On Submit
  onSubmit(){
    
  }

  nextStep(){
    if (this.currentStep < 1){
      this.currentStep++;
      // alert(`User entered ${this.formData.name}, ${this.formData.email} and ${this.formData.phoneNumber} is a ${typeof(this.formData.phoneNumber)}`)
    }
  }

  selectPlan(planType: PlanType){
    this.formData.plan.type = planType;
    this.updatePlanPrice();
  }

  updatePlanPrice(){
    // const selectedPlan = this.planOptions.find(plan => plan.type === this.formData.plan.type);
    // if (selectedPlan) {
    //   this.formData.plan.price = selectedPlan.price.toString();
    //   if (this.formData.plan.billingCycle === BillingCycle.Yearly) {
    //     this.formData.plan.price = (selectedPlan.price * 12); // Assume yearly price is 12 times the monthly price
    //   }
    // }
  }


}
