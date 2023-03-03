import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
// 持久化组件
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import counterSlice from '../features/counter/counterSlice'
import todoistSlice from '../features/todoist/todoistSlice'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     user: userSlice
//   }
// })
const rootReducer = combineReducers({
  todoist: todoistSlice,
  counter: counterSlice
})
const persistConfig = {
  key: 'root',
  version: 1,
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  // 取消非序列化报错
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ serializableCheck: false })]
})
export const persistor = persistStore(store)

// 以下是自动填充的
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()
