export type Order = {

    id: number,
    latitude: number,
    longitude: number,
    address: string,
    moment: string,
    status: string,
    total: number,
    products: Product[];
    }

    export type Product = {
        id: number,
        name: string,
        price: number,
        description: string,
        imageUri: string;
    
    }