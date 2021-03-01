import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export default class Home extends Component {
    render() {
        return (
            <div>
                <main className='home'>
                    <img className='App-logo' alt='app-logo' src='./assets/icons/sprinkles.png'></img>

                    <h1>YALLA HABIBI</h1>
                    <h3>a shop for all things with a past life & a good story.</h3>
                    <Link className='link-inventory-page' to="/clothes">
                        <h4>
                            get to know the old souls here.
                        </h4>
                    </Link>
                </main>
            </div>
        )
    }
}
