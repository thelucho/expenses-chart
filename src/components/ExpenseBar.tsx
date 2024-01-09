import { Expense } from "../types/expenses"

const ExpenseBar = (props: Expense) => {
  const heightBar = parseInt(props.amount) * 208 / 1000

  return (
    <div className="w-14 flex flex-col justify-center group">
      <div className="w-14 rounded-md h-52 flex items-end">
        <div className="relative w-full bg-blue-600 group-hover:bg-cyan-500 rounded-md" style={{ height: `${heightBar}%` }}>
          <span className="absolute -top-7 left-0 right-0 transition ease-in-out opacity-0 group-hover:opacity-100">${ props.amount }</span>
        </div>
      </div>
      <div className="text-xs mt-2 text-gray-600 group-hover:text-gray-400">{ props.day }</div>
    </div>
  )
}

export default ExpenseBar