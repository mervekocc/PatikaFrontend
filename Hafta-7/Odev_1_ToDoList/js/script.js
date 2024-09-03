document.addEventListener("DOMContentLoaded", () => {

  function todoList() {
    const todoInput = document.getElementById("task");
    const todoText = todoInput.value.trim(); 
    const addList = document.createElement("button");

    if (todoText === "") {
      $(".toast.error").toast("show");
      return;
    }

    const li = document.createElement("li");
    li.textContent = todoText;

    addList.textContent = "X"; 
    addList.classList.add("close");
    addList.onclick = () => {
      li.remove();
    };

    li.appendChild(addList);
    document.getElementById("list").appendChild(li);
    $('.toast.success').toast('show');
    todoInput.value = "";
  }


   document.getElementById('task').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        todoList();
    }
});
 
  document.getElementById("liveToastBtn").onclick = todoList;
 
});
