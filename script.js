function addTask() {
    const tasks = document.getElementById("tasks-list");
    const li = document.createElement('li');
    const inputValue = document.getElementById("task").value;
    li.innerHTML = inputValue;
    tasks.appendChild(li);
    const updateButton = document.createElement('button');
    updateButton.innerHTML = "Update";
    li.appendChild(updateButton);
    updateButton.addEventListener('click',function() {
        const inputUpdate = document.createElement('input');
        inputUpdate.type = "text";
        inputUpdate.placeholder = "update task";
        li.insertBefore(inputUpdate,deleteButton);
        const inputUpdateButton = document.createElement('button');
        inputUpdateButton.innerHTML = "Update Task";
        li.insertBefore(inputUpdateButton,deleteButton);
        inputUpdateButton.addEventListener('click',function() {
            li.firstChild.nodeValue = inputUpdate.value;
            inputUpdateButton.remove();
            inputUpdate.remove();
        });
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "delete";
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click',function() {
        li.remove();
        deleteButton.remove();
    });
    
    document.getElementById("task").value = "";
}