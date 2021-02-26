import React, { Component } from 'react'


export default class Home extends Component {
    render() {
        return (
            <div>
                <main className='home'>
                    <img className='App-logo' alt='app-logo' src='./assets/icons/sprinkles.png'></img>

                    <h1>YALLA HABIBI</h1>
                    <h3>a shop for all things with a past life & a good story.</h3>
                    {/* <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    Learn React
                    </a> */}
                </main>
            </div>
        )
    }
}
