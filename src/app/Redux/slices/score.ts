import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ScoreType {
  value: number;
}
const initialState: ScoreType = {
  value: 0,
};
export const scoreSlice = createSlice({
  name: "Score",
  initialState,
  reducers: {
    increaseScore: (state) => {
      state.value = state.value + 1;
    },
    decreaseScore: (state) => {
      if (!(state.value - 1 < 0)) {
        state.value = state.value - 1;
      }
    },
  },
});
export const { increaseScore, decreaseScore } = scoreSlice.actions;
export default scoreSlice.reducer;
