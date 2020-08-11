import { updateMarkAction } from './product.action';
import { InitialProduct } from '../main/interface/store';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: InitialProduct = {
    products: [
        { id: 1, name: 'Name', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "work", mark: true },
        { id: 2, name: 'Name2', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "leisure", mark: true },
        { id: 3, name: 'Name3', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "leisure", mark: false },
        { id: 4, name: 'Name4', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "work", mark: false },
        { id: 5, name: 'Name5', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "work", mark: false },
        { id: 6, name: 'Name6', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "work", mark: false },
        { id: 7, name: 'Name7', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "leisure", mark: false },
        { id: 8, name: 'Name8', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "work", mark: false },
        { id: 9, name: 'Name9', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "work", mark: false },
        { id: 10, name: 'Name10', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "leisure", mark: false },
        { id: 11, name: 'Name11', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "work", mark: false },
        { id: 12, name: 'Name12', url: "https://material.angular.io/assets/img/examples/shiba2.jpg", group: "personal", mark: false },
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