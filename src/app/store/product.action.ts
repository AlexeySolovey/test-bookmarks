import { createAction, props } from '@ngrx/store'

export enum ProductActionsType {
    UPDATE_MARK = '[Product] updateMark'
}

export const updateMarkAction = createAction(
    ProductActionsType.UPDATE_MARK,
    props<{id:number, marked: boolean}>()
);
