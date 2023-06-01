import { TodoItemClass } from './classes/todoitem.js';
import { Category } from './types/types.js';
import renderTodoItems from './renders/render-todoitems.helper.js';
import { render as renderCategories } from './renders/render-categories.helper.js'; //import exportable as different name
import * as calculatorHelper from './helpers/calculator.helper.js'; //import all exports from file
console.log('app.ts file start!');
console.log('you can declare variables as numers in ts');
let size = 27;
console.log(size);
console.log('you can redeclare variable in ts, and for example use floats');
size = 27.3;
console.log(size);
console.log('you can declare variables as string in ts');
let sizeAsString = 'twenty-seven';
console.log(sizeAsString);
console.log('you cant assign number to string variable but you can convert number to string for example like this');
sizeAsString = `${size}`;
console.log(sizeAsString);
//get the html elements of the calculator
const numberInput1Element = document.querySelector('#numberInput1');
const numberInput2Element = document.querySelector('#numberInput2');
const addButtonElement = document.querySelector('#addButton');
const substractButtonElement = document.querySelector('#substractButton');
const multiplyButtonElement = document.querySelector('#multiplyButton');
const divideButtonElement = document.querySelector('#divideButton');
const addOutputElement = document.querySelector('#addOutput');
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
const todoItemNameInputElement = document.querySelector('#name');
const addTodoButtonElement = document.querySelector('#addTodoButton');
const todoItemsContainerElement = document.querySelector('.todoItems');
const categoriesContainerElement = document.querySelector('.categories');
//literal type
//you can have variable which can have assigned only some string values not any string (or any number for example)
let movie;
movie = 'seven';
movie = 'dune';
//you cant assign hobbit to the variable because only seven or dune are allowed
//movie = 'hobbit';
let selectedCategory;
const categories = [Category.OTHER, Category.WORK, Category.GYM, Category.HOBBY];
//array of objects
const todoItems = [
    new TodoItemClass('Play games', true, Category.HOBBY),
    new TodoItemClass('Ride on bike', false, Category.GYM),
    new TodoItemClass('Clean your room', false), //category is optional so we do not have to pass it in constructor, by default it is set to OTHER
];
const addTodoItem = (todoItem) => {
    todoItems.push(todoItem);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addTodoButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    const newTodoItem = new TodoItemClass(todoItemNameInputElement.value, false, selectedCategory);
    addTodoItem(newTodoItem);
    newTodoItem.logCreationDate('!!!');
    renderTodoItems(todoItems, todoItemsContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
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
