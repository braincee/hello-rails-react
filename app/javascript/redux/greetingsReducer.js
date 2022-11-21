import axios from 'axios';

const GET_MESSAGE = 'greetings/message';

const getMessage = (message) => ({ type: GET_MESSAGE, payload: message});


export default function greetingsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

const fetchMessage = async () => {
  await axios.get('api/messages').then((response) => {
    return response.data.greeting
  });
};

export { fetchMessage, getMessage };