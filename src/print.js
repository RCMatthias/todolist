function printMe() {
    console.log('I get called from print.js!');

  } 


// create a todo card factory here
const todoFactory = (title, description, dueDate, priority, notes) => {

  const showTodo = () => console.log('testing todo!');
  return { title, description, dueDate, priority, notes}
}

let myDate = new Date();
const todo1 = todoFactory('make cookies', 'make some goddang awesome cookies', 'XXX', 4, 'use this recipe:')
console.log(todo1)

//priority height function 
//4 = highest, 1 is lowest

/* export { todoFactory};
 */
