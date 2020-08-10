import { updateMarkAction } from './product.action';
import { InitialProduct } from '../main/interface/store';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: InitialProduct = {
    products: [
        { id: 1, name: 'Name', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "work", mark: true },
        { id: 2, name: 'Name2', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "work", mark: true },
        { id: 3, name: 'Name3', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "work", mark: false },
    ]
}

const productReducer = createReducer(
    initialState,
    on(updateMarkAction, (state, { id, marked }) => {
        let _products = state.products.map(item => {
            if (item.id === id) return { ...item, mark: marked }
            return item;
        });
        return {...state, products: _products}
    })
);

export function reducer(state = initialState, action: Action) {
    return productReducer(state, action);
}