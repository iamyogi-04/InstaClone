import React from 'react';
import Navbar from './Navbar';
import {useEffect, useState} from 'react';
import PostCard from './PostCard';;
const Homepage = () => {
  const initialState = [];
  const [posts, setposts] = useState(initialState);
  let host ="https://instclone10x-backend.herokuapp.com";
  const getPost = async () => {
    const response = await fetch(`${host}/api/v1/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setposts(json);
  };
  useEffect(() => {
    getPost();
  })
  const deletepost = async (id)=>{
    const response = await fetch(`https://instclone10x-backend.herokuapp.com/api/v1/posts/${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    const json= await response.json()
    console.log(json)
    setposts(json)
    alert("Post deleted sucessfully")
}
  
  
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
        <h1>Welcome to instaclone</h1>
        {posts.map((post)=>{return <PostCard dltpost={deletepost} post={post} key={post._id}/>})}
    </div>
    
    </>
  )
}

export default Homepage;