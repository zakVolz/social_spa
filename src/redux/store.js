import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: 'Go drink', likeCounter: 10 },
        { id: 2, text: 'Go dance', likeCounter: 213 },
        { id: 3, text: 'Go fight', likeCounter: 146 },
      ],
      newPostText: ''
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: 'William Roberts' },
        { id: 2, name: 'Morgan Burns' },
        { id: 3, name: 'Mason James' },
        { id: 4, name: 'Ashton Moore' }
      ],
      messages: [
        { id: 1, avatar: 'https://goo.su/2FIK', sort: 'from', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur maiores provident eos illum praesentium fugiat aspernatur neque necessitatibus, repellendus, iusto delectus, assumenda blanditiis at aut illo similique suscipit? Voluptas, a!Amet tempore facilis blanditiis consequuntur nobis voluptates non! Odio amet voluptatum veritatis officiis perspiciatis commodi eius, delectus mollitia totam id ratione. Unde odit beatae explicabo. Quae tempora perferendis itaque alias.' },
        { id: 2, avatar: 'https://goo.su/2FIK', sort: 'from', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur maiores provident eos illum praesentium fugiat aspernatur neque necessitatibus, repellendus, iusto delectus, assumenda blanditiis at aut illo similique suscipit? Voluptas, a!Amet tempore facilis blanditiis consequuntur nobis voluptates non! Odio amet voluptatum veritatis officiis perspiciatis commodi eius, delectus mollitia totam id ratione. Quae tempora perferendis itaque alias.' },
        { id: 3, avatar: 'https://goo.su/2Hbu', sort: 'in', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur maiores provident eos illum praesentium fugiat aspernatur neque necessitatibus, repellendus, iusto delectus, assumenda blanditiis at aut illo similique suscipit? Voluptas, a!Amet tempore facilis blanditiis consequuntur nobis voluptates non! Odio amet voluptatum veritatis officiis perspiciatis commodi eius, delectus mollitia totam id ratione. Unde odit beatae explicabo.' },
        { id: 4, avatar: 'https://goo.su/2FIK', sort: 'from', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing. Unde odit beatae explicabo. Quae tempora perferendis itaque alias.' },
        { id: 5, avatar: 'https://goo.su/2FIK', sort: 'from', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur maiores provident eos illum praesentium fugiat aspernatur neque necessitatibus, repellendus, iusto delectus, assumenda blanditiis at aut illo similique suscipit? Voluptas, a!Amet tempore facilis blanditiis consequuntur nobis voluptates non! Odio amet voluptatum veritatis officiis perspiciatis commodi eius, delectus mollitia totam id ratione. Quae tempora perferendis itaque alias.' },
        { id: 6, avatar: 'https://goo.su/2Hbu', sort: 'in', text: ' explicabo.' },
        { id: 7, avatar: 'https://goo.su/2FIK', sort: 'from', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing. Unde odit beatae explicabo. Quae tempora perferendis itaque alias.' }
      ],
      newMessageText: ''
    },
    friendsBox: [
      { id: 1, avatar: 'https://goo.su/2FIK', name: 'William Roberts' },
      { id: 2, avatar: 'https://goo.su/2Hbu', name: 'Morgan Burns' },
      { id: 3, avatar: 'https://goo.su/2HCb', name: 'Mason James' },
      { id: 4, avatar: 'https://goo.su/2hcC', name: 'Ashton Moore' },
      { id: 5, avatar: 'https://goo.su/2Hcc', name: 'Moore Roberts' },
      { id: 6, avatar: 'https://goo.su/2HCc', name: 'Burns Mason' },
    ]
  },

  _rerenderEntireTree() { },

  getState() {
    return this._state;
  },

  // Rerender <app />
  transfer(renderFunction) {
    this._rerenderEntireTree = renderFunction;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.messagesPage, action);
    this._rerenderEntireTree(this._state);
  }
};

export default store;
