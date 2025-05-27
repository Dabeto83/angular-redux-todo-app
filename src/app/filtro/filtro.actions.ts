import { createAction, props } from "@ngrx/store";

export type filtrosValidos = 'Todos' | 'Pendientes' | 'Completados'

export const setFiltro = createAction('[Fitro] Configurar Filtro', props<{ filtro: filtrosValidos }>());