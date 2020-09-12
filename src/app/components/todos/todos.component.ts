import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoArray : ToDo[];

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.todoService.getToDoArray().subscribe(todos => {
      console.log(todos);
      this.todoArray = todos;
    });

  }

  deleteTodo(todo: ToDo){
    // Remove From UI
    this.todoArray = this.todoArray.filter(t => t.id !== todo.id); // Returning all the todos whose id does not match with the input
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: ToDo){
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todoArray.push(todo);
    })
  }

}
