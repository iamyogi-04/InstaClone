import React from 'react'
import PostContext from './PostContext'

const PostState = (props) => {
    
  return (
    <PostContext.Provider >
        {props.children}
    </PostContext.Provider>
  )
}

export default PostState