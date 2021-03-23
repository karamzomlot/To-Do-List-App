// Define Variables:
var taskInput = document.querySelector('.task-input');
var addTask = document.querySelector('.task-add');
var noTaskMsg = document.querySelector('.no-task-msg');
var tasksList = document.querySelector('.tasks-list');
var numtasks = document.getElementsByClassName('single-task');
var numdone = document.getElementsByClassName('done-task');
var countsDiv = document.querySelector('.counts')
var numOfTasks = document.querySelector('.all-num');
var numOfDone = document.querySelector('.done-num');

// Add Task Function
addTask.onclick = function () {
    if(taskInput.value == ''){
        alert('Error, You Should Enter Task Name. Then Add The Task');
    }
    else{
        // Remove No Task Message.
        noTaskMsg.style.display = 'none';

        // Add Singel Task Box.
        var singleTask = document.createElement('li');
        singleTask.className = 'single-task';
        tasksList.appendChild(singleTask);
        // Add Done Button in Single Task.
        var doneBtn = document.createElement('button');
        doneBtn.className = 'done-btn';
        singleTask.appendChild(doneBtn);
        doneBtn.innerHTML = '<span class="not-done-icon far fa-circle"></span> <span class="done-icon far fa-check-circle"></span>';
        // Add Task Name in Single Task.
        var taskName = document.createElement('p');
        taskName.className = 'task-name';
        singleTask.appendChild(taskName);
        // Add The value in Task Name.
        var taskNameValue = document.createTextNode(taskInput.value);
        taskName.appendChild(taskNameValue);
        // Add Trash Button in Single Task.
        var trashBtn = document.createElement('button');
        trashBtn.className = 'trash-btn';
        singleTask.appendChild(trashBtn);
        trashBtn.innerHTML = '<span class="trash-icon far fa-trash-alt"></span>';

        // Remove Text in Task Input.
        taskInput.value = '';

        // Calculated The Tasks.
        countsDiv.style.display = 'block';
        numOfTasks.innerHTML = numtasks.length;
        numOfDone.innerHTML = numdone.length;
    }
}

// Delete & Done Fucntion.
document.addEventListener('click', function(e) {
    var item = e.target;
    // Delete Task
    if (item.className === 'trash-btn') {
        item.parentNode.remove();

        // Calculated The Tasks.
        numOfTasks.innerHTML = numtasks.length;
        numOfDone.innerHTML = numdone.length;

        // Show Counts Div & No Task Message.
        if(numtasks.length == 0){
            countsDiv.style.display = 'none';
            noTaskMsg.style.display = 'block';
        } 
        else if(numtasks.length > 0) {
            countsDiv.style.display = 'block';
        }

    }
    // Done Task
    else if (item.className === 'done-btn') {
        // Add Toggle Class.
        item.parentNode.classList.toggle('done-task');

        // Calculated The Tasks.
        numOfTasks.innerHTML = numtasks.length;
        numOfDone.innerHTML = numdone.length;
    }
})