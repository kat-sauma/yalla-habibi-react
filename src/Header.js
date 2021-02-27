import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className='nav-links-left'>
                    <NavLink activeClassName='nav-link-group' to="/">
                        <img className='rainbow-icon' alt='rainbow-icon-to-home-page' src='./assets/icons/rainbow.png' />
                    </NavLink>
                </div>
                <div className='header-title'>
                    <h3 className='site-name'>
                        Yalla Habibi Shop
                    </h3>
                </div>
                <div className='nav-links-right'>
                    <NavLink activeClassName='nav-link-group' to="/create">
                        <img className='sun-icon' alt='sun-icon-to-inventory-list' src='./assets/icons/cloud-sun.png' />
                    </NavLink>
                    <NavLink activeClassName='nav-link-group' to="/list">
                        <img className='moon-icon' alt='moon-icon-to-detail-page' src='./assets/icons/cloud-moon.png' />
                    </NavLink>


                    <img className='cloud-icon' alt='cloud-icon-to-cart' src='./assets/icons/cloud.png' />
                </div>
            </header>
        )
    }
}
