export interface formData{
    name: String,
    email: String,
    phoneNumber: String,
    plan: Plan;
    addOns: AddOn[];
}

export interface Plan{
    type: PlanType;
    billingCycle: BillingCycle;
    monthlyPrice: String;
    yearlyPrice: String
}

export enum PlanType{
    Arcade = 'Arcade',
    Advanced = 'Advanced',
    Pro = 'Pro'
}

export enum BillingCycle{
    Monthly = 'Monthly',
    Yearly = 'Yearly'
}

export interface AddOn{
    name: string,
    price: number;
    selected: boolean
}

export const AvailableAddOns: AddOn[] = [
    { name: 'Online Service', price: 10, selected: false },
    { name: 'Larger Storage', price: 20, selected: false },
    { name: 'Customizable Profile', price: 15, selected: false }
]