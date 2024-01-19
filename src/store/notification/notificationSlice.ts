import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import NotificationInfo from '../../common/types/notification/notificationInfo.type.ts';


export type NotificationState = {
  isVisible: boolean,
  notification?: NotificationInfo
}

const initialState: NotificationState = {
  isVisible: false,
  notification: undefined
}

export const notificationSlice = createSlice({
  name: 'notificationSlice',
  initialState,
  reducers: {
    onShow: (state, action: PayloadAction<NotificationInfo>) => ({
      ...state,
      isVisible: true,
      notification: action.payload,
    }),
    onHide: (state) => ({
      ...state,
      isVisible: false,
    }),
  }
})
export const { onShow, onHide} = notificationSlice.actions

export default notificationSlice.reducer