import axios from "axios";

import { Product } from "../models/product.model";

import { BaseHttpService } from "./base.http.service";

export class ProductHttpService extends BaseHttpService<Product> {
    constructor() {
        super('products');
    }

    async findOne(productId: Product['id']): Promise<Product> {
        const { data } = await axios.get<Product>(`${this.url}/${productId}`);
        return data;
    }
}

const phs = new ProductHttpService();

phs.getAll().then(products => console.log('Products:', products.length));

phs.update(30, { title: 'Other name' })
    .then(product => console.log('Product:', product));

phs.findOne(30).then(product => console.log('Product:', product)); 