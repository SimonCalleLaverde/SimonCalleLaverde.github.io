//---------------------------------TODO LIST JAVASCRIPT | ORIGINAL (UN-MINIFIED)----------------------------------//

//-------------------------------SELECTORS-------------------------------//

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoUl = document.querySelector("ul.todo-ul");
const filterSelect = document.querySelector("select.filter-todo");

//-------------------------------EVENT LISTENERS-------------------------------//

todoButton.addEventListener("click", addTodo);
todoUl.addEventListener("click", deleteAndCheck);
filterSelect.addEventListener("change", filterTodo);//onchange//click
document.addEventListener("DOMContentLoaded", getTodosForUI);

//-------------------------------FUNCTIONS-------------------------------//

// Creating To-Do Div With Elements Inside
function addTodo(event) {
	// console.log("Coffee Shop");
	// alert("Coffee?");

	// Prevent Form From Submitting
	event.preventDefault();

	// Create Div.Todo-Div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo-div");

	// Create Li.Todo-Item
	const todoLi = document.createElement("li");
	todoLi.classList.add("todo-item");
	todoLi.innerText = todoInput.value;//"hey"//Printing Todo-Input Value To List
	todoDiv.appendChild(todoLi);//Append Each Li.Todo-Item Within Div.Todo-Div

	// Saving Todo To Local Storage (Before Setting Value To Nothing). Runs Bottom Function, Passing Each New Todo
	saveLocalStorage(todoInput.value);

	// Clear Todo-Input Value After Submitting A Todo
	todoInput.value = "";

	// Create Button.Btn-Complete
	const completedButton = document.createElement("button");
	completedButton.classList.add("btn-complete");
	completedButton.innerHTML = "<i class='fas fa-check' aria-hidden='true'></i>";
	todoDiv.appendChild(completedButton);//Append Each Button.Btn-Complete Within Div.Todo-Div

	// Create Button.Btn-Trash
	const trashButton = document.createElement("button");
	trashButton.classList.add("btn-trash");
	trashButton.innerHTML = "<i class='fas fa-trash' aria-hidden='true'></i>";
	todoDiv.appendChild(trashButton);//Append Each Button.Btn-Trash Within Div.Todo-Div

	// Append Div.Todo-Div Within Ul.Todo-Ul
	todoUl.appendChild(todoDiv);
};

// Listen To What We Are Clicking On Within UL Where Event Listener Is. Delete & Check Its Parent
function deleteAndCheck(event) {
	//console.log(event.target);
	const item = event.target;

	// Delete Todo
	if (item.classList.contains("btn-trash")) {//To check support of "contains()"//item.classList[0] === "btn-trash"
		const todo = item.parentElement;

		// Add Animation Class
		todo.classList.add("fall");

		// Removing From Local Storage Too
		removeLocalStorageTodo(todo);

		// Add Special Event Listener That Waits And Only Executes After The Transition Ends
		todo.addEventListener("transitionend", function() {
			todo.remove();
		});
	}

	// Check Mark
	if (item.classList.contains("btn-complete")) {//To check support of "contains()"//item.classList[0] === "btn-complete"
		item.parentElement.classList.toggle("done");//completed
	}
};

// Filter Todos
function filterTodo(e) {
	const allTodos = todoUl.childNodes;//Nodelist//Get The UL Childs (So The Div.Todo-Div(s)) In An Array
	//console.log(allTodos);
	//console.log(e.target.value);

	allTodos.forEach(todo => {
		if (todo.nodeType === Node.ELEMENT_NODE) {//As Per A Youtube Comment, Good Addition If <ul></ul> Has Comments Or A Space Inside

			switch (e.target.value) {
				case "all":
					todo.style.display = "flex";
					break;
				case "completed":
					if (todo.classList.contains("done")) {//completed
						todo.style.display = "flex";
					}
					else {
						todo.style.display = "none";
					}
					break;
				case "uncompleted":
					if (!todo.classList.contains("done")) {//Doesn't Contain//completed
						todo.style.display = "flex";
					}
					else {
						todo.style.display = "none";
					}
			};

		};
	});
};

