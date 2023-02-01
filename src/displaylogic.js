import Icon from './icon.png';
import {createTodo, Todo, todoToggler} from './todologic.js';
import {Project} from './projectlogic.js';

//create a function per page 


/* console.log(JSON.stringify(project1, null, 2))
 */
/* console.log(project1.at(0).value.title);
console.log(project1) */
//Todocarddiv:
function displayTodo(project, index){
    const todoCard = document.createElement('div');
    todoCard.classList.add('todoCard');
    todoCard.innerHTML = 
    ` Title: ${project.at(index).value.title} <p> 
    Description: ${project.at(index).value.description}<p>
    Priority:${project.at(index).value.priority}<p>
    Created:${project.at(index).value.created}<p>
    Due:${project.at(index).value.due}<p>
    Completed: <input type="checkbox" class="checkboxtodo"> `

    return todoCard;
};

//ProjectcardDiv: 

//Overviewscreen div: 


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['ToDo', 'Erist'], ' ');
    element.classList.add('hello');

    const myIcon = new Image(100, 100); 
    myIcon.src = Icon;
    element.appendChild(myIcon);

    btn.innerHTML = 'New Todo';
    btn.classList.add('todobtn')
    //clicking this button will trigger the modal input form for new todo

/*     btn.onclick = createTodo("test3", "just testing", project1 );
 */ 
    element.appendChild(btn);

    return element;
  }


export {component, displayTodo}
