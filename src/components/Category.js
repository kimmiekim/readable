import React from 'react'
import Post from './Post'

const Category = (props) => {
  const { title } = props

  return (
    <div className= "category-section">
      <h3>{title}</h3>
      <Post />
    </div>
  )
}

export default Category
