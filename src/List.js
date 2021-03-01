import React, { Component } from 'react'
import { getClothingItems } from './Api-Utils.js';
import { Link } from 'react-router-dom';

export default class List extends Component {
    state = {
        clothes: []
    }

    componentDidMount = async () => {
        const clothesData = await getClothingItems();

        console.log('|| clothesData', clothesData);
        this.setState({
            clothes: clothesData
        })
    }

    render() {
        console.log(this.state.clothes);
        return (
            <div className='list'>
                { this.state.clothes.map(item => <Link to={`/clothes/${item.id}`} key={item.name}>
                    <div className='clothes-inventory'>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.size}</p>
                        <p>{item.price}</p>
                        {/* <p>{item.category
                            ? 'must be vintage'
                            : 'it can be contemporary'}</p> */}
                        <p>{item.category}</p>
                    </div>
                </Link>
                )}
            </div>

        )
    }
}
