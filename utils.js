function handleAgregar() {
  const input = document.getElementById("inputTarea");
  const listToDo = document.getElementById("listToDo");
  const tarea = input.value;

  if (tarea !== "") {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center mt-2 border-0 shadow-sm rounded";

    const divInterno = document.createElement("div");
    divInterno.className = "d-flex justify-content-between align-items-center w-100";

    const span = document.createElement("span");
    span.innerText = tarea;

    const divBotones = document.createElement("div");

    const botonDone = document.createElement("button");
    botonDone.type = "button";
    botonDone.className = "btn btn-success btn-sm mr-2";
    botonDone.innerText = "Done";
    botonDone.onclick = handleDone;

    const botonDelete = document.createElement("button");
    botonDelete.type = "button";
    botonDelete.className = "btn btn-danger btn-sm";
    botonDelete.innerText = "Delete";
    botonDelete.onclick = handleDelete;

    divBotones.appendChild(botonDone);
    divBotones.appendChild(botonDelete);
    divInterno.appendChild(span);
    divInterno.appendChild(divBotones);
    li.appendChild(divInterno);
    listToDo.appendChild(li);

    input.value = "";
  }
}

function handleDone(event) {
  const li = event.target.closest("li");
  const span = li.querySelector("span");

  span.classList.toggle("completed");

  const doneButton = li.querySelector(".btn-success");
  doneButton.remove();

  const listDone = document.getElementById("listDone");
  listDone.appendChild(li);
}

function handleDelete(event) {
  const li = event.target.closest("li");
  li.remove();
}
