/* 
    Below is an array of objects representing expenses and refunds. 
    Positive amounts are expenses, negative amounts are refunds. 
    
    We want to find out how much money was spent in 2023. 
*/

const expensesAndRefunds = [
    { description: 'Groceries', amount: 50, year: 2023 },
    { description: 'Electronics', amount: -30, year: 2023 },
    { description: 'Dinner', amount: 40, year: 2023 },
    { description: 'Clothing', amount: 60, year: 2023 },
    { description: 'Entertainment', amount: 25, year: 2023 },
    { description: 'Rent', amount: -500, year: 2024 },
    { description: 'Utilities', amount: 100, year: 2024 },
    { description: 'Books', amount: 20, year: 2024 },
    { description: 'Fitness', amount: 30, year: 2024 },
    { description: 'Gifts', amount: 15, year: 2024 },
]

let totalSpent = 0
const cutoffDate = 2024


console.log(`Total amount spent on items in 2023: $${totalSpent}`)