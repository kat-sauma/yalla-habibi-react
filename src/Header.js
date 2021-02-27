import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <div className='nav-links-left'>
                        <img className='rainbow-icon' alt='rainbow-icon-to-home-page' src='./assets/icons/rainbow.png' />
                    </div>
                    <div className='header-title'>
                        <h3 className='site-name'>Yalla Habibi Shop</h3>
                    </div>
                    <div className='nav-links-right'>
                        <img className='sun-icon' alt='sun-icon-to-inventory-list' src='./assets/icons/cloud-sun.png' />
                        <img className='moon-icon' alt='moon-icon-to-detail-page' src='./assets/icons/cloud-moon.png' />
                        <img className='cloud-icon' alt='cloud-icon-to-cart' src='./assets/icons/cloud.png' />
                    </div>
                </header>
            </div>
        )
    }
}
