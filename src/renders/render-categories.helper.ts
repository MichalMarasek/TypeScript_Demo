import { Category } from "../types/types.js";
import { handleCategoryChange } from "../helpers/categories.helper.js";

export const render = (categories: Category[], categoriesContainerElement: HTMLElement, inputChangeCallback: (category: Category) => void) => {
            //structure of what we render
            /*
            <li>
                <input type="radio" name="category" value="general" id="category-general">
                <label for="category-general" >general</label>
            </li>
            */
           categories.forEach((category) => {
            const categoryElement: HTMLElement = document.createElement('li');
    
            const radioInputElement: HTMLInputElement = document.createElement('input');
    
            radioInputElement.type = 'radio';
            radioInputElement.name = 'category';
            radioInputElement.value = category;
            radioInputElement.id = `category-${category}`;
            radioInputElement.addEventListener('change', () => {
                inputChangeCallback(category);
                handleCategoryChange(category);
            });
    
            const labelElement: HTMLLabelElement = document.createElement('label');
            labelElement.setAttribute('for', `category-${category}`);
            labelElement.innerHTML = category;
    
            categoryElement.appendChild(radioInputElement);
            categoryElement.appendChild(labelElement);
    
            categoriesContainerElement.appendChild(categoryElement);
            });
    };


