import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header.js';
import Home from './Home.js';
import './App.css';

export default class App extends Component {
  state = {
    clothes: [],
    query: ''
  }

  componentDidMount = async () => {
    await this.fetchClothes();
  }

  fetchClothes = async () => {
    const data = await request.get(`https://yalla-habibi.herokuapp.com/clothes
    `);

    this.setState({
      clothes: data.body
    });
  }
  render() {
    const {
      clothes
    } = this.state;

    return (
      <div className="App" >
        <Header />
        <Home />
        <main className='shop'>
          {
            this.state.clothes.map(item =>
              <div className='item-description'>
                {/* <div className='item-img'>
                  <img alt='clothing-item' src={clothing.img_url} />
                </div> */}
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.size}</p>
                <p>{item.price}</p>
              </div>
            )
          }
        </main>
      </div>
    );
  }
}
// export default App;
