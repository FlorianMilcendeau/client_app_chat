import { connect } from 'react-redux';
import MenuBurger from '../../components/common/MenuBurger/MenuBurger';

import { toggleSideBar } from '../actions/uiAction';

const mapDispatchToProps = (dispatch) => ({
  toggleSideBar: (bool) => dispatch(toggleSideBar(bool)),
});

export const MenuBurgerStore = connect(null, mapDispatchToProps)(MenuBurger);
