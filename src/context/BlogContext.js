import createDataContext from './createDataContext';

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return [...state, {
        id: Math.floor(Math.random() * 99999),
        title: action.payload.title,
        content: action.payload.content,
      }];
    case 'del_post':
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
};

const start = [
  { id: 1, title: 'Blog Post #1' }, 
  { id: 2, title: 'Blog Post #2' },
  { id: 3, title: 'Blog Post #3' },
];

const addPost = (dispatch) => (
  (title, content, callback) => {
    dispatch({ type: 'add_post', payload: {title, content} });
    callback();
  } 
);
const delPost = (dispatch) => (
  (id) => dispatch({ type: 'del_post', payload: id })
);

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addPost, delPost },
  start,
);
