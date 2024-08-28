export interface formData{
    name: String,
    email: String,
    phoneNumber: number,
    plan: Plan;
    addOns: AddOn[];
}

export interface Plan{
    type: PlanType;
    billingCycle: BillingCycle;
}

export enum PlanType{
    Archade = 'Archade',
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