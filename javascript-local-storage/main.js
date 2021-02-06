/* global uuid, todos */

var $todoForm = document.querySelector('#todo-form');
// The querySelector method of the document object is being called with one argument, a string of "#todo-form". The return value is being assigned to the variable, $todoForm.

$todoForm.addEventListener('submit', function (event) {
// The addEventListener method of the $todoForm object is being called with two arguments. The first argument is a string of "submit" and the second argument is an anonymous function definition with one parameter, event followed by an open curly braces for the function block.
  event.preventDefault();
  // The preventDefault method of the event object is being called with no argruments.
  var todo = {
  // An object literal is being assigned to the the variable, todo.
    todoId: uuid.v4(),
    // The v4 method of the uuid property is being called with no arguments and that is being assigned to the property, todoId.
    task: $todoForm.elements.task.value,
    // The value of the value property of the object stored withing the task property of the object stored within the elements property of the $todoForm object is being assigned the property, task.
    // The value of the value property of the task property of the elements property of the $todoForm object is being assigned to the property, task.
    isCompleted: false
    // The value of a boolean, false is being assigned to the property, isCompleted.
  };
  // Closing curly brace for the object literal.
  todos.push(todo);
  // The push method of the todos object is being called with one argument of the variable, todo.
  $todoList.append(renderTodo(todo));
  //
  //
  // The append method of the $todoList object is being called with one argument, a renderToDo function is being called with an arguement of the variable, todo.
  $todoForm.reset();
  // The reset method of the $todoForm object is being called with no arguments.
});
// Closing curly brace for the function definition and the closing parenthesis for the addEventListener method.

var $todoList = document.querySelector('#todo-list');
// The querySelector method of the document object is being called with one argument, a string, #todo-list and the return of the value is being assigned to the variable $todoList.

$todoList.addEventListener('change', function (event) {
// The addEventListener method of the $todoList object is being called with two arguments. The first argument is a string value, change and the second is an anonymous function definition with one parameter, event follow by an opening curly brace for the function block.
  var todoId = event.target.getAttribute('id');
  // The getAttribute method of the target property of the event object is being called with one argument, a string value, id and the return value is being assigned to the the variable, todoID.
  for (var i = 0; i < todos.length; i++) {
  // The for loop with an initialization 0 is being assigned to the variable i. The condition i is less than the length property of the todos object. The final expresion is i being incremented by 1. Opening curly brace for the code block.
    if (todos[i].todoId === todoId) {
    // If statement with the condition of the property todoId of the todos at index i is strictly equal to the variable, todoId. Follow by the opening curly brace for the if statement.
      todos[i].isCompleted = event.target.checked;
      //
      //
      // The value of the checked property of the target property of the event object is being reassigned to the isCompleted property of the todos object at index i
      break;
      // break statement
    }
    // Closing brace for the if statement
  }
  // Closing brace for the for statement
});
// Closing brace for the function definition block and closing parenthesis for the addEventListener method.

for (var i = 0; i < todos.length; i++) {
// For loop statement with the initialization 0 assigned to the variable i. The condition is i less than the length property of the todos object and the final expression is i being incremented by one. There is a opening curly braces for the code block.
  var $todo = renderTodo(todos[i]);
  // The renderTodo function is being called with one arugment, todos at index i and the return value is being assigned to the variable, $todo.
  $todoList.appendChild($todo);
  // The appendChild method of the $todoList object is being called with one argument, the variable $todo.
}
// Closing curly brace for the code block

function renderTodo(todo) {
// The function definition with the function name renderToDo with a parameter, todo followed by the open curly brace for the function code block.

  /**
   * <li class="list-group-item">
   *   <div class="form-check d-flex">
   *     <input
   *       type="checkbox"
   *       id="{todo.todoId}"
   *       class="form-check-input">
   *     <label
   *       for="{todo.todoId}"
   *       class="form-check-label flex-grow-1 ml-2">
   *       {todo.task}
   *     </label>
   *   </div>
   * </li>
   */

  var $todo = document.createElement('li');
  // The createElement method of the document object is being called with one argument, a string value of li and the return value is being assigned to the variable, $todo
  $todo.setAttribute('class', 'list-group-item');
  // The setAttribute method of the $todo object is being called with two arguments. THe first argument is a string value, class and the second argument is a string value, list-group-item.

  var $formCheck = document.createElement('div');
  // The createElement method of the document object is being called with one argument of a string value, div and the return value is being assigned to the variable, $formCheck.
  $formCheck.setAttribute('class', 'form-check d-flex');
  // The setAttribute method of the $formCheck object is being called with two arguments. The first argument is a string value, class and the second argument is a string value, flex-check d-flex.

  var $checkbox = document.createElement('input');
  // The createElement method of the document object is being called with one argument, a string value of input and the return value is being assigned to the variable $checkbox.
  $checkbox.checked = todo.isCompleted;
  // The isCompleted property of the todo object is being reassigned to the property of the $checkbox object.
  $checkbox.setAttribute('id', todo.todoId);
  // The setAttribute method of the $checkbox object is being called with two arguments. The first argument is the string value, id and the second argument is the todoId property of the todo object.
  $checkbox.setAttribute('type', 'checkbox');
  // The setAttribute method of the $checkbox object is being called with two arguments. The first argument is the string value, type and the second argument is the string value, checkbox.
  $checkbox.setAttribute('class', 'form-check-input');
  // The setAttribute method off the $checkbox object is being called with two arguments. The first argument is a string value of class and the second argument is the string value of form-check-input.

  var $label = document.createElement('label');
  // The createElement method of the document object is being called with one argument of a string value, label and the return value is being assigned to the variable $label.
  $label.setAttribute('for', todo.todoId);
  // The setAttribute method of the $label object is being called with two arguments. The first argument is a string value of for and the second argument is the todoId property of the todo object.
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');
  // The setAttribute method of the $label object is being called with two arguments. The first argument is a string value of for and the second argument is the string value of form-check-label flex-grow-1 ml-2.
  $label.textContent = todo.task;
  // The task property of the todo object is being reassigned to the textContext property of $label object.

  $todo.append($formCheck);
  // The append method of the $todo object is being called with an argument, varible $formCheck.
  $formCheck.append($checkbox, $label);
  // The append method of the $formCheck object is being called with two arguments, value of the variable $checkbox and the value of the variable $label..

  return $todo;
  // The variable $todo is being return.
}
// Closing curly brace for the function code block.
