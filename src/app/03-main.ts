import { ProductService } from './services/product.http.service';

(async () => {
    const ps = ProductService.instance;

    try {
        console.log(`${'-'.repeat(50)}[Get all products]${'-'.repeat(50)}`);

        const products = await ps.getAll();
        console.log(products.length);


        console.log(products.map(p => p.price));

        console.log(`${'-'.repeat(50)}[Update product]${'-'.repeat(50)}`);

        const productId = products[products.length / 2].id;
        const updated = await ps.update(productId, {
            title: 'Nuevo titulo',
            price: 100,
            description: 'Nueva descripcion',
        });

        console.log(updated);

        console.log(`${'-'.repeat(50)}[Get product by id]${'-'.repeat(50)}`);

        const product = await ps.findOne(productId);
        console.log(product);
    } catch (error) {
        console.error(error);
    }
})();
