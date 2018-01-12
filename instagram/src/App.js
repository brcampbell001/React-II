import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        {
          Array.from(dummyData).map((postData, index) => (
            <PostContainer key={index} dummyData={postData} />
          ))
        }
        
      </div>
    );
  }
}     

export default App;
