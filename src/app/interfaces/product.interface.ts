import { CreateProductDTO, FindProductDTO, UpdateProductDTO } from "../dtos/product.dto";
import { Product } from "../models/product.model";

export interface ProductServiceInterface {
    create(product: CreateProductDTO): Promise<Product> | Product;
    // find(product: FindProductDTO): Promise<Product[]>;
    findOne(productId: Product['id']): Promise<Product | undefined> | Product | undefined;
    update(productId: Product['id'], changes: UpdateProductDTO): Promise<Product> | Product;
    remove(productId: Product['id']): Promise<void> | void;
    getAll(): Promise<Product[]> | Product[];
}