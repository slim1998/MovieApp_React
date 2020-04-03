  
import React, { Component } from 'react'
import './App.css';
import MovieList from "./Components/MovieList";
import Loading from "./Components/Loading";
import 'bootstrap/dist/css/bootstrap.min.css';
const Content = Loading(MovieList);


class App extends Component{
  state = {
    isLoading : true
  } 
  
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }
  render() {
    return (
      <div>
        <Content
            isLoading={this.state.isLoading}
          
          />
      </div>
    )
  }
}
export default  App