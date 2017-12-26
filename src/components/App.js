import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import logo from '../logo.svg'
import '../App.css'

import Post from './Post'
import Comment from './Comment'
import PostList from './PostList'

// import { loadComment } from '../actions/commentActions'
// import { fetchComments } from '../api/api'

import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    const posts = this.props
    return (
      <div className="App">
        <Route exact path = "/" render ={()=>(
          // <PostList />
          <div>
            <h1>
              <Link to="/">Readable</Link>
            </h1>
            <div className = "posting">
              <div className= "content">
                {console.log("checking props:", posts.posts)}


              </div>
              { Array.isArray(posts.posts)? posts.posts.map((post)  => (
                    <Post post={post} key={post.id}/>

                  )): null }
            </div>
          </div>

        )} />
      </div>
    )
  }
}

// App.propTypes= {
//   posts: PropTypes.array.isRequired
// }

function mapStateToProps(state, ownProps){
  return {
    posts: state.posts,
    comments: state.comments
    // state here refers to our store, and this is how we pass down store props down to the component
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({fetchComments: fetchComments}, dispatch)
// }

export default connect( mapStateToProps )(App);