// Check If I Already Have A "todosArray" In Local Storage
const checkGetLocalStorage = () => {
	//let todosLocalStorage;
	if (localStorage.getItem("todosArray") !== null) {
		return JSON.parse(localStorage.getItem("todosArray"));//Parse it back into an array
	}
	//else {
		return [];//Just really needed in 1 f, when pushing to array & saving to local storage
	//}
};

// Save To Local Storage (Close Up Browser And Still Have Our Todos)
function saveLocalStorage(todo) {
	// Check If I Already Have A "todosArray" In Local Storage
	const todosLocalStorage = checkGetLocalStorage();

	// Then We Will Push The New Todo To Any Of The Previous Arrays (The Existing Todo Array Or The New Array)
	todosLocalStorage.push(todo);

	// Then We Save The Final Array Back To Local Storage
	localStorage.setItem("todosArray", JSON.stringify(todosLocalStorage));
};

// // Clear Local Storage (After Re-loading)
// localStorage.clear();

// Fixing UI Updating To Array In Local Storage
function getTodosForUI() {
	// Check If I Already Have A "todosArray" In Local Storage
	const todosLocalStorage = checkGetLocalStorage();

	// Loop Over The Todos ("todosLocalStorage")
	todosLocalStorage.forEach(todo => {
		// RE-CREATE THE WHOLE UI ABOVE
		// Create Div.Todo-Div
		const todoDiv = document.createElement("div");
		todoDiv.classList.add("todo-div");

		// Create Li.Todo-Item
		const todoLi = document.createElement("li");
		todoLi.classList.add("todo-item");
		todoLi.innerText = todo;//todoInput.value//Printing Todo In Local Storage To List
		todoDiv.appendChild(todoLi);//Append Each Li.Todo-Item Within Div.Todo-Div

		// Create Button.Btn-Complete
		const completedButton = document.createElement("button");
		completedButton.classList.add("btn-complete");
		completedButton.innerHTML = "<i class='fas fa-check' aria-hidden='true'></i>";
		todoDiv.appendChild(completedButton);//Append Each Button.Btn-Complete Within Div.Todo-Div

		// Create Button.Btn-Trash
		const trashButton = document.createElement("button");
		trashButton.classList.add("btn-trash");
		trashButton.innerHTML = "<i class='fas fa-trash' aria-hidden='true'></i>";
		todoDiv.appendChild(trashButton);//Append Each Button.Btn-Trash Within Div.Todo-Div

		// Append Div.Todo-Div Within Ul.Todo-Ul
		todoUl.appendChild(todoDiv);
	});
};

// Remove Todo From Local Storage When Pressing Its "Delete" Button
function removeLocalStorageTodo(todo){
	// Check If I Already Have A "todosArray" In Local Storage
	const todosLocalStorage = checkGetLocalStorage();

	// Splice Method
	//console.log(todo.children[0].innerText);
	//console.log(todosLocalStorage.indexOf("Apple"));

	// Navigate All The Way Inside To Reach The Text
	const todoInnerText = todo.children[0].innerText;//Gives us the value inside the clicked/removed todo

	// Gets The Index Of The "innerText"
	const todoIndex = todosLocalStorage.indexOf(todoInnerText);//indexOf("Apple"));
	//console.log(todoIndex);

	// Remove The Index Item From The Array, Of The Element We Click The Delete Button On
	// Using The Splice Method: From What Position & How Many Do We Want To Remove (Remembering JS Basic Course: Second Argument Is How Many From That Position)
	// First Arg Is Index, Second Arg Is # To RemoveFrom There, Then Items Can Be Added To The Array As 3th, 4th, Etc Arg
	todosLocalStorage.splice(todoIndex, 1);

	// Setting Back New Array To Local Storage
	localStorage.setItem("todosArray", JSON.stringify(todosLocalStorage));
};