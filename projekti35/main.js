const addForm = document.querySelector(".add");

const list = document.querySelector(".todos");

const search = document.querySelector(".search input");

const sortingByAZ = document.querySelector(".sort-by-az");

const sortingByLength = document.querySelector(".sort-by-length");

//create new todos
addForm.addEventListener("submit", e => {

    e.preventDefault();

    let newTodo = addForm.add.value.trim().toLowerCase();

    if (newTodo != "") {
    
    let html = `<li class="list-group-item d-flex justify-content-between align-items-center"><span>${newTodo}</span><i class="far fa-trash-alt delete"></i></li>`

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

//filter todos
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

//sort todos by A-Z
function sortByAlpha() {

    return Array.from(list.children)
        .sort(function (a, b) {

            var nameA = a.textContent.toUpperCase();

            var nameB = b.textContent.toUpperCase();

            if (nameA < nameB) {

                return -1;
            }
            if (nameA > nameB) {

                return 1;
            }

            return 0;

        });
} 

//sort todos by Z-A
const sortByZalpha = () => {

    return Array.from(list.children)
    .sort(function(a, b) {

        var nameA = a.textContent.toUpperCase();

        var nameB = b.textContent.toUpperCase();

        if (nameA < nameB) {

          return 1;
        }
        if (nameA > nameB) {

          return -1;
        }
 
        return 0;

      });
};

//update list by A-Z Sort
sortingByAZ.addEventListener("click", e => {
    
    if(!list.classList.contains("a-z")) {

    list.classList.add("a-z");
    let sortedElems = sortByAlpha();
 
    list.innerHTML = '';
     
    for (let i = 0; i < sortedElems.length; i++) {

        list.appendChild(sortedElems[i]);

    }

}   else {

    list.classList.remove("a-z");

    let sortedElems = sortByZalpha();
 
    list.innerHTML = '';
     
    for (let i = 0; i < sortedElems.length; i++) {

        list.appendChild(sortedElems[i]);

    }

}

});

//sort by length
function sortByLength() {

    return Array.from(list.children)
        .sort(function (a, b) {

            var nameA = a.textContent.length;

            var nameB = b.textContent.length;

            if (nameA < nameB) {

                return -1;
            }
            if (nameA > nameB) {

                return 1;
            }

            return 0;

        });
}

//sort by shorth
function sortByShorth() {

    return Array.from(list.children)
        .sort(function (a, b) {

            var nameA = a.textContent.length;

            var nameB = b.textContent.length;

            if (nameA < nameB) {

                return 1;
            }
            if (nameA > nameB) {

                return -1;
            }

            return 0;

        });
}

//update list by Length - Shorth
sortingByLength.addEventListener("click", e => {

    if(!list.classList.contains("length")) {

    list.classList.add("length");
    
    let sortedElems = sortByLength();
 
    list.innerHTML = '';
     
    for (let i = 0; i < sortedElems.length; i++) {

        list.appendChild(sortedElems[i]);

    }

}   else {

    list.classList.remove("length");

    let sortedElems = sortByShorth();
 
    list.innerHTML = '';
     
    for (let i = 0; i < sortedElems.length; i++) {

        list.appendChild(sortedElems[i]);

    }

}

});
