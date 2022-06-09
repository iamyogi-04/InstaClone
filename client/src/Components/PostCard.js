import React from 'react'

const PostCard = (props) => {
    const {post, dltpost} = props;
    
  return (
    <div className='PostCard'>
        <div className="heading">
            <h3>{post.title}</h3>
            <p>{post.location}<span><button onClick={()=>dltpost(post._id)} className='delete'><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M3 3H21V5H3z"/><path d="M16.1,22H7.9c-1,0-1.9-0.7-2-1.7L4,4.1l2-0.2L7.9,20l8.2,0L18,3.9l2,0.2l-1.9,16.1C18,21.3,17.1,22,16.1,22z"/><path d="M5,4l1.9,16.1c0.1,0.5,0.5,0.9,1,0.9h8.2 c0.5,0,0.9-0.4,1-0.9L19,4H5z" opacity=".3"/><path d="M15 3L15 4 9 4 9 3 10 2 14 2z"/></svg></button></span></p>
            
        </div>
        <div className="image2">
            <img src={`https://instclone10x-backend.herokuapp.com${post.image}`} alt="img" />
        </div>
        <div className="footer">
            <p> Likes ❤ {post.likes}</p>
            <p> Comments😆 {post.comment}</p>
        </div>
    </div>
  )
}

export default PostCard