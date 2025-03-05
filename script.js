function addTask() {
    const tasks = document.getElementById("tasks-list");
    const li = document.createElement('li');
    const counter = document.getElementById('track');
    counter.innerHTML = "List of tasks: " + tasks.children.length;
    const inputValue = document.getElementById("task").value;
    if (inputValue === "") {
        return;
    }
    document.getElementById("tasks").style.display = "inherit";
    li.innerHTML = inputValue;
    tasks.appendChild(li);
    counter.innerHTML = "List of tasks: " + tasks.children.length;
    const updateButton = document.createElement('button');
    updateButton.innerHTML = "Update";
    const span = document.createElement('span');
    li.appendChild(span);
    span.appendChild(updateButton);
    updateButton.addEventListener('click', function () {
        const inputUpdate = document.createElement('input');
        inputUpdate.type = "text";
        inputUpdate.placeholder = "update task";
        span.insertBefore(inputUpdate, deleteButton);
        const inputUpdateButton = document.createElement('button');
        inputUpdateButton.innerHTML = "Update Task";
        span.insertBefore(inputUpdateButton, deleteButton);
        updateButton.disabled = true;
        inputUpdateButton.addEventListener('click', function () {
            if (inputUpdate.value === "") {
                return;
            }
            li.firstChild.nodeValue = inputUpdate.value;
            inputUpdateButton.remove();
            inputUpdate.remove();
            updateButton.disabled = false;
        });
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    span.appendChild(deleteButton);
    deleteButton.addEventListener('click', function () {
        li.remove();
        deleteButton.remove();
        counter.innerHTML = "List of tasks: " + tasks.children.length;
        if (tasks.children.length === 0) {
            document.getElementById("tasks").style.display = "none";
        }
    });

    document.getElementById("task").value = "";
}