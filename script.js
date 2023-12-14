const item = document.querySelector('#input_list');
const todobox = document.querySelector('#to_do_box');

item.addEventListener("keyup", function (event) {
  if(item.value !=""){
  if (event.key === "Enter") {
    todolist(this.value);
    this.value = "";
  }}
});

const todolist = (itemText) => {
  const listitem = document.createElement("li");
  listitem.innerHTML = `
    <span class="text">${itemText}</span>
    <i class="fas fa-check-circle done-icon"></i>
    <i class="fas fa-edit edit-icon"></i>
    <i class="fas fa-trash-alt delete-icon"></i>
  `;

  listitem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  const deleteIcon = listitem.querySelector('.delete-icon');
  deleteIcon.addEventListener("click", () => {
    listitem.remove();
  });

  const editIcon = listitem.querySelector('.edit-icon');
  editIcon.addEventListener("click", () => {
    const newText = prompt("Edit item:", itemText);
    if (newText !== null) {
      listitem.querySelector('.text').textContent = newText;
    }
  });

  todobox.appendChild(listitem);
};
