import React, { Component } from 'react'
import { updateItem, getCategories, getClothingItem, getCategoryId } from './Api-Utils.js';


export default class Detail extends Component {
    state = {
        clothing_id: 1,
        name: ' ',
        img_url: ' ',
        description: ' ',
        category_id: 1,
        size: ' ',
        price: 1,
        category_id: 1,
        categories: []
    }

    componentDidMount = async () => {
        const categories = await getCategories();
        // const {
        //     category,
        //     clothing_id,
        //     description,
        //     img_url,
        //     name,
        //     price,
        //     size,
        //     category_id,
        //     categor
        // } = await getClothingItem(this.props.match.params.itemId);
        const item = await getClothingItem(this.props.match.params.itemId);

        const category_id = getCategoryId(item, categories);
        // this.setState({
        //     category: category,
        //     clothing_id: clothing_id,
        //     description: description,
        //     img_url: img_url,
        //     name: name,
        //     price: price,
        //     size: size,
        //     category_id: category_id
        // })
        this.setState({
            ...item,
            category_id,
            categories
        })
    }

    handleClothingIdChange = (e) => this.setState({ clothing_id: Number(e.target.value) })

    handleNameChange = (e) => this.setState({ name: e.target.value })

    handleURLChange = (e) => this.setState({ img_url: e.target.value })

    handleDescriptionChange = (e) => this.setState({ description: e.target.value })

    handleCategoryChange = (e) => this.setState({ category_id: Number(e.target.value) })

    handleSizeChange = (e) => this.setState({ size: e.target.value })

    handlePriceChange = (e) => this.setState({ price: Number(e.target.value) })

    handleSubmit = async (e) => {
        e.preventDefault();

        await updateItem(this.props.match.params.itemId, this.state);

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
                    <label>
                        <select value={this.state.category} onChange={this.handleCategoryChange}>
                            {
                                this.state.categories.map(category =>
                                    <option value={category.id} selected={this.state.category_id === category.id}>
                                        {category.name}
                                    </option>
                                )
                            }
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

                    <button>update</button>
                </form>
            </div>
        )
    }
}
