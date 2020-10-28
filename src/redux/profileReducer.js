const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const UPDATE_LIKES_COUNTER = 'UPDATE-LIKES-COUNTER'

const initialStore = {
  posts: [
    { id: 0, text: 'Go drink', likeCounter: 10 },
    { id: 1, text: 'Go dance', likeCounter: 213 },
    { id: 2, text: 'Go fight', likeCounter: 146 },
  ],
  newPostText: ''
};

const renderLikesCounter = (id, value) => {
  initialStore.posts.forEach((el) => {
    if (el.id === id) {
      return el.likeCounter = value;
    }
  })
};

const profileReducer = (state = initialStore, action) => {
  let stateCopy = { ...state };
  stateCopy.posts = [...state.posts];
  switch (action.type) {
    case UPDATE_TEXT_POST:
      stateCopy.newPostText = action.text;
      return stateCopy;
    case ADD_POST:
      let idCounerPost = stateCopy.posts.length + 1;
      const newPost = {
        id: idCounerPost, text: stateCopy.newPostText, likeCounter: 0
      };
      stateCopy.posts.unshift(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    case UPDATE_LIKES_COUNTER:
      renderLikesCounter(action.id, action.value);
      return stateCopy;
    default:
      return stateCopy;
  }
};

export const actionSendPost = () => {
  return {
    type: ADD_POST
  }
};

export const actionOnChangePostText = (text) => {
  return {
    type: UPDATE_TEXT_POST,
    text: text
  }
};

export const actionLikePost = (id, value) => {
  return {
    type: UPDATE_LIKES_COUNTER,
    id: id,
    value: value
  }
};

export default profileReducer;
