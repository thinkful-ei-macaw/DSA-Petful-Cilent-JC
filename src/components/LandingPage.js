import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.css';

    export default class LandingPage extends Component {
    render() {
    return (
    <div>
        <main>
            <header className="lp-header">
                <h1>Welcome to Petful</h1>
            </header>
                <p>See a puppy (or kitten) that is pulling at your heartstrings? Don’t miss out on making it your newest family member!</p>
                <div className="lp-img">
                    <img src = 'https://images.unsplash.com/photo-1585849847025-256a1488e653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80' alt="dog-cat"></img>
                </div>
        <div className="lp-process">
            <h2>How to adopt</h2>
            <p>Each shelter's adoption process is different. Here's an example of how a shelter adoption might work:</p>
            <ol>
                <li>
                    You find a pet you want to adopt on Petful.We use a first-in-first-out system, and so you'll only be able to adopt the pets we've had the longest.
                </li>
                <li>
                      You click Adopt and fill in your name.
                </li>
                <li>
                You go to the shelter, pay the adoption fee(usually $25 to $125), and then take your new pet home.
                </li>
            </ol>
    </div>
    <Link to="/adoption">
    <button type="button">Adopt today</button>
    </Link>
    </main>
    </div>
    )
    }
    }
