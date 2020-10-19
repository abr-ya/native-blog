import createDataContext from './createDataContext';

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const start = [
  { title: 'Blog Post #1' }, 
  { title: 'Blog Post #2' },
  { title: 'Blog Post #3' },
];

const addPost = (dispatch) => (
  () => dispatch({ type: 'add_post' })
);

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addPost },
  start,
);
