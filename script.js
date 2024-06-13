document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById("todo-form");
  const todoList = document.getElementById("todo-list");

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = document.getElementById("todo-input").value;
    addTodo(text);
    inputElement.value ='';


  });

  /**
   * Adds a new value to the to do list based on the passed in str
   * @param {string} str this is the string value that should
   */
  function addTodo(str) {
    const li = document.createElement("li");
    li.textContent = str;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => {
      todoList.removeChild(li);
    });
    
    li.appendChild(removeButton);
    todoList.appendChild(li);
  }
})