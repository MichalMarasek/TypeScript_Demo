import { TodoItemClass } from './classes/todoitem.js';
import { Category } from './types/types.js';
import renderTodoItems from './renders/render-todoitems.helper.js';
import { render as renderCategories} from './renders/render-categories.helper.js'; //import exportable as different name
import * as calculatorHelper from './helpers/calculator.helper.js';//import all exports from file

console.log('app.ts file start!');

console.log('you can declare variables as numers in ts');
let size: number = 27;
console.log(size);

console.log('you can redeclare variable in ts, and for example use floats');
size = 27.3;
console.log(size);

console.log('you can declare variables as string in ts');
let sizeAsString: string = 'twenty-seven';
console.log(sizeAsString);

console.log('you cant assign number to string variable but you can convert number to string for example like this');
sizeAsString = `${size}`
console.log(sizeAsString);



//get the html elements of the calculator
const numberInput1Element: HTMLInputElement = document.querySelector('#numberInput1');
const numberInput2Element: HTMLInputElement = document.querySelector('#numberInput2');
const addButtonElement: HTMLButtonElement = document.querySelector('#addButton');
const substractButtonElement: HTMLButtonElement = document.querySelector('#substractButton');
const multiplyButtonElement: HTMLButtonElement = document.querySelector('#multiplyButton');
const divideButtonElement: HTMLButtonElement = document.querySelector('#divideButton');
const addOutputElement: HTMLInputElement = document.querySelector('#addOutput');

//add event listeners to the calculatorsa buttons
addButtonElement.addEventListener('click', () => {
    const result = calculatorHelper.addFunction(Number(numberInput1Element.value), Number(numberInput2Element.value));
    console.log(result);
    addOutputElement.value = result.toString();
});

substractButtonElement.addEventListener('click', () => {
    const result = calculatorHelper.substractFunction(Number(numberInput1Element.value), Number(numberInput2Element.value));
    console.log(result);
    addOutputElement.value = result.toString();
});

multiplyButtonElement.addEventListener('click', () => {
    const result = calculatorHelper.multiplyFunction(Number(numberInput1Element.value), Number(numberInput2Element.value));
    console.log(result);
    addOutputElement.value = result.toString();
});

divideButtonElement.addEventListener('click', () => {
    const result = calculatorHelper.divideFunction(Number(numberInput1Element.value), Number(numberInput2Element.value));
    console.log(result);
    addOutputElement.value = result.toString();
});


const todoItemNameInputElement: HTMLInputElement = document.querySelector('#name');
const addTodoButtonElement: HTMLButtonElement = document.querySelector('#addTodoButton');
const todoItemsContainerElement: HTMLElement = document.querySelector('.todoItems');
const categoriesContainerElement: HTMLElement = document.querySelector('.categories');



//literal type
//you can have variable which can have assigned only some string values not any string (or any number for example)
let movie: 'seven' | 'dune';
movie = 'seven';
movie = 'dune';
//you cant assign hobbit to the variable because only seven or dune are allowed
//movie = 'hobbit';


let selectedCategory: Category;



//for example, we can create a new type which can be a string or number
type NumberOrString = string | number;





const categories: Category[] = [Category.OTHER, Category.WORK, Category.GYM, Category.HOBBY];

//array of objects

const todoItems: TodoItemClass[] = [
    new TodoItemClass('Play games', true, Category.HOBBY),
    new TodoItemClass('Ride on bike', false, Category.GYM),
    new TodoItemClass('Clean your room', false),//category is optional so we do not have to pass it in constructor, by default it is set to OTHER
];





const addTodoItem = (todoItem: TodoItemClass) => {
    todoItems.push(todoItem);
}

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
};

addTodoButtonElement.addEventListener('click', (event: Event) => {
    
    
    event.preventDefault();
    const newTodoItem: TodoItemClass = new TodoItemClass(todoItemNameInputElement.value, false, selectedCategory);
    addTodoItem(newTodoItem);
    newTodoItem.logCreationDate('!!!');
    renderTodoItems(todoItems, todoItemsContainerElement);
});


renderCategories(categories, 
    categoriesContainerElement, 
    updateSelectedCategory
    );
    renderTodoItems(todoItems, todoItemsContainerElement);

//we can create class instance
const todoItemClassInstance = new TodoItemClass('Todo item from class instance', false);
//log it to the console
console.log(todoItemClassInstance);
//use one of this class methods
todoItemClassInstance.logCreationDate('succesfully created');
//add new item to the array of objects
addTodoItem(todoItemClassInstance);
//and render it
renderTodoItems(todoItems, todoItemsContainerElement);
