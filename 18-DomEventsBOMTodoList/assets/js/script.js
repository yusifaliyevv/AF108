let todoElements = [];

function getDay() {
  let date = new Date();
  let days = ["bazar", "bazar ertesi", "cersenbe axsami", "cersenbe", "cume axsami", "cume", "senbe"];
  let months = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"];
  let currentDay = date.getDate().toString();
  let currentMonth = months[date.getMonth()];
  let weekDay = days[date.getDay()];
  return `${currentDay} ${currentMonth}, ${weekDay}`;
}

function moveToDo() {
    let list = document.querySelector("#todoList");
    let searchInputValue = document.querySelector("#searchInput").value.toLowerCase();
    list.innerHTML = "";

    todoElements.forEach((todo, num) => {
        if (todo.text.toLowerCase().includes(searchInputValue)) {
            let li = document.createElement("li");
            if (todo.done) li.classList.add("done");

            let left = document.createElement("div");
            left.className = "todo-left";

            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";
            checkbox.checked = todo.done;
            checkbox.onchange = () => toggleDone(num);

            let todoTxt = document.createElement("span");
            todoTxt.className = "todo-text";
            if (todo.done) todoTxt.classList.add("done-text");
            todoTxt.textContent = `${num + 1}. ${todo.text}`;

            let todoDate = document.createElement("span");
            todoDate.className = "todo-date";
            todoDate.textContent = todo.date;

            left.appendChild(checkbox);
            left.appendChild(todoTxt);

            let interactions = document.createElement("div");
            interactions.className = "todo-actions";

            if (!todo.done) {
                let editBtn = document.createElement("button");
                editBtn.className = "edit-btn";
                editBtn.innerHTML = `<i class="fas fa-pen"></i>`;
                editBtn.onclick = () => editToDo(num);
                interactions.appendChild(editBtn);
            }

            if (todo.done) {
                let deleteBtn = document.createElement("button");
                deleteBtn.className = "delete-btn";
                deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
                deleteBtn.onclick = () => deleteTodo(num);
                interactions.appendChild(deleteBtn);
            }     

            li.appendChild(left);
            li.appendChild(interactions);
            li.appendChild(todoDate);

            list.appendChild(li);
        }
    });
}

function addTodo() {
    let input = document.querySelector("#todoInput");
    let value = input.value;
    if (value !== "") {
        todoElements.push({ text: value, done: false, date: getDay()});
        input.value = "";
        moveToDo();
    }
}

document.querySelector("#todoInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") addTodo();
});
  

function toggleDone(num) {
    todoElements[num].done = !todoElements[num].done;
    moveToDo();
}

function editToDo(num) {
    let newTxt = prompt("taski edit'leyin", todoElements[num].text);
    if (newTxt !== "") {
        todoElements[num].text = newTxt;
        moveToDo();
    }
}

function deleteTodo(num) {
    if (confirm("bu task silinsin?")) {
        todoElements.splice(num, 1);
        moveToDo();
    }
}

function deleteAll() {
    if (confirm("butun tasklar silinsin?")) {
        todoElements = [];
        moveToDo();
    }
}