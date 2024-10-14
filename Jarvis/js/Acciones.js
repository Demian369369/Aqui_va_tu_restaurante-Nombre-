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

    const initialBalance = 16589;  
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

    const renderTransactions = () => {
        transactionList.innerHTML = '';
        transactions.forEach((transaction, index) => {
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

    transactionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const type = typeSelect.value;
        const category = categorySelect.value;
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (isNaN(amount) || amount <= 0) {
            alert('Por favor, ingresa una cantidad válida.');
            return;
        }

        let transaction = { type, category, description, amount };

        if (type === 'income') {
            income += amount;
            const savingAmount = amount * 0.50;
            const investmentAmount = amount * 0.30;
            const balanceAmount = amount * 0.20;

            savings += savingAmount;
            investments += investmentAmount;
            balance += balanceAmount;

            transactions.push({
                type: 'income',
                category,
                description,
                amount
            });
            transactions.push({
                type: 'saving',
                category: 'Distribución Automática',
                description: `50% de ingreso ${description}`,
                amount: savingAmount
            });
            transactions.push({
                type: 'investment',
                category: 'Distribución Automática',
                description: `30% de ingreso ${description}`,
                amount: investmentAmount
            });
            transactions.push({
                type: 'income',
                category: 'Balance',
                description: `20% de ingreso ${description}`,
                amount: balanceAmount
            });
        } else if (type === 'expense') {
            expenses += amount;
            balance -= amount;
            transactions.push(transaction);
        } else if (type === 'saving') {
            savings += amount;
            balance -= amount;
            transactions.push(transaction);
        } else if (type === 'investment') {
            investments += amount;
            balance -= amount;
            transactions.push(transaction);
        }

        updateUI();
        saveTransactions();
        transactionForm.reset();
        updateCategoryOptions();
    });

    clearAllBtn.addEventListener('click', () => {
        if (!confirm('¿Estás seguro de que deseas eliminar todas las transacciones?')) return;
        transactions = [];
        income = 0;
        expenses = 0;
        savings = 0;
        investments = 0;
        balance = initialBalance;  
        distributeInitialBalance();
        updateUI();
        saveTransactions();
    });

    let isInitialBalanceDistributed = localStorage.getItem('isInitialBalanceDistributed') === 'true';

const distributeInitialBalance = () => {
    if (isInitialBalanceDistributed) return; 

    const savingAmount = initialBalance * 0.50;
    const investmentAmount = initialBalance * 0.30;
    const balanceAmount = initialBalance * 0.20;

    savings += savingAmount;
    investments += investmentAmount;
    balance += balanceAmount;

    transactions.push({
        type: 'income',
        category: 'Saldo Inicial',
        description: 'Ingreso inicial distribuido automáticamente',
        amount: initialBalance
    });
    transactions.push({
        type: 'saving',
        category: 'Distribución Inicial',
        description: '50% del saldo inicial',
        amount: savingAmount
    });
    transactions.push({
        type: 'investment',
        category: 'Distribución Inicial',
        description: '30% del saldo inicial',
        amount: investmentAmount
    });
    transactions.push({
        type: 'income',
        category: 'Balance Inicial',
        description: '20% del saldo inicial',
        amount: balanceAmount
    });

    isInitialBalanceDistributed = true;
    localStorage.setItem('isInitialBalanceDistributed', 'true'); 
    updateUI();
    saveTransactions();
};

    const loadTransactions = () => {
        if (transactions.length === 0) {
            distributeInitialBalance();
            saveTransactions();
        } else {
            transactions.forEach(transaction => {
                if (transaction.type === 'income') {
                    income += transaction.amount;
                } else if (transaction.type === 'expense') {
                    expenses += transaction.amount;
                    balance -= transaction.amount;
                } else if (transaction.type === 'saving') {
                    savings += transaction.amount;
                    balance -= transaction.amount;
                } else if (transaction.type === 'investment') {
                    investments += transaction.amount;
                    balance -= transaction.amount;
                }
            });
        }
    };

    let expenseChart;

    const setupExpenseChart = () => {
        const ctx = document.getElementById('expenseChart').getContext('2d');
        expenseChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Ahorros', 'Inversiones', 'Gastos', 'Balance Disponible'],
                datasets: [{
                    data: [savings, investments, expenses, balance],
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.8)',    
                        'rgba(255, 165, 0, 0.8)', 
                        'rgba(255, 0, 0, 0.8)',    
                        'rgba(0, 0, 255, 0.8)'    
                    ],
                    borderColor: [
                        'rgba(0, 255, 0, 1)',
                        'rgba(255, 165, 0, 1)',
                        'rgba(255, 0, 0, 1)',
                        'rgba(0, 0, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: {
                                size: 14
                            },
                            color: '#ffffff'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed !== null) {
                                    label += new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(context.parsed);
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    };

    const updateChart = () => {
        if (expenseChart) {
            expenseChart.data.datasets[0].data = [savings, investments, expenses, balance];
            expenseChart.update();
        }
    };

    const coinGeckoAPI = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,mxn';

    const updateRates = async () => {
        try {
            const response = await fetch(coinGeckoAPI);
            const data = await response.json();
            const usdToMxnRate = data.bitcoin.mxn / data.bitcoin.usd;
            document.getElementById('usdmxn').textContent = usdToMxnRate.toFixed(2);
            const btcToUsdRate = data.bitcoin.usd;
            document.getElementById('btcusd').textContent = btcToUsdRate.toFixed(2);
        } catch (error) {
            console.error('Error al obtener las tasas de cambio:', error);
            document.getElementById('usdmxn').textContent = 'Error';
            document.getElementById('btcusd').textContent = 'Error';
        }
    };

    updateRates();
    setInterval(updateRates, 60000); 

    const checkForIncome = () => {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const lastIncomeDate = localStorage.getItem('lastIncomeDate');
    
        if ((day === 15 || day === 30) && lastIncomeDate !== currentDate.toDateString()) {
            const recurringIncome = 3000;
            distributeIncome(recurringIncome, 'Ingreso Recurrente');
            alert('Se ha añadido un ingreso recurrente de $3000');
    
            localStorage.setItem('lastIncomeDate', currentDate.toDateString());
        }
    };

    const distributeIncome = (amount, description = 'Distribución Automática') => {
        let transactionDescription = description;
        if (description === 'Distribución Automática') {
            transactionDescription = 'Distribución Automática';
        }

        income += amount;
        const savingAmount = amount * 0.50;
        const investmentAmount = amount * 0.30;
        const balanceAmount = amount * 0.20;

        savings += savingAmount;
        investments += investmentAmount;
        balance += balanceAmount;

        transactions.push({
            type: 'income',
            category: 'Ingreso Recurrente',
            description: transactionDescription,
            amount: amount
        });
        transactions.push({
            type: 'saving',
            category: 'Distribución Automática',
            description: `50% de ingreso recurrente (${transactionDescription})`,
            amount: savingAmount
        });
        transactions.push({
            type: 'investment',
            category: 'Distribución Automática',
            description: `30% de ingreso recurrente (${transactionDescription})`,
            amount: investmentAmount
        });
        transactions.push({
            type: 'income',
            category: 'Balance Recurrente',
            description: `20% de ingreso recurrente (${transactionDescription})`,
            amount: balanceAmount
        });

        updateUI();
        saveTransactions();
    };

    setInterval(checkForIncome, 86400000); 

    const init = () => {
        loadTransactions();
        setupExpenseChart();
        updateUI();
        updateChart();
    };

    init();
});

