import {configureStore} from '@reduxjs/toolkit';
import notificationReducer from './notification/notificationSlice.ts';

const store = configureStore({
  reducer: {
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
