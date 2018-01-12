import React, { Component } from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

class PostContainer extends Component {
    construction(props) {
        super(props);
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
        <div className="Post__item">

            <div className="Post__header">
                <img src={this.state.dummyData.thumbnailUrl} className="Post__user-thumb" />
                <div className="Post__user-name">philzcoffee</div>
            </div>

            <img src={this.state.dummyData.imageUrl} className="Post__image" />

            <div className="Post__reactions">
                <div className="Post__reaction-icon Post__like-icon"></div>
                <div className="Post_reaction-icon Post__comment-icon"></div>
                <div className="Post__likes">{this.state.dummyData.likes} likes</div>
            </div>

            <CommentSection key="1" comments={this.state.dummyData.comments} />

        </div>
      );
    }
}

export default PostContainer;