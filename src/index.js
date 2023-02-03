import './style.css';
import {createTodo, Todo, todoToggler} from './todologic.js';
import {Project } from './projectlogic.js';
import {grid, displayTodo} from './displaylogic.js';


document.body.appendChild(grid()); 


let project1 = Project(); 
createTodo("test1", "Eat soup", project1 );
createTodo("test2", "Drink water", project1 );
createTodo("test3", "Make love", project1 );

/* grid.appendChild(displayTodo(project1, 0 )); 
 *//* document.body.appendChild(displayTodo(project1, 1 )); 
 */

function addTodoGrid (todonumber) {
  const parentDiv = document.querySelector('.grid-container');
  const childDiv = displayTodo(project1, todonumber);
  parentDiv.appendChild(childDiv); 
}
addTodoGrid(0);
addTodoGrid(1);
addTodoGrid(2);


////////////  TODO ///////////////

//add a header div over the current hello div 

//start creating separate module for controlling 
//(import its functionality into the buttons in view mode but create all dynamically in DOM!)

//import date-fns

//localstorage (make sure doesnt crash if data isn't in localstorage (preventdefault?),; use JSON (cant store funcs in this!)




