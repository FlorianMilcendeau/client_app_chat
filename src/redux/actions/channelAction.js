import {
  SET_MESSAGE,
  UPDATE_CHANNEL,
  UPDATE_CURRENT_CHANNEL,
  UPDATE_MESSAGE,
} from '../reducers/channelReducer';

export const updateChannels = (channels) => ({
  type: UPDATE_CHANNEL,
  payload: channels,
});

export const updateCurrentChannel = (currentChannelId) => ({
  type: UPDATE_CURRENT_CHANNEL,
  payload: currentChannelId,
});

export const setMessage = (messages) => ({
  type: SET_MESSAGE,
  payload: messages,
});

export const updateMessage = (message) => ({
  type: UPDATE_MESSAGE,
  payload: message,
});
