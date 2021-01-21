// Define UI vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // DOM loaded event
    document.addEventListener('DOMContentLoaded', getTasks)
    // Add task event
    form.addEventListener('submit', addTask)
    // remove task
    taskList.addEventListener('click', removeTask)
    // clear tasks event
    clearBtn.addEventListener('click', clearTasks)
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// get tasks from local storage
function getTasks() {
    let tasks
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task) {
        // Create li element
        const li = document.createElement('li')
        li.className = 'collection-item' // we do his because of materialize, to make i t look good
        // create text node an append to li
        li.appendChild(document.createTextNode(task))
        // create a new link element
        const link = document.createElement('a')
        // add class
        link.className = 'delete-item secondary-content'
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>'
        // Append link to li
        li.appendChild(link)
    
        // Append li to ul
        taskList.appendChild(li)
    } )
}

// Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task')
    } else {
        // Create li element
        const li = document.createElement('li')
        li.className = 'collection-item' // we do his because of    materialize, to make i t look good
        // create text node an append to li
        li.appendChild(document.createTextNode(taskInput.value))
        // create a new link element
        const link = document.createElement('a')
        // add class
        link.className = 'delete-item secondary-content'
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>'
        // Append link to li
        li.appendChild(link)

        // Append li to ul
        taskList.appendChild(li)
        // store in local storage
        storeTaskInLocalStorage(taskInput.value)
        // Clear input
        taskInput.value = ''

        e.preventDefault()
    }
}

// store tasks in local storage
function storeTaskInLocalStorage(task) {
    let tasks
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure you want to destroy all of that? The universe will never be the same again.')) {    
            e.target.parentElement.parentElement.remove()

            // remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1)
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Clear tasks
function clearTasks() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }

    // Clear from local storage
    clearTasksFromLocalStorage()
}

// Clear Tasks from local storage
function clearTasksFromLocalStorage() {
    localStorage.clear()
}

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
  
    document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
  }





