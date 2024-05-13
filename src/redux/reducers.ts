import {
    SUBMIT_JOB_APPLICATION,
    SUBMIT_JOB_APPLICATION_SUCCESS,
    SUBMIT_JOB_APPLICATION_FAILURE,
  } from './actions';
  
  // Define initial state
  const initialState = {
    loading: false,
    error: null,
    applications: [],
  };
  
  // Define reducer function
  const reducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SUBMIT_JOB_APPLICATION:
        return {
          ...state,
          loading: true,
        };
      case SUBMIT_JOB_APPLICATION_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          applications: [...state.applications, action.payload], // Assuming action.payload is the new application data
        };
      case SUBMIT_JOB_APPLICATION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  