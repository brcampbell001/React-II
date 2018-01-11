import React, { Component } from 'react';

class PostContainer extends Component {
    construction(props) {
        super();
        this.state = {
            dummyData: props.dummyData
        };
    }

    componentDidMount() {
        this.setState({
            dummyData: this.props.dummyData
        })
    }

    render() {
        return (
            
        )
    }
}