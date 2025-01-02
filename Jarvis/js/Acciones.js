document.addEventListener('DOMContentLoaded', () => {
    const totalPatrimony = document.getElementById('totalPatrimony');
    const totalBalance = document.getElementById('totalBalance');
    const totalIncome = document.getElementById('totalIncome');
    const totalExpenses = document.getElementById('totalExpenses');
    const totalSavings = document.getElementById('totalSavings');
    const totalInvestments = document.getElementById('totalInvestments');
    const transactionList = document.getElementById('transactionList');
    const transactionForm = document.getElementById('transactionForm');
    const categorySelect = document.getElementById('category');
    const typeSelect = document.getElementById('type');
    const clearAllBtn = document.getElementById('clearAllBtn');

    const initialBalance = 24302;
    let balance = initialBalance;
    let income = 0;
    let expenses = 0;
    let savings = 0;
    let investments = 0;
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    const categories = {
        income: ['Salario', 'Bonificación', 'Venta'],
        expense: ['Gasto obligatorio', 'Gasto necesario', 'Gasto innecesario'],
        saving: ['Cuenta de ahorros', 'Fondo de emergencia'],
        investment: ['Acciones', 'Criptomonedas', 'Bienes raíces']
    };

    const updateCategoryOptions = () => {
        const selectedType = typeSelect.value;
        categorySelect.innerHTML = '';
        categories[selectedType].forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    };

    typeSelect.addEventListener('change', updateCategoryOptions);
    updateCategoryOptions();

    const updateUI = () => {
        totalPatrimony.textContent = `$${(savings + investments + balance).toFixed(2)}`;
        totalBalance.textContent = `$${balance.toFixed(2)}`;
        totalIncome.textContent = `$${income.toFixed(2)}`;
        totalExpenses.textContent = `$${expenses.toFixed(2)}`;
        totalSavings.textContent = `$${savings.toFixed(2)}`;
        totalInvestments.textContent = `$${investments.toFixed(2)}`;
        renderTransactions();
        updateChart();
    };

    const renderTransactions = (filter = null) => {
        transactionList.innerHTML = '';
        transactions
            .filter(transaction => !filter || transaction.type === filter)
            .forEach((transaction, index) => {
                const transactionItem = document.createElement('div');
                transactionItem.classList.add('transaction-item');
                transactionItem.innerHTML = `
                    <span>${transaction.type === 'income' ? '💰 Ingreso' : transaction.type === 'expense' ? '💸 Gasto' : transaction.type === 'saving' ? '🐷 Ahorro' : '📈 Inversión'} - ${transaction.category}</span>
                    <span>${transaction.description}</span>
                    <span>$${transaction.amount.toFixed(2)}</span>
                    <button onclick="deleteTransaction(${index})"  class="btn-neon">Eliminar</button>
                `;
                transactionList.appendChild(transactionItem);
            });
    };

    const deleteTransaction = (index) => {
        const removed = transactions.splice(index, 1)[0];
        if (removed.type === 'income') {
            income -= removed.amount;
            savings -= removed.amount * 0.50;
            investments -= removed.amount * 0.30;
            balance -= removed.amount * 0.20;
        } else if (removed.type === 'expense') {
            expenses -= removed.amount;
            balance += removed.amount;
        } else if (removed.type === 'saving') {
            savings -= removed.amount;
            balance += removed.amount;
        } else if (removed.type === 'investment') {
            investments -= removed.amount;
            balance += removed.amount;
        }
        updateUI();
        saveTransactions();
    };

    window.deleteTransaction = deleteTransaction;

    const saveTransactions = () => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    };

    const setTransactionType = (type) => {
        typeSelect.value = type;
        updateCategoryOptions();
        renderTransactions(type);
    };

    document.getElementById('totalIncome').addEventListener('click', () => setTransactionType('income'));
    document.getElementById('totalExpenses').addEventListener('click', () => setTransactionType('expense'));
    document.getElementById('totalSavings').addEventListener('click', () => setTransactionType('saving'));
    document.getElementById('totalInvestments').addEventListener('click', () => setTransactionType('investment'));

    const init = () => {
        distributeInitialBalance();
        updateUI();
    };

    const distributeInitialBalance = () => {
        if (localStorage.getItem('isInitialBalanceDistributed') === 'true') return;

        const savingAmount = initialBalance * 0.50;
        const investmentAmount = initialBalance * 0.30;
        const balanceAmount = initialBalance * 0.20;

        savings += savingAmount;
        investments += investmentAmount;
        balance += balanceAmount;

        transactions.push(
            { type: 'income', category: 'Saldo Inicial', description: 'Ingreso inicial', amount: initialBalance },
            { type: 'saving', category: 'Distribución Inicial', description: '50% del saldo inicial', amount: savingAmount },
            { type: 'investment', category: 'Distribución Inicial', description: '30% del saldo inicial', amount: investmentAmount },
            { type: 'income', category: 'Balance Inicial', description: '20% del saldo inicial', amount: balanceAmount }
        );

        localStorage.setItem('isInitialBalanceDistributed', 'true');
        saveTransactions();
    };

    init();
});
