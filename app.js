document.getElementById('task-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    const task = { title, description, status: false, dueDate };

    await addTask(task);  // Add the task to IndexedDB
    displayTasks();       // Refresh task display
});

// Display all tasks
async function displayTasks() {
    const tasks = await getTasks();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task ${task.status ? 'completed' : ''}`;

        taskDiv.innerHTML = `
            <div>
                <strong>${task.title}</strong> (Due Date: ${task.dueDate})<br/>
                ${task.description}
            </div>
            <div class="task-actions">
                <button onclick="toggleTask(${task.id})">${task.status ? 'Mark as Incomplete' : 'Mark as Complete'}</button>
                <button onclick="removeTask(${task.id})">Delete</button>
            </div>
        `;

        taskList.appendChild(taskDiv);
    });
}

// Toggle task completion status
async function toggleTask(id) {
    const tasks = await getTasks();
    const task = tasks.find(t => t.id === id);

    if (task) {
        task.status = !task.status;
        await updateTask(task);
        displayTasks();
    }
}

// Remove a task
async function removeTask(id) {
    await deleteTask(id);
    displayTasks();
}

// Initial display of tasks
displayTasks();
