import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Banner from '../../common/banner/Banner';

import { SendMessageStore } from '../../../redux/store/SendMessageStore';
import { NavSideBarStore } from '../../../redux/store/NavSideBarStore';
import { ListMessagesStore } from '../../../redux/store/ListMessagesStore';
import { MenuBurgerStore } from '../../../redux/store/MenuBurgerStore';

import styles from './Home.module.css';

const Home = ({ socket, currentChannel, toggleMenu, toggleSideBar }) => {
  // Join Channel
  useEffect(() => {
    socket.emit('JOIN_ROOM', currentChannel.id);
  }, [currentChannel.id]);

  return (
    <>
      <NavSideBarStore />
      <section onClick={() => toggleMenu(false)} className={styles.wrapperChat}>
        <header className={styles.headerChat}>
          <MenuBurgerStore />
          <Banner title={currentChannel.name} />
        </header>
        <section
          className={styles.bodyChat}
          onClick={() => toggleSideBar(false)}
        >
          <ListMessagesStore />
          <SendMessageStore />
        </section>
      </section>
    </>
  );
};

export default Home;

Home.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.object.isRequired,
  currentChannel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  toggleMenu: PropTypes.func.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
};
