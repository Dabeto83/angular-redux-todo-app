import { Actions } from './../../../../node_modules/@ngrx/store-devtools/src/reducer.d';
import { Component } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {
  constructor(private store: Store<AppState>) { }

  marcarTodos!: boolean;

  marcarDesmarcarTodos() { 
    this.marcarTodos = !this.marcarTodos;
    console.log("marcar", this.marcarTodos);
    this.store.dispatch(actions.toogleAllTodos({ estado: this.marcarTodos }));
  }

}
