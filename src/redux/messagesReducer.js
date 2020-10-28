const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

const initialStore = {
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
};

const messagesReducer = (state = initialStore, action) => {
  let stateCopy = { ...state };
  stateCopy.messages = [...state.messages];
  switch (action.type) {
    case UPDATE_TEXT_MESSAGE:
      stateCopy.newMessageText = action.text;
      return stateCopy;
    case ADD_MESSAGE:
      let idCounerMessage = stateCopy.messages.length + 1;
      const newMessage = {
        id: idCounerMessage, avatar: 'https://goo.su/2FIK', sort: 'from', text: stateCopy.newMessageText
      };
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
    default:
      return stateCopy;
  }
}

export const actionSendMessage = () => {
  return {
    type: ADD_MESSAGE
  }
};

export const actionOnChangeMessageText = (text) => {
  return {
    type: UPDATE_TEXT_MESSAGE,
    text: text,
  }
};

export default messagesReducer;
