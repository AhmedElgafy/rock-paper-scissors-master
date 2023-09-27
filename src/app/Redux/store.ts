import winOrLoseOrDraw from "./slices/winOrLoseOrDraw";
import choiceHand from "./slices/choiceHand";
import gameChoiceReducer from "./slices/gameChoice";
import compChoice from "./slices/compChoice";
import score from "./slices/score";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    gameChoice: gameChoiceReducer,
    choiceHand: choiceHand,
    compChoice: compChoice,
    score: score,
    winOrLoseOrDraw: winOrLoseOrDraw,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
