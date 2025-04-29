const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

// Add Task
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  if (taskInput.value.trim() === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    ${taskInput.value}
    <span class="actions">
      <button onclick="toggleComplete(this)">✔️</button>
      <button onclick="deleteTask(this)">❌</button>
    </span>
  `;

  taskList.appendChild(li);
  saveTasks();
  taskInput.value = '';
}

// Mark Task Complete
function toggleComplete(button) {
  const li = button.parentElement.parentElement;
  li.classList.toggle('completed');
  saveTasks();
}

// Delete Task
function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
  saveTasks();
}

// Save to Local Storage
function saveTasks() {
  localStorage.setItem('tasks', taskList.innerHTML);
}

// Load from Local Storage
function loadTasks() {
  taskList.innerHTML = localStorage.getItem('tasks') || '';
}
