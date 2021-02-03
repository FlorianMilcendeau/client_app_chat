import {
  TOGGLE_MENU,
  TOGGLE_PANEL,
  TOGGLE_SIDEBAR,
} from '../reducers/uiReducer';

export const toggleMenu = (bool) => ({
  type: TOGGLE_MENU,
  payload: bool,
});

export const togglePanel = (bool) => ({
  type: TOGGLE_PANEL,
  payload: bool,
});

export const toggleSideBar = (bool) => ({
  type: TOGGLE_SIDEBAR,
  payload: bool,
});
