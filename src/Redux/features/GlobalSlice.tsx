import { createSlice, current } from "@reduxjs/toolkit";
import jobs from "../../data/jobData";
const initialState = {
  jobList: jobs,
};
export const GlobalSlice = createSlice({
  name: "jobPortal",
  initialState,
  reducers: {
    applyingJob: (state: any, action: any) => {
      const jobToApply = state.jobList.find(
        (job: any) => job.id === action.payload
      );
      if (jobToApply) {
        // Create a new array with the updated job status

        const updatedJobList = state.jobList.map((job: any) => {
          return job.id === action.payload ? { ...job, status: true } : job;
        });
        // Update the state with the new job list
        state.jobList = updatedJobList;
      }
    },
  },
});

export const { applyingJob } = GlobalSlice.actions;
export default GlobalSlice.reducer;
