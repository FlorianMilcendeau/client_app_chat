const initGlobal = {
  global: {
    loadingApp: true,
  },
};

export const UPDATE_LOADING = 'UPDATE_LOADING';

export const viewsReducer = (state = initGlobal, action) => {
  switch (action.type) {
    case UPDATE_LOADING:
      return { ...state, global: { ...action.payload } };
    default:
      return state;
  }
};
