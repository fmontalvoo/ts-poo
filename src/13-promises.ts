import axios from "axios";

(async () => {
    function delay(duration: number) {
        const promise = new Promise<boolean>((resolve) => {
            setTimeout(() => {
                console.log('*'.repeat(duration));
                resolve(true);
            }, duration);
        });
        return promise;
    }

    // console.log('Start');
    // console.time('duration');

    // const res = await delay(100);
    // console.timeLog('duration', res);

    // await delay(100);

    // console.timeEnd('duration');
    // console.log('End');

    function getData() {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products');
        return promise;
    }

    async function getDataAsync() {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        return response.data;
    }

    const res = await getData();
    // console.log(res.data);
    const rta = await getDataAsync();
    console.log(rta);
})();