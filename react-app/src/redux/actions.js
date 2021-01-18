import { ADD_POSTS } from "./actionTypes";

let nextId = 0;

export const addPosts = (post) => {

  const newPost = {...post, id: ++nextId};
  console.log(newPost);
  return ({
    type: ADD_POSTS,
    payload: {
      newPost
    }
  });
}