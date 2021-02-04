import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { encode } from 'he';

import userPropTypes from '../../../propTypes/UserPropTypes';
import iconSend from '../../../assets/icons/send.svg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import stylesButton from '../../../css/Button.module.css';
import styles from './SendMessage.module.css';

const SendMessage = ({ user, socket, currentChannel }) => {
  const [value, setValue] = useState(EditorState.createEmpty());

  const handleInput = (e) => {
    setValue(e);
  };

  // Send message.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Encode the text sent
    const content = encode(
      draftToHtml(convertToRaw(value.getCurrentContent()))
    );

    socket.emit('ADD_MESSAGE', {
      channelId: currentChannel.id,
      content: {
        author: { id: user.id, name: user.name },
        content,
        created_at: new Date(),
      },
    });

    setValue(EditorState.createEmpty());
  };

  return (
    <div className={styles.wrapperEditor}>
      <Editor
        editorState={value}
        toolbar={{
          options: [
            'inline',
            'blockType',
            'list',
            'textAlign',
            'link',
            'emoji',
            'remove',
            'history',
          ],
          inline: { options: [] },
          blockType: {
            inDropdown: true,
            options: [
              'Normal',
              'H2',
              'H3',
              'H4',
              'H5',
              'H6',
              'Blockquote',
              'Code',
            ],
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
          },
        }}
        toolbarOnFocus
        onEditorStateChange={handleInput}
        wrapperClassName={styles.wrapperEditor}
        editorClassName={styles.textArea}
        toolbarClassName={styles.toolsBar}
      />
      <button
        className={styles.sendButton}
        type="button"
        onClick={(e) => handleSubmit(e)}
      >
        <img src={iconSend} alt="Send" />
      </button>
    </div>
  );
};

export default SendMessage;

SendMessage.propTypes = {
  ...userPropTypes,
  currentChannel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
};
