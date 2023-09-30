import { createSlice } from "@reduxjs/toolkit";

export interface CompChoiceType {
  value: string;
}
const compOptions: string[] = ["rock", "paper", "scissors"];

const initialState: CompChoiceType = {
  value: "",
};
export const compChoiceSlice = createSlice({
  name: "compChoice",
  initialState,
  reducers: {
    setCompChoiceHand: (state) => {
      state.value = compOptions[Math.floor(Math.random() * 5) % 3];
    },
    setCompChoiceHand2Default: (state) => {
      state.value = compOptions[Math.floor(Math.random() * 5) % 3];
    },
  },
});
export const { setCompChoiceHand, setCompChoiceHand2Default } =
  compChoiceSlice.actions;
export default compChoiceSlice.reducer;
