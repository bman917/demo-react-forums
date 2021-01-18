import { useState } from 'react';
import { connect } from "react-redux";
import { addPosts } from "../redux/actions";

const valid = (post) => {
    return post.user.trim().length > 0 && post.message.trim().length > 0;
}


const AddPost = ({addPosts, parentId}) => {
    const [newPost, setNewPost] = useState({user: '', message: '', parent: parentId});
    const [disableButton, setDisableButton] = useState(true);

    const handleChange = (e) => {
        const updatedPost = {...newPost, [e.target.name]: e.target.value}
        setNewPost(updatedPost);
        setDisableButton(!valid(updatedPost));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addPosts(newPost);
        setNewPost({user: '', message: '', parent: parentId});
    };

    return (
        <form className="forums-form" onSubmit={handleSubmit}>
            <section className="input-group">
                <label>User</label>
                <input type="text" name="user" value={newPost.user} onChange={handleChange}></input>
            </section>

            <section className="input-group">
                <label>Message</label>
                <input type="text" name="message" value={newPost.message} onChange={handleChange}></input>
            </section>

            <section className="input-group">
                <button type="submit" disabled={disableButton}>{parentId === undefined ? 'Create Post' : 'Reply'}</button>
            </section>          
        </form>
    );
}
export default connect(
    null,
    { addPosts }
  )(AddPost);