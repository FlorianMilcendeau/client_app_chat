import {
  DELETE_MESSAGE,
  SET_MESSAGE,
  UPDATE_CHANNEL,
  UPDATE_CURRENT_CHANNEL,
  UPDATE_PUSH_MESSAGE,
  UPDATE_UNSHIFT_MESSAGE,
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

export const updatePushMessage = (message) => ({
  type: UPDATE_PUSH_MESSAGE,
  payload: message,
});

export const updateUnshiftMessage = (message) => ({
  type: UPDATE_UNSHIFT_MESSAGE,
  payload: message,
});

export const deleteMessage = (message) => ({
  type: DELETE_MESSAGE,
  payload: message,
});
