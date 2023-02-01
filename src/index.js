import _ from 'lodash';
import './style.css';
import {createTodo, Todo, todoToggler} from './todologic.js';
import {Project } from './projectlogic.js';
import {component, displayTodo} from './displaylogic.js';


document.body.appendChild(component()); 


let project1 = Project(); 
createTodo("test1", "Eat soup", project1 );
createTodo("test2", "Drink water", project1 );
createTodo("test3", "Make love", project1 );

document.body.appendChild(displayTodo(project1, 0 )); 
document.body.appendChild(displayTodo(project1, 1 )); 



////////////  TODO ///////////////



//start creating separate module for controlling 
//(import its functionality into the buttons in view mode but create all dynamically in DOM!)

//import date-fns

//localstorage (make sure doesnt crash if data isn't in localstorage (preventdefault?),; use JSON (cant store funcs in this!)




