import { Product } from "../models/product.model";
import { Category } from "../models/category.model";

// Objetos de transferencia de datos.
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
    categoryId: Category['id'];
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> { }

export interface FindProductDTO extends Readonly<Partial<Omit<Product, 'category'>>> {
}