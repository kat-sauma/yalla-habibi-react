import request from 'superagent';

const URL = 'https://yalla-habibi.herokuapp.com';
export async function getClothingItems() {
    const response = await request.get(`${URL}/clothes`);

    return response.body;
}
export async function getCategories() {
    const { body } = await request.get(`${URL}/categories`);

    return body;
}
export async function getClothingItem(id) {
    const { body } = await request.get(`{URL}/clothes/${id}`);

    return body;
}
export async function makeClothingItem(itemOfClothing) {
    const { body } = await request
        .post(`${URL}/clothes`)
        .send(itemOfClothing);

    return body;
}
export async function deleteItem(id) {
    const { body } = await request
        .delete(`{URL}/clothes/${id}`);

    return body;
}
export async function updateItem(id, itemOfClothing) {
    const { body } = await request
        .put(`${URL}/clothes/${id}`)
        .send(itemOfClothing);

    return body;
}

export const getCategoryId = (candy, categories) => categories.find(category => candy.category === category.name).id;