import { Todo } from './todo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  todos:Todo[] =[
    // new Todo('this is a test',true),
    // new Todo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, asperiores a nulla sunt minus officia ipsum debitis, non ipsa provident quis. Cumque ipsa nesciunt animi error non, soluta ut sit')
  ]

  constructor() { }

  getAllTodos(){
    return this.todos;
  }

  addTodo(todo:Todo){
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo:Todo){
    this.todos[index]=updatedTodo;
  }

  deleteTodo(index: number){
    this.todos.splice(index,1);
  }
}
