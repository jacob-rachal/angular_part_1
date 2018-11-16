import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo';
//day 4
import { TodoInterface } from '../interfaces/todo-interface';
import { TODOS } from '../mocks/mock-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: TodoInterface[] = TODOS; //initializing an array called Todo and filling this array with the mock arrays.
  newTodo: TodoInterface = new Todo();

  constructor() { }

  addTodo() { //will be kinda broken, will fix later.
    const lastIndex: number = this.todos.length-1;
    const last: TodoInterface = this.todos[lastIndex];
    this.newTodo.id = last.id+1;
    // this.newTodo.isCompleted = false;
    // this.newTodo.isDeleted = false;
    // this.todos.push(this.newTodo);
    // this.newTodo = new Todo();
    if (this.newTodo.name !== '') { //checking for a string with a positive length
      if (this.newTodo.name.trim().length >= 1){ //chaeking to make sure spacebar isn't getting spammed.
        this.todos.push(this.newTodo);
        this.newTodo = new Todo();
      }
    }

  }

  toggleCompleteTodo(todo: TodoInterface) {
    todo.isCompleted = !todo.isCompleted;
  }

  toggleDeleteTodo(todo: TodoInterface) {
    todo.isDeleted = !todo.isDeleted;

  }

  //perma-delete
  deleteTodo(todo: TodoInterface) {
      const remove: number = this.todos.indexOf(todo);
      if(remove !== -1) {
        this.todos.splice(remove, 1);
      }
  }

  renderIsCompletedText(todo: TodoInterface) {
    return todo.isCompleted ? 'Mark Uncomplete' : 'Mark Complete';
    // if (todo.isCompleted) { return'Mark Incomplete'; }
    // return 'Mark Complete';
  }

  renderTags(tags): String {
    return tags.join(', ');
  }

  ngOnInit() {
    // console.log(this.todos);
  }

}
