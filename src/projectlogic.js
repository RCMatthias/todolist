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
      isA: 'Project'
    };
  };


export {Project}