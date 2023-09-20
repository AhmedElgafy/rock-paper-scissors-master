import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface choiceHandType {
  value: string;
}
const initialState: choiceHandType = {
  value: "",
};
export const choiceHandSlice = createSlice({
  name: "game choice",
  initialState,
  reducers: {
    setChoiceHand: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const { setChoiceHand: setChoiceHand } = choiceHandSlice.actions;
export default choiceHandSlice.reducer;
