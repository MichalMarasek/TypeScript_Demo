const render = (todoItems, todoItemsContainerElement) => {
    todoItemsContainerElement.innerHTML = '';
    todoItems.forEach((todoItem, index) => {
        const todoItemElement = document.createElement('li');
        if (todoItem.category) {
            todoItemElement.classList.add(todoItem.category);
        }
        const id = `todoItem-${index}`;
        const labelElement = document.createElement('label');
        labelElement.innerHTML = todoItem.name;
        labelElement.setAttribute('for', id);
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.name = todoItem.name;
        checkboxElement.id = id;
        checkboxElement.checked = todoItem.isDone;
        checkboxElement.addEventListener('change', () => {
            todoItem.isDone = !todoItem.isDone;
        });
        todoItemElement.appendChild(labelElement);
        todoItemElement.appendChild(checkboxElement);
        todoItemsContainerElement.appendChild(todoItemElement);
    });
};
//by default render function is exported, that is why we can use different name for this function in app.ts renderTodoItems
export default render;
