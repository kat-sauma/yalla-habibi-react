import React, { Component } from 'react'
import { getClothingItems } from './Api-Utils.js';
import { Link } from 'react-router-dom';

export default class List extends Component {
    state = {
        clothes: []
    }

    ComponentDidMount = async () => {
        const clothes = await getClothingItems();

        console.log('|| clothes', clothes);

        this.setState({
            clothes: clothes
        })
    }

    render() {
        return (
            <div>
                { this.state.clothes.map(item => <div className='clothes-inventory'>
                    <p>{item.clothing_id}</p>
                    <p>{item.img_url}</p>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>{item.size}</p>
                    <p>{item.price}</p>
                    <p>{item.category}</p>
                </div>
                )}
            </div>

        )
    }
}
