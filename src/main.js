let person = {};
person[Symbol.iterator] = function () {
    const URL = "//json placeholder.typicode.com/person";
    return {
        next: async function () {
            let random = Math.random();
            if (random > 0.7) {
                return {
                    value: undefined,
                    done: true
                };
            }
            let req = request(URL + `?r=${random}`, {
                method: 'GET',
                mode: 'cors'
            });
            let response = await fetch(req);
            let data = await response.json();
            console.log('person fetched', data);
            return {
                value: data,
                done: false
            }
        }

    }
}
