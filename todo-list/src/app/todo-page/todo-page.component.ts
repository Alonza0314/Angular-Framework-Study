import { Component } from '@angular/core';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  addTodo() {
    if (this.newTodoTitle.trim().length === 0) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: this.newTodoTitle,
      completed: false
    };

    this.todos.push(newTodo);
    this.newTodoTitle = '';
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
