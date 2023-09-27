import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CompChoiceType {
  value: string;
}
const compOptions: string[] = ["rock", "paper", "scissors"];

const initialState: CompChoiceType = {
  value: compOptions[Math.floor(Math.random() * 5) % 3],
};
export const compChoiceSlice = createSlice({
  name: "compChoice",
  initialState,
  reducers: {
    setCompChoiceHand: (state) => {
      state.value = compOptions[Math.floor(Math.random() * 5) % 3];
    },
  },
});
export const { setCompChoiceHand } = compChoiceSlice.actions;
export default compChoiceSlice.reducer;
