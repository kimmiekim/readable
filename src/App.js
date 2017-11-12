import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Post from './components/Post'
import PostList from './components/PostList'
// import fetchPosts from './utils/api'

import { Route } from 'react-router-dom'

class App extends Component {
  // state= {
  //   posts: [],
  //   categories: [],
  //   comments:[]
  // }

  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }

  componentDidMount(){
    const url = `${process.env.REACT_APP_BACKEND}posts`
    console.log('fetching from url', url);

    fetch(url, { headers: { 'Authorization': 'bambambam' } } )
      .then((resp) => { return(resp.text()) })
      .then((data) => {
        this.setState({ backend: data })
        console.log("data", data)
      })
  }

  render() {
    const { backend } = this.state
    return (
      <div className="App">
        <Route exact path = "/" render ={()=>(
          // <PostList />

          <div className = "posting">
            <div className= "image">
              <img src="http://placekitten.com/500/300" />
            </div>
            <div className="comment-box">
              <div className="post-likes">
                <h1>{ backend.voteScore }</h1>
              </div>
              <div className="post-info">
                <h1>{ backend.title }</h1>
                <h3>{ backend.author }</h3>
              </div>

              <ul className="comment-list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </div>
          </div>

        )} />
      </div>
    )
  }
}

export default App;
