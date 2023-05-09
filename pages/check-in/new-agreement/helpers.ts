export enum AgreementCategory {
  membership = "membership",
}

export enum BillingSchedule {
  monthly = "monthly",
  yearly = "yearly",
}

export interface Agreement {
  id: string | number;
  name: string;
  category: AgreementCategory;
  created_at: Date | string;
  invoice_amount: number | string;
  agreement_value: number | string;
  billing_schedule_type: BillingSchedule;
}

// required to define defaults outside of the scope of it's context because of a bug in vue
export const defaultAgreementTableRow: Agreement = {
  id: 0,
  name: "Agreement Default",
  category: AgreementCategory.membership,
  created_at: new Date(),
  invoice_amount: 500,
  agreement_value: 600,
  billing_schedule_type: BillingSchedule.monthly,
};
