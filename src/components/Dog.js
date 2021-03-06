import React, { Component } from 'react'
import PetFulContext from './PetfulContext'
import './Dog.css';

export default class Dog extends Component {

    static contextType = PetFulContext;

    render() {
        const {
            age,
            breed,
            description,
            gender,
            imageURL,
            name,
            story,
        } = this.context.dogs;
        return (
            <div className="pet">
                <h2>{name}</h2>
                <img src={imageURL} alt="pet up for adoption" />
                <p>Age: {age}</p>
                <p>Breed: {breed}</p>
                <p>Gender: {gender}</p>
                <p>Description: {description}</p>
                <p>Story: {story}</p>
                {this.props.adopt && <button onClick={this.props.demoAdopt}>Adopt Dog</button>}
            </div>
        );
    }
}
