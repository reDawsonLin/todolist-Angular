import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  addTask(todo: string) {
    const todoThing = todo.trim()
    if (!todoThing) {
      return;
    }
    this.todoListService.add(todoThing)
  }

  addTodo(event: KeyboardEvent): void {
    const todoThing = event.target as HTMLInputElement;
    const todo = todoThing.value.trim()
    
    if (!todoThing) {
      return;
    }

    if (event.key === 'Enter') {
      this.todoListService.add(todo)
      todoThing.value = ''
    }
    
  }

  getList(): Todo[] {
    let list: Todo[] = [];
    list = this.todoListService.getList()
  return list;
  }

  remove(index: number): void {
  this.todoListService.remove(index);
  }

}

