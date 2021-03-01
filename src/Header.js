import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className='nav-links-left'>
                    <NavLink exact activeClassName='nav-link-group' to="/">
                        <img className='rainbow-icon' alt='rainbow-icon-to-home-page' src='./assets/icons/rainbow.png' />
                        Home
                    </NavLink>
                </div>
                <div className='header-title'>
                    <h3 className='site-name'>
                        Yalla Habibi Shop
                    </h3>
                </div>
                <div className='nav-links-right'>
                    <NavLink exact activeClassName='nav-link-group' to="/create">
                        <img className='sun-icon' alt='sun-icon-to-create-page' src='./assets/icons/cloud-sun.png' />
                        Create
                    </NavLink>
                    <NavLink exact activeClassName='nav-link-group' to="/clothes">
                        <img className='moon-icon' alt='moon-icon-to-inventory-page' src='./assets/icons/cloud-moon.png' />
                        List
                    </NavLink>


                    <img className='cloud-icon' alt='cloud-icon-to-cart' src='./assets/icons/cloud.png' />
                </div>
            </header>
        )
    }
}
