import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
  
export class TodoListService {
  private list: Todo[] = []
  seeds = ['Hit the gym', 'Pay bills', 'Meet George', 'Buy eggs', 'Read a book']
  

  constructor() {
    this.seeds.map((item) => {
      this.list.push(new Todo(item))
    })
  }
  

  getList(): Todo[] {
    return this.list;
  }

  add(title: string): void {
    if (title || title.trim()) {
      this.list.push(new Todo(title));
    }
  }

  remove(index: number): void {
  this.list.splice(index, 1);
  }

}
