import { configureStore } from "@reduxjs/toolkit";
import expensesResultSlice from "./expensesResultSlice";
import valuesSlice from "./valuesSlice";
// ...

export const store = configureStore({
  reducer: { values: valuesSlice, budgedResult: expensesResultSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
