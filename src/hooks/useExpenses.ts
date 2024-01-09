import { useState, useEffect } from "react";
import { Expense, ExpenseState } from "../types/expenses";

export const useExpenses = (): ExpenseState => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await fetch(`${import.meta.env.VITE_GSHEET_API_URL}`, {
          method: "GET"
        });
        
        const textData = await data.text();
        const expensesData = textData.split('\n').map(row => {
          const [day, amount] = row.split(',')
          return {day, amount}
        })
    
        setExpenses(expensesData);
        setLoading(false);
      } catch (error) { 
        console.log('Se produjo un error: ', error);
        setLoading(false);
      }
    }

    fetchExpenses();
  }, [])

  return { expenses, loading };
  
};