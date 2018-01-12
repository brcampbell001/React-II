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
             <div className="SearchBar__icon SearchBar__icon-camera"></div>
             <div className="SearchBar__logo"></div>
             <div className="SearchBar__input"></div>
                <input type="text" onchange={this.eventInput} value={this.state.input} placeholder="Search" />
            </div>
            <div className="SearchBar__iconset">
                <div className="SearchBar__icon SearchBar__icon-explore" /></div>
                <div className="SearchBar__icon SearchBar__icon-like" /></div>
                <div className="SearchBar__icon SearchBar__icon-user" /></div>
            </div>
        </div>
        );
    }
}

export default SearchBar;