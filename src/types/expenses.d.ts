export interface Expense {
  day: string,
  amount: string
}

export interface ExpenseState {
  expenses: Expense[];
  loading: boolean;
}