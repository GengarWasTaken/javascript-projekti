const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

//create new todos

addForm.addEventListener("submit", e => {

    e.preventDefault();

    let newTodo = addForm.add.value.trim().toLowerCase();;

    if (newTodo != "") {
    
    let html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${newTodo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`

    list.innerHTML += html;

    addForm.reset();

    }

});

//delete todos

list.addEventListener("click", e => {

    if (e.target.classList.contains("delete")) {

        e.target.parentElement.remove();
    }

});

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"))

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"))

};

//search todos

search.addEventListener("keyup", () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});