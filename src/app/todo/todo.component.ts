import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo';
import { TODOS } from '../mocks/mock-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = TODOS; //initializing an array called Todo and filling this array with the mock arrays.
  newTodo: Todo = new Todo();

  constructor() { }

  addTodo() { //will be kinda broken, will fix later.
    const lastIndex: number = this.todos.length-1;
    const last: Todo = this.todos[lastIndex];
    this.newTodo.id = last.id+1;
    this.newTodo.isCompleted = false;
    this.newTodo.isDeleted = false;
    this.todos.push(this.newTodo);
    this.newTodo = new Todo();

  }

  toggleCompleteTodo(todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  toggleDeleteTodo(todo) {
    todo.isDeleted = !todo.isDeleted;

  }

  renderIsCompletedText(todo) {
    return todo.isCompleted ? 'Mark Uncomplete' : 'Mark Complete';
    // if (todo.isCompleted) { return'Mark Incomplete'; }
    // return 'Mark Complete';
  }

  ngOnInit() {
    // console.log(this.todos);
  }

}
