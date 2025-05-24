// filepath: c:\Users\maste\Desktop\new_repo\skript.js
// Створення БД
const db = new Dexie("BankDB");
db.version(1).stores({
  users: "++id, name, email, password"
});

// Додавання користувача
function addUser(name, email, password) {
  db.users.add({ name, email, password });
}

// Отримати всіх користувачів
async function getAllUsers() {
  const users = await db.users.toArray();
  console.log(users);
}



getAllUsers()



function showModal() {
	document.getElementById("modal").style.display = "block";
	document.getElementById("overlay").style.display = "block";
}

function closeModal() {
	document.getElementById("modal").style.display = "none";
	document.getElementById("overlay").style.display = "none";
}

function openMainWindow() {
	window.location.href = "main2.html"; // Перехід у тому ж вікні
}

function sendMoney() {
	let amount = prompt("Введіть суму для пересилання:");
	if (amount && !isNaN(amount) && amount > 0) {
		updateBalance(-amount);
		addTransaction("Переслано " + amount + "₴");
	}
}

function spendMoney() {
	let amount = prompt("Введіть суму для витрат:");
	if (amount && !isNaN(amount) && amount > 0) {
		updateBalance(-amount);
		addTransaction("Витрачено " + amount + "$");
	}
}

function updateBalance(amount) {
	let balanceElement = document.getElementById("balance");
	let currentBalance = parseInt(balanceElement.innerText);
	balanceElement.innerText = currentBalance + parseInt(amount) + "₴";
}

function addTransaction(text) {
	let transactionContainer = document.getElementById("transactions");
	let newTransaction = document.createElement("p");
	newTransaction.innerText = text;
	transactionContainer.appendChild(newTransaction);
}

