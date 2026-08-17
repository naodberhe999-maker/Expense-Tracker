// EXPENSE TRACKER APPLICATION

//STEP 1: Create HTML using JavaScript

document.body.innerHTML = `
    <div class="expense-container">

        <h1 id="title">Expense Tracker</h1>

        <div class="total-box">
            <p>Total Spent</p>
            <h2 id="total">$0.00</h2>
        </div>

        <div class="input-area">

            <input
                type="text"
                id="expense-name"
                placeholder="Expense name (e.g. Lunch)"
            >

            <input
                type="number"
                id="expense-amount"
                placeholder="Amount (e.g. 25)"
            >

            <button id="add-btn">Add Expense</button>

        </div>

        <ul id="expense-list"></ul>

    </div>
`;


// STEP 2: CSS

document.head.insertAdjacentHTML("beforeend", `
    <style>

        body {
            font-family: Arial, sans-serif;
            background-color: #f1f4f8;
            margin: 0;
            padding: 40px 20px;
        }

        .expense-container {
            width: 450px;
            max-width: 90%;
            margin: auto;
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.10);
        }

        #title {
            text-align: center;
            color: #17617a;
            margin-bottom: 25px;
        }

        .total-box {
            background-color: #e5f3f8;
            text-align: center;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .total-box p {
            margin: 0;
            color: #555;
            font-size: 16px;
        }

        #total {
            margin: 5px 0 0;
            color: #17617a;
            font-size: 32px;
        }

        .input-area {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .input-area input {
            padding: 12px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }

        .input-area input:focus {
            outline: none;
            border-color: #17617a;
        }

        #add-btn {
            padding: 12px;
            background-color: #17617a;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }

        #add-btn:hover {
            background-color: #124e63;
        }

        #expense-list {
            padding: 0;
            margin-top: 25px;
        }

        #expense-list li {
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f5f8fa;
            padding: 12px;
            margin-bottom: 10px;
            border: 1px solid #e0e5e8;
            border-radius: 6px;
        }

        .expense-info {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .expense-name {
            font-size: 17px;
            color: #333;
        }

        .expense-amount {
            font-size: 18px;
            font-weight: bold;
            color: #17617a;
        }

        .delete-btn {
            background-color: #dc3545;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
        }

        .delete-btn:hover {
            background-color: #b02a37;
        }

    </style>
`);


// STEP 3: Get Elements


let nameInput = document.getElementById("expense-name");

let amountInput = document.getElementById("expense-amount");

let addButton = document.getElementById("add-btn");

let expenseList = document.getElementById("expense-list");

let total = document.getElementById("total");



// STEP 4: Total Amount


let totalAmount = 0;



// STEP 5: Add Expense


addButton.addEventListener("click", function() {

    // Get expense name
    let expenseName = nameInput.value.trim();

    // Get expense amount
    let expenseAmount = Number(amountInput.value);


    // Check if input is valid
    if (expenseName && expenseAmount > 0) {

        // Create list item
        let listItem = document.createElement("li");


        // Create expense information
        let expenseInfo = document.createElement("div");

        expenseInfo.className = "expense-info";


        // Create expense name
        let nameText = document.createElement("span");

        nameText.className = "expense-name";

        nameText.textContent = expenseName;


        // Create expense amount
        let amountText = document.createElement("span");

        amountText.className = "expense-amount";

        amountText.textContent = "$" + expenseAmount.toFixed(2);


        // Add name and amount
        expenseInfo.append(nameText, amountText);


        // Create delete button
        let deleteButton = document.createElement("button");

        deleteButton.className = "delete-btn";

        deleteButton.textContent = "Delete";


        // Add expense to list
        listItem.append(expenseInfo, deleteButton);

        expenseList.append(listItem);


        // Add amount to total
        totalAmount = totalAmount + expenseAmount;


        // Display total
        total.textContent = "$" + totalAmount.toFixed(2);


        // Delete expense
        deleteButton.addEventListener("click", function() {

            totalAmount = totalAmount - expenseAmount;

            total.textContent = "$" + totalAmount.toFixed(2);

            listItem.remove();

        });


        // Clear inputs
        nameInput.value = "";

        amountInput.value = "";

    }

});