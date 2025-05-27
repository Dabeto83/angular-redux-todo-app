import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos } from './filtro.actions';
import * as actions from './filtro.actions';

export const estadoInicial: filtrosValidos = 'Todos';

const _filtroReducer = createReducer<filtrosValidos>(
    estadoInicial,
    on(actions.setFiltro, (state: filtrosValidos, { filtro }) => filtro)
);

// Función final del reducer
export function filtroReducer(
    state: filtrosValidos | undefined,
    action: Action
): filtrosValidos {
    return _filtroReducer(state, action);
}