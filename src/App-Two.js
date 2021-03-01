// import React, { Component } from 'react'
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
// } from 'react-router-dom';
// import './App.css';
// import Header from './Header.js';
// import Home from './Home.js';
// import Shop from './Shop.js';
// import Cart from './Cart.js';
// import Detail from './Detail.js';

// export default class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <Router>
//                     <Header />
//                     <Switch>
//                         <Route
//                             path="/"
//                             exact
//                             render={(routerProps) => <Home {...routerProps} />}
//                         />
//                         <Route
//                             path="/shop"
//                             exact
//                             render={(routerProps) => <Shop {...routerProps} />}
//                         />
//                         <Route
//                             path="/cart"
//                             exact
//                             render={(routerProps) => <Cart {...routerProps} />}
//                         />
//                         <Route
//                             path="/:clothingId"
//                             exact
//                             render={(routerProps) => <Detail {...routerProps} />}
//                         />
//                     </Switch>
//                 </Router>
//             </div>
//         )
//     }
// }