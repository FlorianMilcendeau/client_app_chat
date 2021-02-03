export const channelSelector = ({ channels }) => channels.channels;

export const currentChannel = ({ channels }) => channels.currentChannel;

export const membersSelector = ({ channels }) =>
  channels.currentChannel.members;

export const messagesSelector = ({ channels }) =>
  channels.currentChannel.messages;
