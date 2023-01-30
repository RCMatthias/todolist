/* function printMe() {
    console.log('I get called from print.js!');

  } 
 */
const Project = function Project(){
  let defaultProject = [];

  const addTodo = (todo) => defaultProject.push(todo);
  const deleteTodo = (todoId) => {};
  
  const at = (index) => ({
    get value(){return defaultProject[index]},
    set value(val){defaultProject[index] = val;}
  });
  const reset = () => defaultProject.fill("");

  return {
    at,
    get value(){return [...defaultProject]},
    addTodo,
    deleteTodo,
  };
};
let project1 = Project(); 

project1.at(0).value = ["drink", "water"];
project1.at(1).value = ["sleep", "at least 8 hours"];
project1.at(2).value = ["eat", "eat some delicious strawberries"];

console.log(project1.value)


// create a todo card function factory 
const Todo = function Todo(title, description, priority, dueDate) {

  let done = false; 
  const toggleStatus = () => done = !done;
   const create = (title, description, dueDate, priority, notes) => {
    const todoInfo = [title, description, dueDate, priority, notes]; 
    defaultProject.push(todoInfo);  
  }
  return {
    title, 
    description,
    priority,
    dueDate, 
    toggleStatus,
  }
 // TITLE GETTER
 // TITLE SETTER 
}; 

let myDate = new Date();
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
