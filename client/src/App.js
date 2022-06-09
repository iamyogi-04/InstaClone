import React from 'react';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import './App.css';
import AddPosts from './Components/AddPosts';
import PostState from './context/posts/PostState';
const App = () => {
  return (
    <>
      <PostState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/homepage" element={<Homepage />}></Route>
            <Route path="/addpost" element={<AddPosts />}></Route>
          </Routes>
        </BrowserRouter>
      </PostState>
    </>
  )
}


export default App;