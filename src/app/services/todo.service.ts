import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDo } from '../models/ToDo';
import { Observable } from 'rxjs';

const httpOptions = {

  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })

};

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  
  
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos'; 
  constructor(private http: HttpClient) { }

  getToDoArray():Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.todosUrl);
  }

  toggleCompleted(todo:ToDo):Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
  
  addTodo(todo: ToDo) {
    const url = `${this.todosUrl}`;
    return this.http.post<ToDo>(url,todo, httpOptions);
  }
  deleteTodo(todo: ToDo) {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<ToDo>(url, httpOptions);
  }
}
