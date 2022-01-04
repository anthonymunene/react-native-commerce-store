import { IAction } from '../types/IAction';
import { ApplicationState } from '../types/stores/app';
import { ACTION_TYPES } from '../constants/actionTypes';

const initialState: ApplicationState = {
  isLoading: true,
};

export default (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case ACTION_TYPES.SPLASH.SPLASH_LAUNCHED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
