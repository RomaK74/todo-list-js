window.onload = () => {
    let tasks = ['Я хочу сделать список задач'];
    let todoList = document.getElementsByTagName("ul")[0];

    const render = () => {
        while (todoList.firstChild)
            todoList.removeChild(todoList.firstChild);
        if (tasks) {
            for (let i = 0; i < tasks.length; i++) {
                todoList.innerHTML += `<li>${tasks[i]}<button class="btn-del">x</button> </li>`;
            }
        }
    }
    render();

    const handleClickAdd = () => {
        let inputText = document.getElementById('input');
        let newTask = inputText.value;
        inputText.value = '';
        if (newTask) {
            tasks.push(newTask);
        }
        render();
    }

    const handleClickRemove = (e) => {
        const btn = e.target.closest('.btn-del');
        if (btn) {
            let index = tasks.indexOf(btn.parentElement.innerText.slice(0, -1));
            if (index !== -1) {
                tasks.splice(index, 1);
            }
            render();
        }
    }

    document.querySelector('ul').onclick = (e) => handleClickRemove(e);
    document.getElementById('buttonAdd').onclick = () => handleClickAdd();

}
