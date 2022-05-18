import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() todoClicked:EventEmitter<void> =new EventEmitter();
  @Output() editClicked:EventEmitter<void> =new EventEmitter();
  @Output() deleteClicked:EventEmitter<void> =new EventEmitter();

  //test:string='...';



  constructor() { }

  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.test='New Value'
    // },2500);
  }

  onTodoClicked(){
    this.todoClicked.emit();
  }

  onEditClicked(){
    this.editClicked.emit();
  }

  onDeleteClicked(){
   this.deleteClicked.emit();
  }

}
