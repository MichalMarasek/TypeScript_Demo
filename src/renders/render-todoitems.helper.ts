import { TodoItemClass } from "../classes/todoitem.js";

const render = (todoItems: TodoItemClass[], todoItemsContainerElement: HTMLElement) => {
    todoItemsContainerElement.innerHTML = '';
    todoItems.forEach((todoItem, index) => {
        const todoItemElement: HTMLElement = document.createElement('li');
        
        if(todoItem.category){
            todoItemElement.classList.add(todoItem.category);
        }

        const id: string = `todoItem-${index}`;
        const labelElement: HTMLLabelElement = document.createElement('label');
        labelElement.innerHTML = todoItem.name;
        labelElement.setAttribute('for', id);
        
        const checkboxElement: HTMLInputElement = document.createElement('input');
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