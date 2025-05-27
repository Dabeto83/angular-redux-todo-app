import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo',
  standalone: false
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case 'Completados':
        return todos.filter(x => x.completado);
      case 'Pendientes':
        return todos.filter(x => !x.completado);
      default:
        return todos;
    }
  }
}
