import axios from 'axios';

import { Product } from "../models/product.model";
import { ProductServiceInterface } from "../interfaces/product.interface";
import { CreateProductDTO, FindProductDTO, UpdateProductDTO } from "../dtos/product.dto";

export class ProductService implements ProductServiceInterface {

    private static _instance: ProductService;

    private constructor(
        private url: string = 'https://api.escuelajs.co/api/v1/products'
    ) { }

    static get instance(): ProductService {
        if (!ProductService._instance)
            ProductService._instance = new ProductService();
        return ProductService._instance;
    }

    async create(product: CreateProductDTO): Promise<Product> {
        const { data } = await axios.post<Product>(this.url, product);
        return data;
    }

    async findOne(productId: Product['id']): Promise<Product> {
        const { data } = await axios.get<Product>(`${this.url}/${productId}`);
        return data;
    }

    async update(productId: Product['id'], changes: UpdateProductDTO): Promise<Product> {
        const { data } = await axios.put<Product>(`${this.url}/${productId}`, changes);
        return data;
    }

    async remove(productId: Product['id']): Promise<void> {
        return await axios.delete(`${this.url}/${productId}`);
    }

    async getAll(): Promise<Product[]> {
        const { data } = await axios.get<Product[]>(this.url);
        return data;
    }

}