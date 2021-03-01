import React, { Component } from 'react'
import { makeClothingItem } from './Api-Utils.js';

export default class Create extends Component {
    state = {
        clothing_id: 1,
        name: ' ',
        img_url: ' ',
        description: ' ',
        category_id: 1,
        size: ' ',
        price: 1
    }

    handleClothingIdChange = (e) => this.setState({ clothing_id: Number(e.target.value) })

    handleNameChange = (e) => this.setState({ name: e.target.value })

    handleURLChange = (e) => this.setState({ img_url: e.target.value })

    handleDescriptionChange = (e) => this.setState({ description: e.target.value })


    // handleCategoryChange = () => {
    //     this.setState({
    //         category:
    //             this.state.category === false
    //                 ? true : false
    //     })
    // }

    handleCategoryChange = (e) => this.setState({ category_id: Number(e.target.value) })

    handleSizeChange = (e) => this.setState({ size: e.target.value })

    handlePriceChange = (e) => this.setState({ price: Number(e.target.value) })

    handleSubmit = async (e) => {
        e.preventDefault();

        await makeClothingItem(this.state);

        this.props.history.push('/clothes');
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Inventory ID
                        <input value={this.state.clothing_id} type="number" onChange={this.handleClothingIdChange} />
                    </label>
                    <label>
                        Name of Garment
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Image
                        <input value={this.state.img_url} onChange={this.handleURLChange} />
                    </label>
                    <label>
                        Description
                        <input value={this.state.description} onChange={this.handleDescriptionChange} />
                    </label>
                    {/* <label>
                        Vintage?
                        <input value={this.state.category} type="checkbox" onChange={this.handleCategoryChange} />
                    </label> */}
                    <label>
                        <select value={this.state.category} type="number" onChange={this.handleCategoryChange}>
                            <option value={1} selected={this.state.category_id === 1}>Silk</option>
                            <option value={2} selected={this.state.category_id === 2}>Vintage Tops</option>
                            <option value={3} selected={this.state.category_id === 3}>Contemporary Tops</option>
                        </select>
                    </label>
                    <label>
                        Size
                        <input value={this.state.size} onChange={this.handleSizeChange} />
                    </label>
                    <label>
                        Price
                        <input value={this.state.price} type="number" onChange={this.handlePriceChange} />
                    </label>
                    <button>make it!</button>
                </form>
            </div>
        )
    }
}
