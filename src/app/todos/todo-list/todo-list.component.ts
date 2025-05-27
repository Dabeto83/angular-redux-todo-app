import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todosList: Todo[] = [];
  filtro: filtrosValidos = 'Todos';
  constructor(private store: Store<AppState>) {

  }
  ngOnInit(): void {
    // this.store.select('todos').subscribe(
    //   todos => {
    //     this.todosList = todos;
    //   }
    // );

    // this.store.select('filtro').subscribe(
    //   filtro => { this.filtro = filtro }
    // );

    this.store.subscribe(({ todos, filtro }) => {
      this.todosList = todos;
      this.filtro = filtro;
    });
  }
}
