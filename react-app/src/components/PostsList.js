import React from "react";
import { connect } from "react-redux";
import { getPostsList, getTopLevelPost } from "../redux/selectors";
import Post from "./Post";

const PostList = ({ topLevelPosts, allPosts }) => (
  <div className="post-list">
    {topLevelPosts && topLevelPosts.length > 0
      ? topLevelPosts.map((post, index) => {
          const children = allPosts.filter(p => p.parent === post.id);
          return <Post key={post.id} post={post} children={children} level={1} />;
        })
      : "No Posts to display"}
  </div>
);

const mapStateToProps = state => {
  return { 
    topLevelPosts: getTopLevelPost(state),
    allPosts: getPostsList(state)
  };
};

// export default TodoList;
export default connect(mapStateToProps)(PostList);
