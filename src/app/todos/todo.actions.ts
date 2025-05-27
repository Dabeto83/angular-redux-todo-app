import { createAction, props } from "@ngrx/store";

export const crearTodo = createAction('[TODO] Crear Todo', props<{ texto: string }>());
export const toogleTodo = createAction('[TODO] Toogle Todo', props<{ id: number }>());
export const editarTodo = createAction('[TODO] Editar Todo', props<{ id: number, texto: string }>());
export const borrarTodo = createAction('[TODO] Borrar Todo', props<{ id: number }>());
export const toogleAllTodos = createAction('[TODO] Marcar Desmarcar Todos', props<{ estado: boolean }>());
export const limpiarCompletados = createAction('[TODO] Limpiar Completados');