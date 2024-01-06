type ExpenseBarProps = {
  day: string,
  amount: string
}

const ExpenseBar = (props: ExpenseBarProps) => {
  const heightBar = parseInt(props.amount)*208/1000

  return (
    <div className="w-14 flex flex-col justify-center">
      <div className="w-14 rounded-md h-52 flex items-end">
        <div className="w-full bg-blue-600 rounded-md" style={{ height: `${heightBar}%` }}>
          <span>${ props.amount }</span>
        </div>
      </div>
      <div className="text-xs mt-2 text-gray-600">{ props.day }</div>
    </div>
  )
}

export default ExpenseBar