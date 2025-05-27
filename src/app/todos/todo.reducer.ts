import { Action, createReducer, on } from "@ngrx/store";
import * as actions from './todo.actions'
import { Todo } from "./models/todo.model";

export const estadoInicial: Todo[] = [
    new Todo("Completar el curso de ngrx"),
    new Todo("Vencer a Thanos"),
    new Todo("Comprar traje de Ironman"),
    new Todo("Robar escudo del Capitán América.")
];

const _todoReducer = createReducer(estadoInicial,
    on(actions.crearTodo, (state, { texto }) => [...state, new Todo(texto)]),
    on(actions.toogleTodo, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            }
            return todo;
        });
    }),
    on(actions.editarTodo, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            }
            return todo;
        });
    }),
    on(actions.borrarTodo, (state, { id }) => {
        return state.filter(x => x.id !== id);
    }),
    on(actions.toogleAllTodos, (state, { estado }) => {
        return state.map(todo => {
            return {
                ...todo,
                completado: estado
            }
        })
    }),
    on(actions.limpiarCompletados, (state) => {
        return state.filter(x => !x.completado);
    }),
);

export function todoReducer(state: Todo[] | undefined, action: Action<string>) {
    return _todoReducer(state, action);
}