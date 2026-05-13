const fAddBtn = () => {
    const text = input.value.trim()
    if (!text) return;

    tasks.push({ text, done: false })
    save();
    render();

    input.value = "";

}

function render() {
    list.innerHTML = '';

    tasks.forEach((task, i) => {
        const li = document.createElement('li');
        li.className =
            "flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-lg  ";

        li.innerHTML = `
        <div class="flex items-center gap-2 truncate">
          <input type="checkbox" ${task.done ? "checked" : ""}
                 class="w-5 h-5 "
                 onchange="toggle(${i})">
          <span class="${task.done ? "line-through text-gray-400" : ""} ">
            ${task.text}
          </span>
        </div>

        <button onclick="removeTask(${i})"
                class="text-red-500 hover:text-red-700 font-bold text-lg">
          ×
        </button>
      `;

        list.appendChild(li)

    })
}

function toggle(index) {
    tasks[index].done = !tasks[index].done;
    save();
    render();
}

function removeTask(index) {
    tasks.splice(index, 1);
    save();
    render();
}

const save = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};



