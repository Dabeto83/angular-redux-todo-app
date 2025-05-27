import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../../filtro/filtro.actions';
import * as todosActions from '../../todos/todo.actions';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-footer',
  standalone: false,
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'Todos';
  filtros: actions.filtrosValidos[] = ['Todos', 'Completados', 'Pendientes'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filtro => {
    //   this.filtroActual = filtro;
    // });

    this.store.subscribe(
      state => {
        this.filtroActual = state.filtro;
        this.pendientes = state.todos.filter(x => x.completado == false).length;
      });
  }

  filtrarTodos(estado: filtrosValidos) {
    this.store.dispatch(actions.setFiltro({ filtro: estado }));
  }

  limpiarCompletados(){
    this.store.dispatch(todosActions.limpiarCompletados());
  }
}
