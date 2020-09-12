import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ToDo;
  @Output() deleteTodo: EventEmitter<ToDo> = new EventEmitter();

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
  }

  onCheckBoxToggleEevent(todo){
    console.log("Check box toggle");
    todo.completed = todo.completed;
    this.todoService.toggleCompleted(this.todo).subscribe(todo=>
      {
          console.log(todo);
      });

  }

  onDeleteButtonClicked(todo){
    this.deleteTodo.emit(todo);
  }

  //Dynamic class binding. The ng class directive will be binded with the below mentioned functioality
  setClasses(){
    let classes = {
      todo: true,
      'is-complete' : this.todo.completed
    }

    return classes;
  }

}
