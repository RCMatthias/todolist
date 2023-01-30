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



// create a todo card function factory 
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
const myTodo = Todo({
  title: "Buy groceries",
  description: "Get some grub for the week"
});
//toggle check value in created obj todo 
myTodo.check = !myTodo.check;
console.log(JSON.stringify(myTodo, null, 2))

//when we create a todo; automatically add it to the project
//try to add a todo to the above project


project1.at(3).value = myTodo; 
console.log(project1.value)

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


//split into modules:
// todologic, projectlogic, projectmanager logic, displaylogic, css as needed beetje basic vormgeven reeds met grid? 

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
