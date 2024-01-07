import { useState, useEffect } from "react";
import { getExpenses } from "../api/gsheetData";
import ExpenseBar from "./ExpenseBar";

type expensesProps = {
  day: string;
  amount: string;
};

const Dashboard = () => {
  const [expenses, setExpenses] = useState<expensesProps[]>([]);

  useEffect(() => {
    getExpenses().then(res => {
      setExpenses(res)
    })
  }, [expenses]);

  return (
    <div className="h-lvh flex flex-col justify-center items-center">
      <h1 className="mb-16 text-4xl font-bold text-gray-400">
      💰 Expenses Chart 💰
      </h1>
      <div className="flex gap-2 justify-center">
        {expenses.map((value) => {
          return (
            <ExpenseBar day={value.day} amount={value.amount} key={value.day} />
          );
        })}
      </div>
      <p className="text-sm text-gray-500 mt-16 italic">* This data is fetched from a Google Sheet</p>
      <p className="text-xs text-gray-600 mt-3">React ・ Typescript ・ Tailwind ・ Vite</p>
    </div>
  )

}

export default Dashboard