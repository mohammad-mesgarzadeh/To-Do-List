const input = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const list = document.getElementById('taskList')

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
render();

addBtn.addEventListener('click', () => {
    fAddBtn()
})

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        fAddBtn();
    }
});

addEventListener('keydown', (event) => {
    if (event.key === 'Delete') {
        removeTask()
    }
});