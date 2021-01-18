import React from "react";
import { connect } from "react-redux";
import AddPost from "./AddPost";
import { getPostsList } from "../redux/selectors";

const Post = ({ post, children, allPosts, level }) => {
    const MAX_LEVEL = 3;
    return (
    <div className="post-item">
        <div className="post-item-main">
                <div className="post-item-header">User: {post.user}</div>
                <div className="post-item-message">
                  {post.message}
                </div>
                    { level < MAX_LEVEL && 
                        <div className="post-item-footer">
                            <AddPost parentId={post.id}/>
                        </div>
                    }
        </div>
        <div className="post-item-reply">
            { children && children.length > 0 && children.map(post => {
                const grandChildren = allPosts ? allPosts.filter(p => p.parent === post.id) : [];
                return <Post key={post.id} post={post} allPosts={allPosts} children={grandChildren} level={level+1}/>
            })}
        </div>
    </div>
)};

const mapStateToProps = (state, ownProps) => {
    return { 
      allPosts: getPostsList(state)
    };
};
  
export default connect(mapStateToProps)(Post);
