import { Category } from '../models/category.model';

// Objetos de transferencia de datos.
export interface CreateCategoryDTO extends Omit<Category, 'id'> {
}

export interface UpdateCategoryDTO extends Partial<CreateCategoryDTO> { }

export interface FindCategoryDTO extends Readonly<Category> {
}