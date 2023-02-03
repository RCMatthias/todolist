import { create } from "lodash";


const Todo = ({
  title='',
  description='',
  priority='normal',
  created=Date.now(),
  due=Date.now()
}) => {
  let check = false; 

  return Object({
    get title(){return title;},
    set title(value){title = value},
    get description() {return description;},
    get priority() {return priority},
    get created() {return created},
    get due() {return due;},
    get check() {return check},
    set check(value){check = value},
    isA: 'Todo'
  })
}

//toggle check value in created obj todo 
const todoToggler = function todoToggler(todo){
  todo.check = !todo.check
};

const createTodo = function createTodo (todo, description, project){
  const newTodo = Todo({
    title: todo, 
    description: description
  })
  project.addTodo(newTodo);
};


export {Todo, todoToggler,createTodo }

//to change the checked value 
      /* todoToggler(project1.at(2).value);
        console.log(project1.at(2))
      */







/* const myTodo = Todo({
  title: "Buy groceries",
  description: "Get some grub for the week"
});
const myTodo2 = Todo({
  title: "Drink water",
  description: "Stay hydrated homies!"
}); */
/* 

const todoRouter = function todoRouter(project, todo){
  project.value.push(todo);
}; */

/* todoRouter(project1, myTodo);
todoRouter(project1, myTodo2); */

/* project1.at(3).value = myTodo; 
 */


/* console.log((project1.value))
 */
/* function Todo() {

  let done = true; 
  const toggleStatus = () => {
    done = !done ;
  };
  const create = (title, description, dueDate, priority) => {
    const todoInfo = [title, description, dueDate, priority]; 
    defaultProject.push(todoInfo);  
  }
  // manage "done" using closures 
  const getDone = () => done;
  const setDone = (newDone) => { done = newDone; };
  return { 
    create,
    toggleStatus,
    getDone,
    setDone
  }
 // TITLE GETTER
 // TITLE SETTER 
}; 
let Todo1 = Todo();
Todo1.toggleStatus();
console.log(Todo1.getDone);


let myDate = new Date();
 */



/* Todo.create('make cookies', 'make some goddang awesome cookies', myDate, 4, 'use this recipe:')
 */

//add ability to interface with the contents of the created object in todofactory


/* const changeTitle= (newTitle, cardNumber) => {
  createTodo[0].todoInfo[0] = newTitle;
};
changeTitle("test") */


//FIND WAY TO CHANGE THE OBJECT BASED ON OBJECT KEY (mapping, for loop, cf Library?)
//projects = array; todocards = objects? or also array? array of arrays? 


/* const changeDescription= () => {};
const changeDueDate= () => {};
const changePriority= () => {};
const changeNotes= () => {};

const emptyTodo = () => {};
 */
//Add new todocard to default project automatically (change this only afterwards using projectChange function)
//priority height function 
//4 = highest, 1 is lowest

/* export { todoFactory};
 */
