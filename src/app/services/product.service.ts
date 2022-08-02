import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDTO, FindProductDTO, UpdateProductDTO } from '../dtos/product.dto';

import { ProductServiceInterface } from '../interfaces/product.interface';

export class ProductService implements ProductServiceInterface {

    private static _instance: ProductService;

    private constructor(private _products: Product[] = []) { }

    static get instance(): ProductService {
        if (!ProductService._instance)
            ProductService._instance = new ProductService();
        return ProductService._instance;
    }

    get products(): Product[] {
        return this._products;
    }

    create(product: CreateProductDTO): Promise<Product> {
        return new Promise((resolve) => {
            const { categoryId, ...prod } = product;
            const newProduct: Product = {
                id: faker.datatype.number(),
                ...prod,
                category: {
                    id: categoryId,
                    name: faker.commerce.department(),
                    image: faker.image.imageUrl()
                },
            };
            this._products.push(newProduct);
            resolve(newProduct);
        });
    }

    // find(filters: FindProductDTO): Promise<Product[]> {
    //     return new Promise((resolve: (value: Product[]) => void, reject) => {
    //         const found = this._products.filter((product) => {
    //             return Object.keys(filters).every(key => {
    //                 const p = product as any;
    //                 const f = filters as any;
    //                 return p[key] === f[key];
    //             });
    //         });
    //         if (Boolean(found.length))
    //             resolve(found);
    //         else
    //             reject('Product not found');
    //     });
    // }

    findOne(productId: Product['id']): Promise<Product> {
        return new Promise((resolve: (value: Product) => void, reject) => {
            const found = this._products.find((product) => product.id === productId);
            if (found)
                resolve(found);
            else
                reject('Product not found');
        });
    }

    update(productId: Product['id'], changes: UpdateProductDTO): Promise<Product> {
        return new Promise((resolve, reject) => {
            const index = this._products.findIndex(product => product.id === productId);
            const previousProduct = this._products[index];
            if (index > -1) {
                this._products[index] = <Product>{
                    ...previousProduct,
                    ...changes,
                };
                resolve(this._products[index]);
            } else {
                reject('Product not found');
            }
        });
    }

    remove(productId: Product['id']): Promise<void> {
        return new Promise((resolve, reject) => {
            const index = this._products.findIndex(product => product.id === productId);
            if (index > -1) {
                this._products.splice(index, 1);
                resolve();
            } else {
                reject('Product not found');
            }
        });
    }

    getAll(): Promise<Product[]> {
        return new Promise((resolve) => {
            resolve(this._products);
        });
    }
}