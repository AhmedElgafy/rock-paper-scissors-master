import choiceHand from "./slices/choiceHand";
import gameChoiceReducer from "./slices/gameChoice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    gameChoice: gameChoiceReducer,
    choiceHand: choiceHand,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
