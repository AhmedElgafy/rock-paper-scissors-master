import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface winOrLoseOrDrawType {
  value: string;
}
const initialState: winOrLoseOrDrawType = {
  value: "",
};
export const winOrLoseOrDrawSlice = createSlice({
  name: "winOrLoseOrDraw",
  initialState,
  reducers: {
    setWinOrLoseOrDraw: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const { setWinOrLoseOrDraw } = winOrLoseOrDrawSlice.actions;
export default winOrLoseOrDrawSlice.reducer;
