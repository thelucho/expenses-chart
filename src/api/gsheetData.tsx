export const getExpenses = async () => {
  const data = await fetch(`${import.meta.env.VITE_GSHEET_API_URL}`, {
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

  return expensesData;
};