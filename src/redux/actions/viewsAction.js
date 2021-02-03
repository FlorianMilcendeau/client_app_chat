import { UPDATE_LOADING } from '../reducers/viewsReducer';

export const toggleLoadingApp = (bool) => ({
  type: UPDATE_LOADING,
  payload: { loadingApp: bool },
});
