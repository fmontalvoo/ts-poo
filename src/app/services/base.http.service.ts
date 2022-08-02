import axios from 'axios';

import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { UpdateProductDTO } from '../dtos/product.dto';
import { UpdateCategoryDTO } from '../dtos/category.dto';

export class BaseHttpService<T> {
    data: T[] = [];

    private baseurl: string = 'https://api.escuelajs.co/api/v1';
    protected url: string = '';

    constructor(private path: string) {
        this.url = `${this.baseurl}/${this.path}`;
    }

    async getAll() {
        const { data } = await axios.get<T[]>(this.url);
        return data;
    }

    async update<I, U>(id: I, changes: U): Promise<T> {
        const { data } = await axios.put<T>(`${this.url}/${id}`, changes);
        return data;
    }

    // getAll():T|Promise<T[]> {
    //     return this.data;
    // }
}

// const bhs1 = new BaseHttpService<number>();
// bhs1.data = [1, 2, 3];
// console.log(bhs1.getAll());

// const bhs2 = new BaseHttpService<string>();
// bhs2.data = ['a', 'b', 'c'];
// console.log(bhs2.getAll());



// const ps = new BaseHttpService<Product>('products');

// ps.getAll().then(products => console.log('Products:', products.length));

// ps.update<Product['id'], UpdateProductDTO>(30, { title: 'New name' })
//     .then(product => console.log('Product:', product));


// const cs = new BaseHttpService<Category>('categories');

// cs.getAll().then(categories => console.log('Categories:', categories.length));

// cs.update<Category['id'], UpdateCategoryDTO>(5, { name: 'Others' })
//     .then(category => console.log('Category:', category));