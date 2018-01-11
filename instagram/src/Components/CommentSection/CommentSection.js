import React, { Component } from 'react';

class CommentSection extends Component {
    constructor(props) {
        super();
        comments: []
    };
}

componentDidMount() {
    this.setState ({
        comments: this.props.comments
    });
}

render() {
    return (
        
    )
}