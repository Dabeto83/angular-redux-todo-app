import { crearTodo } from './../todo.actions';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;

  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  chkCompletado!: FormControl;
  txtInput!: FormControl;
  public editando: boolean = false;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.todo = { ...this.todo };
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor => {
      console.log(valor);
      this.store.dispatch(actions.toogleTodo({ id: this.todo.id }));
    });
  }

  editar(): void {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion(): void {
    this.editando = false;
    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) { return };
    this.store.dispatch(actions.editarTodo({ id: this.todo.id, texto: this.txtInput.value }));

  }

  borrarTodo(): void {
    this.store.dispatch(actions.borrarTodo({ id: this.todo.id }));
  }

}
