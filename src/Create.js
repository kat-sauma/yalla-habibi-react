import React, { Component } from 'react'
import { makeClothingItem } from './Api-Utils.js';

export default class Create extends Component {
    state = {
        name: '',
        description: '',
        size: '',
        price: 1,
        // category: false,
        category: 1
    }

    handleNameChange = (e) => this.setState({ name: e.target.value })

    handleDescriptionChange = (e) => this.setState({ description: e.target.value })

    handleSizeChange = (e) => this.setState({ size: e.target.value })

    handlePriceChange = (e) => this.setState({ price: Number(e.target.value) })

    // handleCategoryChange = () => {
    //     this.setState({
    //         category:
    //             this.state.category === false
    //                 ? true : false
    //     })
    // }

    handleCategoryChange = (e) => this.setState({ category: Number(e.target.value) })

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
                        Name of Garment
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Description
                        <input value={this.state.description} onChange={this.handleDescriptionChange} />
                    </label>
                    <label>
                        Size
                        <input value={this.state.size} onChange={this.handleSizeChange} />
                    </label>
                    <label>
                        Price
                        <input value={this.state.price} type="number" onChange={this.handlePriceChange} />
                    </label>
                    {/* <label>
                        Vintage?
                        <input value={this.state.category} type="checkbox" onChange={this.handleCategoryChange} />
                    </label> */}
                    <label>
                        <select value={this.state.category} type="number" onChange={this.handleCategoryChange}>
                            <option value="1">Silk</option>
                            <option value="2">Vintage Tops</option>
                            <option value="3">Contemporary Tops</option>
                        </select>
                    </label>
                    <button>make it!</button>
                </form>
            </div>
        )
    }
}
