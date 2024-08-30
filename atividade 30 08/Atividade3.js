document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            createTaskElement(task.text, task.completed);
        });
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task').forEach(taskElement => {
            tasks.push({
                text: taskElement.querySelector('.task-text').textContent,
                completed: taskElement.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function createTaskElement(text, completed = false) {
        const li = document.createElement('li');
        li.className = `task ${completed ? 'completed' : ''}`;

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = text;

        const completeButton = document.createElement('button');
        completeButton.className = 'complete-button';
        completeButton.textContent = 'Concluir';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });

        li.appendChild(span);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            createTaskElement(taskText);
            taskInput.value = '';
            saveTasks();
        }
    });

    loadTasks();
});