import React, { Component } from 'react';
import PetfulContext from './PetfulContext';
import './AdoptForm.css';

export default class AdoptForm extends Component {

    state = {
        name: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        let name = this.state.name;
        this.context.onAddPerson(name);
        this.props.add(name);
        this.props.queueLine();
        this.setState({
            name: ''
        })
    }


    static contextType = PetfulContext;

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Please wait in line for your&nbsp;turn</h2>
                    <p>Enter your info below to wait in line</p>
                    <label htmlFor="name">Please enter your name</label>
                    <input type="text" id="name" name="name" value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })} />
                    <button type="submit">Adopt a pet</button>
                </form>
            </div>
        )
    }
}
