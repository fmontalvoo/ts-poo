import { faker } from '@faker-js/faker';
import { CreateProductDTO } from './dtos/product.dto';

import { ProductService } from './services/product.service';

const ps = ProductService.instance;

for (let i = 0; i < 10; i++) {
    ps.create(<CreateProductDTO>{
        title: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        description: faker.lorem.paragraph(),
        categoryId: faker.datatype.number(),
        images: [faker.image.imageUrl()]
    });
}

const products = ps.products;
// console.log(products);
const product = products[0];
console.log(product);

console.log('-'.repeat(100));

ps.findOne(product.id)
    .then(found => {
        console.log(found);

        found.title = faker.commerce.productName();
        found.price = Number(faker.commerce.price());
        found.description = faker.commerce.productDescription();

        ps.update(found.id, { ...found })
            .then(updated => {
                console.log('#'.repeat(100));
                console.info('Updated:', updated);
            })
            .catch(err => {
                console.error(err);
            });

    })
    .catch(err => console.error(err));


const last = products[products.length - 1];

ps.remove(last.id)
    .then(() => {
        console.log('='.repeat(100));
        console.log('Product removed');
    })
    .catch(err => console.error(err));
