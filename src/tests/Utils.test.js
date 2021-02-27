import { render, screen } from '@testing-library/react';
import { getCategories, getClothingItems, getClothingItem } from '../Api-Utils';



test('getClothingItems returns list of inventory', async () => {
    const expectation = [
        {
            "id": 1,
            "clothing_id": 6,
            "name": "Turquoise Embroidered Button-Down",
            "img_url": "../assets/tops/turpoise-embroidered.jpg",
            "description": "Vintage button-down with short sleeves and embroidered details.",
            "category_id": 1,
            "size": "medium",
            "price": 55,
            "owner_id": 1,
            "category": "vintage-tops"
        },
        {
            "id": 3,
            "clothing_id": 3,
            "name": "Burberry Ruffle Collared Tee",
            "img_url": "../assets/tops/burberry-black-top.jpg",
            "description": "black cotton polo with a ruffled collar",
            "category_id": 3,
            "size": "small",
            "price": 60,
            "owner_id": 1,
            "category": "tops"
        },
        {
            "id": 4,
            "clothing_id": 4,
            "name": "Beige Suede Button Down",
            "img_url": "../assets/tops/suede-button-down-top.jpg",
            "description": "beige, patterned, suede button down tee shirt with structure",
            "category_id": 3,
            "size": "small",
            "price": 30,
            "owner_id": 1,
            "category": "tops"
        },
        {
            "id": 5,
            "clothing_id": 5,
            "name": "Purple Stripe Tank",
            "img_url": "../assets/tops/purple-stripe-tank.jpg",
            "description": "lavender and mint striped spaghetti strap tank with diamond point hem",
            "category_id": 1,
            "size": "medium",
            "price": 20,
            "owner_id": 1,
            "category": "vintage-tops"
        },
        {
            "id": 6,
            "clothing_id": 6,
            "name": "Purple Embroidered Button-Down",
            "img_url": "../assets/tops/purple-embroidered.jpg",
            "description": "Vintage button-down with short sleeves and embroidered details.",
            "category_id": 1,
            "size": "medium",
            "price": 45,
            "owner_id": 1,
            "category": "vintage-tops"
        }
    ];

    const data = await getClothingItems()

    expect(data).toEqual(expectation);
});

test('returns categories', async () => {

    const expectation = [
        {
            'id': 1,
            'name': 'vintage-tops'
        },
        {
            'id': 2,
            'name': 'silk'
        },
        {
            'id': 3,
            'name': 'tops'
        }
    ];

    const data = await getCategories()

    expect(data).toEqual(expectation);
});

test.skip('returns an item of clothing with its matching id', async () => {

    const expectation = {
        id: 3,
        clothing_id: 3,
        name: 'Burberry Ruffle Collared Tee',
        img_url: '../assets/tops/burberry-black-top.jpg',
        description: 'black cotton polo with a ruffled collar',
        category_id: 3,
        size: 'small',
        price: 60,
        owner_id: 1,
        category: 'tops'
    };

    const id = 3;

    const data = await getClothingItem(id)


    expect(data).toEqual(expectation);
});

