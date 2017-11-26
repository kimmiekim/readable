import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Post from './components/Post'
import PostList from './components/PostList'
// import fetchPosts from './utils/api'

import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {

  postRow(post, index) {
    return <div key={index}> {post.title} </div>
  }

  render() {
    return (
      <div className="App">
        <Route exact path = "/" render ={()=>(
          // <PostList />

          <div className = "posting">
            <h1>
              <Link to="/">Readable</Link>
            </h1>
            <div className= "content">
              {/* {this.props.posts.map(this.postRow)} */}
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

function mapStateToProps(state, ownProps){
  return {
    posts: state.posts
    // state here refers to our store, and this is how we pass down store props down to the component
  }
}

export default connect(mapStateToProps)(App);
