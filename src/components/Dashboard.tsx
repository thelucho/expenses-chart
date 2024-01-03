import { useState, useEffect } from "react";

type expensesProps = {
  day: string;
  amount: string;
};

const Dashboard = () => {
  const [expenses, setExpenses] = useState<expensesProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSlGapB5abKJ9G6HgbpjUAwuOM05PfpGWoOFFPqC4bkDiZWhRtX19wQ7m3N8gK0exXbGrVFXRW0hAjr/pub?gid=0&single=true&output=csv", {
        method: "GET"
      });
      const textData = await data.text();
      const expensesData = textData.split('\n').map(row => {
        const [day, amount] = row.split(',')

        return {
          day,
          amount
        }
      })

      setExpenses(expensesData);
    };

    api();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-orange-400">
        Expenses Chart
      </h1>
      <div>
        {expenses.map((value) => {
          return (
            <div key={value.day}>
              <div>{value.day}</div>
              <div>{value.amount}</div>
            </div>
          );
        })}
      </div>
    </>
  )

}

export default Dashboard