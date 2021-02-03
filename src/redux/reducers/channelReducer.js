const initChannel = {
  currentChannel: {
    id: 1,
    name: 'Welcome',
    description: 'Group of welcome to chat app',
    members: [],
    messages: [],
  },
  channels: [],
};

export const SET_MESSAGE = 'SET_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const UPDATE_CHANNEL = 'UPDATE_CHANNEL';
export const UPDATE_CURRENT_CHANNEL = 'UPDATE_CURRENT_CHANNEL';

export const channelReducer = (state = initChannel, action) => {
  switch (action.type) {
    case UPDATE_CHANNEL:
      return { ...state, channels: action.payload };
    case UPDATE_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: {
          ...state.currentChannel,
          ...state.channels.filter(
            (channel) => channel.id === action.payload
          )[0],
        },
      };
    case SET_MESSAGE:
      // I reset messages
      return {
        ...state,
        currentChannel: { ...state.currentChannel, messages: action.payload },
      };
    case UPDATE_MESSAGE:
      // I concat messages
      return {
        ...state,
        currentChannel: {
          ...state.currentChannel,
          messages: [...state.currentChannel.messages, action.payload],
        },
      };
    default:
      return state;
  }
};
