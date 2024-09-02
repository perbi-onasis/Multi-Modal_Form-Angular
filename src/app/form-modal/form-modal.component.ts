import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { IUser } from './user-model.js';
import { CommonModule } from '@angular/common';
// import { NgModel } from '@angular/forms';
import {formData, PlanType, BillingCycle, AddOn} from './form-data-model.js'

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
      type: PlanType.Arcade,
      billingCycle: BillingCycle.Monthly,
      monthlyPrice: '',
      yearlyPrice: ''
    },
    addOns: {
      name: '',
      price: '',
      desc: '',
      selected: false
    }
  }

  planOptions = [
    { name: 'Arcade', type: PlanType.Arcade, monthlyPrice: 9, yearlyPrice: 90, selected: false, imagePath: '/assets/images/icon-arcade.svg' },
    { name: 'Advanced', type: PlanType.Advanced, monthlyPrice: 12, yearlyPrice: 120, selected: false, imagePath: '/assets/images/icon-advanced.svg' },
    { name: 'Pro', type: PlanType.Pro, monthlyPrice: 15, yearlyPrice: 150, selected: false, imagePath: '/assets/images/icon-pro.svg' }
  ]

  AvailableAddOns = [
    { name: 'Online Service', desc: 'Access to multiplayer games', price: '1', selected: true},
    { name: 'Larger Storage', desc: 'Extra 1TB of cloud save', price: '2', selected: true},
    { name: 'Customizable Profile', desc: 'Custom theme on your profile', price: '2', selected: true}
  ]

  

billingCycle: 'Monthly' | 'Yearly' = 'Monthly';

  currentStep:number = 0;
  totalSteps:number = 5;

  constructor(){
    
  }

  // On Submit
  onSubmit(){
    
  }

  nextStep(){
    if (this.currentStep < this.totalSteps){
      this.currentStep++;
    }
  }
  previousStep(){
    if (this.currentStep > 0){
      this.currentStep--;
    }
  }

  selectPlan(planType: PlanType){
    this.formData.plan.type = planType;
    this.updatePlanPrice();
  }

  isYearly: boolean = false;

  toggleBillingCycle(){
    // this.isYearly = !this.isYearly;

    // if(this.isYearly){
    //   this.formData.plan.billingCycle = BillingCycle.Yearly;
    //   // this.isYearly = true
    // }else{
    //   this.formData.plan.billingCycle = BillingCycle.Monthly
    //   // this.isYearly = false
    // }

    this.isYearly = !this.isYearly;
    // this.formData.plan.type = this.isYearly ? BillingCycle.Yearly : BillingCycle.Monthly;
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


  // Add-Ons
  toggleAddOnSelection(addOn: any){
    addOn.selected = !addOn.selected
  }


}
