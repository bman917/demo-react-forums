import { ADD_POSTS } from "../actionTypes";

const initialState = {
  latestPostId: 5,
  posts: [],
  mockData: [
    { id: 1, user: "John Doe", message: "Message 1" },
    { id: 2, user: "Jane Doe", message: "Reply Level 1", parent: 1 },
    { id: 3, user: "Jane Doe", message: "Reply Level 2", parent: 2 },
    { id: 4, user: "Jane Doe", message: "Reply Level 1", parent: 1 },
    { id: 5, user: "Jane Doe", message: "Message 2"},
  ]
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POSTS: {
      const { newPost } = action.payload;
      return {...state, posts: [...state.posts, newPost]};
    }
    default:
      return state;
  }
}

export default postReducer;
