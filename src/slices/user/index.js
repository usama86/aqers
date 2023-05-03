import { SENTRY } from 'utils/Constant'
import { HYDRATE } from 'next-redux-wrapper'
import { createSlice } from '@reduxjs/toolkit'
import { captureException } from 'utils/Sentry'

import {
  logOut,
  signUp,
  signIn,
  userSyncing,
  signInWithGoogle,
  signInWithFacebook,
} from 'utils/Auth'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    authLoader: false,
    initialLoad: false,
    isLoggedIn: false,
    loading: 'idle',
    error: '',
    user: {},
  },
  reducers: {
    updateAuthLoader(state, action) {
      state.authLoader = action.payload
    },
    signUpHandler(state, action) {
      state.error = ''
      state.isLoggedIn = true
      state.user = action.payload
    },
    loginHandler(state, action) {
      state.error = ''
      state.isLoggedIn = true
      state.user = action.payload
    },

    logoutHandler(state) {
      state.isLoggedIn = false
      state.user = {}
      state.initialLoad = true
    },

    syncUserSession(state, action) {
      state.initialLoad = true
      state.isLoggedIn = true
      state.user = action.payload
    },

    handleAuthError(state, action) {
      state.initialLoad = true
      state.error = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // debugger
      return (state = {
        ...state,
        ...action.payload.category,
      })
    },
  },
})

export const doLogin = (userName, password) => {
  return async (dispatch) => {
    try {
      dispatch(updateAuthLoader(true))
      const signInUserDetails = await signIn(userName, password)
      dispatch(loginHandler(signInUserDetails))
    } catch (error) {
      captureException(
        error,
        SENTRY.ERROR,
        'Error in function slices/user/doLogin',
      )
      dispatch(handleAuthError(error.message))
    }
    dispatch(updateAuthLoader(false))
  }
}
export const doSocialLogin = (provider) => {
  return async (dispatch) => {
    try {
      dispatch(updateAuthLoader(true))
      switch (provider) {
        case 'google':
          await signInWithGoogle()
          break
        case 'facebook':
          await signInWithFacebook()
          break
      }
    } catch (error) {
      captureException(
        error,
        SENTRY.ERROR,
        'Error in function slices/user/doSocialLogin',
      )
      dispatch(handleAuthError(error.message))
    }
    dispatch(updateAuthLoader(false))
  }
}

export const doSignUp = (userName, password, name) => {
  return async (dispatch) => {
    try {
      dispatch(updateAuthLoader(true))
      const userSignUpDetails = await signUp(userName, password, name)
      dispatch(signUpHandler(userSignUpDetails))
    } catch (error) {
      captureException(
        error,
        SENTRY.ERROR,
        'Error in function slices/user/doSignUp',
      )
      dispatch(handleAuthError(error.message))
    }
    dispatch(updateAuthLoader(false))
  }
}

export const doLogout = () => {
  return async (dispatch) => {
    try {
      dispatch(updateAuthLoader(true))
      await logOut()
      dispatch(logoutHandler())
    } catch (error) {
      captureException(
        error,
        SENTRY.ERROR,
        'Error in function slices/user/doLogout',
      )
      dispatch(handleAuthError(error.message))
    }
    dispatch(updateAuthLoader(false))
  }
}

export const doUserSessionSync = () => {
  return async (dispatch) => {
    try {
      dispatch(updateAuthLoader(true))
      const userSync = await userSyncing()

      dispatch(syncUserSession(userSync))
    } catch (error) {
      captureException(
        error,
        SENTRY.ERROR,
        'Error in function slices/user/doUserSessionSync',
      )
      dispatch(handleAuthError(error.message))
    }
    dispatch(updateAuthLoader(false))
  }
}

export const selectAuthState = (state) => state.user
export const {
  loginHandler,
  logoutHandler,
  syncUserSession,
  handleAuthError,
  signUpHandler,
  updateAuthLoader,
} = userSlice.actions
export default userSlice.reducer
