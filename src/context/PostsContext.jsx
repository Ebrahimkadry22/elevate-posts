import { createContext, useReducer } from "react";
import { initalState, postsReducer } from "./postsReducer";


export const PostsContext = createContext(null);

export const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initalState);
  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        loading: state.loading,
        error: state.error,
        currentPage: state.currentPage,
        postsPrepage: state.postsPrepage,
        filteredPosts:state.filteredPosts ,
        dispatch,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
