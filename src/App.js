import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import List from './List.js';
import Home from './Home.js';
import Header from './Header.js';
import Detail from './Detail.js';
import Create from './Create.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              component={Home}
            />
            <Route
              path="/clothes"
              exact
              component={List}
            />
            <Route
              path="/clothes/:clothingId"
              exact
              component={Detail}
            />
            <Route
              path="/create"
              exact
              component={Create}
            />
          </Switch>
        </Router>
        <footer>
          Contact info goes here
                </footer>
      </div>
    )
  }
}

// import React, { Component } from 'react';
// import request from 'superagent';
// import Header from './Header.js';
// import Home from './Home.js';
// import './App.css';

// export default class App extends Component {
//   state = {
//     clothes: [],
//     query: ''
//   }

//   componentDidMount = async () => {
//     await this.fetchClothes();
//   }

//   fetchClothes = async () => {
//     const data = await request.get(`https://yalla-habibi.herokuapp.com/clothes
//     `);

//     this.setState({
//       clothes: data.body
//     });
//   }
//   render() {
//     const {
//       clothes
//     } = this.state;

//     return (
//       <div className="App" >
//         <Header />
//         <Home />
//         <main className='shop'>
//           {
//             this.state.clothes.map(item =>
//               <div className='item-description'>
//                 {/* <div className='item-img'>
//                   <img alt='clothing-item' src={clothing.img_url} />
//                 </div> */}
//                 <p>{item.id}</p>
//                 <p>{item.name}</p>
//                 <p>{item.description}</p>
//                 <p>{item.size}</p>
//                 <p>{item.price}</p>
//               </div>
//             )
//           }
//         </main>
//       </div>
//     );
//   }
// }
// // export default App;
