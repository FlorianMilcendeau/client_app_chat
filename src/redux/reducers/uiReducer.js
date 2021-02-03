const initUi = {
  toggleMenu: false,
  togglePanel: true,
  toggleSideBar: false,
};

export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_PANEL = 'TOGGLE_PANEL';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const uiReducer = (state = initUi, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, toggleMenu: action.payload };
    case TOGGLE_PANEL:
      return { ...state, togglePanel: action.payload };
    case TOGGLE_SIDEBAR:
      return { ...state, toggleSideBar: action.payload };
    default:
      return state;
  }
};
