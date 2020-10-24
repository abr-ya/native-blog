import createDataContext from './createDataContext';

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return [...state, {
        id: Math.floor(Math.random() * 99999),
        title: action.payload.title,
        content: action.payload.content,
      }];
    case 'edit_post':
    // обновленный пост в конец
    // return [...state.filter(item => item.id !== action.payload.id), action.payload];
      // без смены места
      return state.map(item => (item.id === action.payload.id ? action.payload : item));
    case 'del_post':
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
};

const start = [
  { id: 1, title: 'Blog Post #1', content: 'Content of test post #1.' }, 
  { id: 2, title: 'Blog Post #2' },
  { id: 3, title: 'Blog Post #3' },
];

const addPost = (dispatch) => (
  (title, content, callback) => {
    dispatch({ type: 'add_post', payload: {title, content} });
    if (callback) callback();
  } 
);
const editPost = (dispatch) => (
  (id, title, content, callback) => {
    dispatch({ type: 'edit_post', payload: {id, title, content} });
    if (callback) callback();
  } 
);
const delPost = (dispatch) => (
  (id) => dispatch({ type: 'del_post', payload: id })
);

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addPost, editPost, delPost },
  start,
);
