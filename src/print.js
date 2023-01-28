/* function printMe() {
    console.log('I get called from print.js!');

  } 
 */
let defaultProject = [];

// create a todo card MODULE
const todoCard = (() => {
 
  const createTodo = (title, description, dueDate, priority, notes) => defaultProject.push({ title, description, dueDate, priority, notes});
  console.log(defaultProject);
  
  const changeTitle= () => {};
  //FIND WAY TO CHANGE THE OBJECT BASED ON OBJECT KEY (mapping, for loop, cf Library?)
  //projects = array; todocards = objects? or also array? array of arrays? 
  const changeDescription= () => {};
  const changeDueDate= () => {};
  const changePriority= () => {};
  const changeNotes= () => {};

  const emptyTodo = () => {};
  return {
    createTodo,
    
   }
})(); 

let myDate = new Date();
todoCard.createTodo('make cookies', 'make some goddang awesome cookies', myDate, 4, 'use this recipe:')
todoCard.createTodo('make love', 'make some goddang awesome cookies', myDate, 4, 'use this recipe:')


//add ability to interface with the contents of the created object in todofactory

//Add new todocard to default project automatically (change this only afterwards using projectChange function)
//priority height function 
//4 = highest, 1 is lowest

/* export { todoFactory};
 */
