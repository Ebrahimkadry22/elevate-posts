export const initalState = {
  posts: [],
  filteredPosts: [],
  loading: false,
  error: null,
  search: "",
  author: "all",
  currentPage: 1,
  postsPrepage: 10,
};
const filterPosts = (posts, search, author) => {
  return posts.filter((post) => {
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase());
    const matchAuthor = author === "all" || post.userId === Number(author);

    return matchSearch && matchAuthor;
  });
};
export const postsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_POSTS_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_POSTS_SUCCESS": {
      const filtered = filterPosts(action.payload, state.search, state.author);
      return {
        ...state,
        loading: false,
        posts: action.payload,
        filteredPosts: filtered,
      };
    }
    case "SET_SEARCH": {
      const filtered = filterPosts(state.posts, action.payload, state.author);
      return {
        ...state,
        search: action.payload,
        filteredPosts: filtered,
        currentPage: 1,
      };
    }
    case "SET_AUTHOR": {
      const filtered = filterPosts(state.posts, state.search, action.payload);
      return {
        ...state,
        author: action.payload,
        filteredPosts: filtered,
        currentPage: 1,
      };
    }
    case "FETCH_POSTS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
