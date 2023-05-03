import cityReducer from '../slices/city'
import usersReducer from '../slices/user'
import loadersSlice from '../slices/loaders'
import filterReducer from '../slices/filters'
import parentArea from '../slices/parentArea'
import propertyReducer from '../slices/property'
import { createWrapper } from 'next-redux-wrapper'
import authSliceReducer from '../slices/authModals'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

const combineReducer = combineReducers({
  user: usersReducer,
  filter: filterReducer,
  property: propertyReducer,
  city: cityReducer,
  authModal: authSliceReducer,
  loaders: loadersSlice,
  parentArea: parentArea,
})

const makeStore = () =>
  configureStore({
    reducer: combineReducer,
    devTools: true,
  })

export const wrapper = createWrapper(makeStore)
