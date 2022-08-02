import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from 'class-validator';

import { AccessType, Category } from '../models/category.model';

// Objetos de transferencia de datos.
export interface ICreateCategoryDTO extends Omit<Category, 'id'> {
}

export class CreateCategoryDTO implements ICreateCategoryDTO {

    @IsNotEmpty()
    @Length(2, 255)
    name!: string;

    @IsUrl()
    @IsNotEmpty()
    image!: string;

    @IsOptional()
    @IsEnum(AccessType)
    access?: AccessType;
}

export interface UpdateCategoryDTO extends Partial<ICreateCategoryDTO> { }

export interface FindCategoryDTO extends Readonly<Category> {
}

(async () => {
    try {
        const dto = new CreateCategoryDTO();
        dto.name = 'Test';
        dto.image = 'https://cdn.lorem.space/images/fashion/.cache/640x480/roland-hechanova-1eedDSknxoY-unsplash.jpg';
        await validateOrReject(dto);
    } catch (error) {
        console.error(error);
    }
})();