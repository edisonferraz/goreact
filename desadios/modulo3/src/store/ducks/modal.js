/**
 * Actions Types
 */
export const Types = {
  SHOW_REQUEST: 'modal/SHOW_REQUEST',
  HIDE_REQUEST: 'modal/HIDE_REQUEST',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  show: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_REQUEST:
      return { show: true };
    case Types.HIDE_REQUEST:
      return { show: false };
    default:
      return state;
  }
}

/**
 * Actions Creators
 */
export const Creators = {
  showModalRequest: () => ({
    type: Types.SHOW_REQUEST,
  }),

  hideModalRequest: () => ({
    type: Types.HIDE_REQUEST,
  }),
};
