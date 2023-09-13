import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GameChoiceType {
  value: string;
}
const initialState: GameChoiceType = {
  value: "",
};
export const gameChoice=createSlice({
    name:"game choice",
    initialState,
    reducers:{
        setGameChoice:(state, action: PayloadAction<string>)

    }
})
