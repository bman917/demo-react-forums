export const getPostsState = store => store.posts;
export const getPostsList = store => getPostsState(store) ? getPostsState(store).posts : [];
export const getTopLevelPost = store => getPostsList(store) ? getPostsList(store).filter(post => post.parent === undefined) : [];