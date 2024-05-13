// Define action types
export const SUBMIT_JOB_APPLICATION = 'SUBMIT_JOB_APPLICATION';
export const SUBMIT_JOB_APPLICATION_SUCCESS = 'SUBMIT_JOB_APPLICATION_SUCCESS';
export const SUBMIT_JOB_APPLICATION_FAILURE = 'SUBMIT_JOB_APPLICATION_FAILURE';

// Define action creators
export const submitJobApplication = (applicationData: any) => ({
  type: SUBMIT_JOB_APPLICATION,
  payload: applicationData,
});

export const submitJobApplicationSuccess = () => ({
  type: SUBMIT_JOB_APPLICATION_SUCCESS,
});

export const submitJobApplicationFailure = (error: string) => ({
  type: SUBMIT_JOB_APPLICATION_FAILURE,
  payload: error,
});
