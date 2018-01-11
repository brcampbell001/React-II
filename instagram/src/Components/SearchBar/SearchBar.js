import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        };
    }

    eventInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    render() {
        return (
            <div className="SearchBar">
             <div className="SearchBar_icon SearchBar_icon-camera"></div>
             <div className="SearchBar_logo"></div>
             <div className="SearchBar_input"></div>
                <input type="text" onchange={this.eventInput} value={this.state.input} placeholder="Search" />
            </div>
        )
    }
}