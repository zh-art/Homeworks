// Define a class for TODOs
class Todo {
    constructor(title, description, nextTodoPoints) {
      this.title = title;
      this.description = description;
      this.nextTodoPoints = nextTodoPoints;
    }
  }
  
  // Create a list of TODOs
  const todoList = [
    new Todo("Task 1", "Description for Task 1", "task2"),
    new Todo("Task 2", "Description for Task 2", "task3"),
    new Todo("Task 3", "Description for Task 3", null)
  ];
  
  // Print all TODOs
  function printTodos(todoList) {
    console.log("TODO List:");
    todoList.forEach((todo, index) => {
      console.log(`Task ${index + 1}: ${todo.title}`);
      console.log(`  Description: ${todo.description}`);
      if (todo.nextTodoPoints) {
        console.log(`  Points to Next TODO: ${todo.nextTodoPoints}`);
      } else {
        console.log("  No next TODO.");
      }
      console.log(""); // Add an empty line for separation
    });
  }
  
  // Print the list of TODOs
  printTodos(todoList);
  