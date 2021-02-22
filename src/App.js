import React, { Component } from 'react';
import request from 'superagent';
import rainbow from './rainbow-cloud.png';
import './App.css';

export default class App extends Component {
  state = {
    clothes: []
  }

  componentDidMount = async () => {
    await this.fetchClothes();
  }

  fetchClothes = async () => {
    const data = await request.get(`https://yalla-habibi.herokuapp.com/clothes
    `);

    this.setState({
      clothes: data.body.results
    });
  }
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={rainbow} className="App-logo" alt="logo" />
          <h1>YALLA HABIBI</h1>
          <h3>a shop for all things with a past life & a good story.</h3>

        </header>
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
