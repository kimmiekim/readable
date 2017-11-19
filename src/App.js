import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Post from './components/Post'
import PostList from './components/PostList'
// import fetchPosts from './utils/api'

import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backend: {}
    }
    console.log("backend", this.state.backend)
  }

  componentDidMount(){
    const url = `${process.env.REACT_APP_BACKEND}posts`
    console.log('fetching from url', url);

    fetch(url, { headers: { 'Authorization': 'bambambam' } } )
      .then((resp) => { return(resp.text()) })
      .then((data) => {
        this.setState({ backend: data })
        console.log(this.state)
      })
  }

  render() {
    // const { backend } = this.state
    return (
      <div className="App">
        <Route exact path = "/" render ={()=>(
          // <PostList />

          <div className = "posting">
            <h1>
              <Link to="/">Readable</Link>
            </h1>
            <div className= "image">

            </div>
            {/* { backend.map((post)  => (
              <div className="comment-box">
                <div className="post-likes">
                  <h1>{ post.voteScore }</h1>
                </div>
                <div className="post-info">
                  <h1>{ post.title }</h1>
                  <h3>{ post.author }</h3>
                </div>
                <ul className="comment-list">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </div>
            ))} */}
          </div>

        )} />
      </div>
    )
  }
}

export default connect()(App);
