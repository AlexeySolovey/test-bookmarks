import { Product } from './product';

export interface State {
    productsStore: InitialProduct;
}

export interface InitialProduct {
    products: Product[]
}