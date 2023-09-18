import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { alertSlice } from './alertSlice.js';
// import {persistReducer, persistStore} from 'redux-persist'
// import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    alerts: alertSlice.reducer
})
// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: rootReducer,
});

export default store