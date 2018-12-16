/**
 * Actions Types
 */
export const Types = {
  ADD_REQUEST: 'markers/ADD_REQUEST',
  ADD_SUCCESS: 'markers/ADD_SUCCESS',
  ADD_FAILURE: 'markers/ADD_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function markers(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/**
 * Actions Creators
 */
export const Creators = {
  addMarkerRequest: marker => ({
    type: Types.ADD_REQUEST,
    payload: { marker },
  }),

  addMarkerSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addMarkerFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
