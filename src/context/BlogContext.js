import createDataContext from './createDataContext';
import jsonServer from '../api/jsonserver';

const getPosts = dispatch => {
  return async() => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'get_posts', payload: response.data })
  };
};

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'get_posts':
      return action.payload;
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

// const start = [
//   { id: 1, title: 'Blog Post #1', content: 'Content of test post #1.' }, 
//   { id: 2, title: 'Blog Post #2' },
//   { id: 3, title: 'Blog Post #3' },
// ];

const addPost = () => (
  async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });
    if (callback) callback();
  } 
);
const editPost = (dispatch) => (
  async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    // и обновляем контекст
    dispatch({ type: 'edit_post', payload: { id, title, content } });
    if (callback) callback();
  } 
);
const delPost = (dispatch) => (
  async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    // удаляем из контекса - не перезапрашиваем
    dispatch({ type: 'del_post', payload: id });
  } 
);

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { getPosts, addPost, editPost, delPost },
  []
);
