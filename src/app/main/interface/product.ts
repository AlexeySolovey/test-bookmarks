export interface Product {
    id: number;
    name: string;
    url: string;
    group: string;
    mark: boolean;
}
export interface ProductTypes {
    work: Product[];
    leisure: Product[];
    personal: Product[];
}