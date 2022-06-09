import React, { useState } from 'react'
import Axios from 'axios'
import{ Link} from 'react-router-dom'

const AddPosts = () => {
    const [post, setpost] = useState({ title: "", location: "", likes: "", comment: "" })
    const [filefield, setfilefield] = useState(null)
    const onTextFieldChange = (e) => {
        // console.log(e.target.value)
        setpost({ ...post, [e.target.name]: e.target.value }) // post.title
    }
    const onFileFieldChange = (e) => {
        console.log(e.target.files[0])
        setfilefield(e.target.files[0])
        // console.log(filefield)

    }
    const onSubmitAddPost = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', post.title)
        formData.append('location', post.location)
        formData.append('image', filefield)
        formData.append('likes', post.likes)
        formData.append('comment', post.comment)
        const postadd = async () => {
            await Axios.post("https://instclone10x-backend.herokuapp.com/api/v1/posts", formData, {
                method: 'POST',
                headers: { "Content-Type": "multipart/form-data" }
            }).then(res => console.log(res)).catch(err => console.log(err))
            alert("Post added successfully")

        }
        postadd();
        console.log(formData);
    }
    return (
        <>
            <div className="form">
                <form onSubmit={onSubmitAddPost}>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input onChange={onTextFieldChange} type="text" name="title" placeholder="name" className="form-control "></input>
                        <label for="location">Location</label>
                        <input onChange={onTextFieldChange} type="text" name="location" placeholder="location" className="form-control"></input>
                        <label for="likes">Likes</label>
                        <input onChange={onTextFieldChange} type="text" name="likes" placeholder="likes" className="form-control"></input>
                        <label for="comment">Comment</label>
                        <input onChange={onTextFieldChange} type="text" name="comment" placeholder="comment" className="form-control"></input>
                        <label for="exampleFormControlFile1">Upload Image</label>
                        <input onChange={onFileFieldChange} type="file" className="form-control-file my-4" id="exampleFormControlFile1"></input>
                        <button type="submit" class="btn btn-success">Upload</button>
                        <Link to="/homepage"><button type="submit" class="btn btn-primary mx-3">Go Back</button></Link>
                    </div>
                    
                </form>
                

            </div>

        </>
    )
}

export default AddPosts