import React from "react";
import ExpenseBar from "./ExpenseBar";
import { useExpenses } from "../hooks/useExpenses";
import SkeletonBar from "./SkeletonBar";

const Dashboard: React.FC = () => {
  const { expenses, loading } = useExpenses();

  return (
    <div className="h-lvh flex flex-col justify-center items-center">
      <h1 className="mb-16 text-4xl font-bold text-gray-400">
      💰 Expenses Chart 💰
      </h1>
      
      <div className="flex gap-2 justify-center">
        {loading && [1,2,3,4,5,6,7].map((n) => <SkeletonBar key={n}/>)}
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