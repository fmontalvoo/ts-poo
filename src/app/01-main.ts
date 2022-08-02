import axios from "axios";

import { Product } from "./models/product.model";

(async () => {
    // async function getData(): Promise<Product[]> {
    //     const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    //     const data = response.data as Product[];
    //     return data;
    // }

    async function getData() {
        const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        return data;
    }

    const res = await getData();
    console.log(res.map(p => `${p.id}) ${p.title}`));
})();