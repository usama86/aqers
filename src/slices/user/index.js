import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";

// import {
//   logOut,
//   signUp,
//   signIn,
//   userSyncing,
//   signInWithGoogle,
//   signInWithFacebook,
// } from "utils/Auth";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authLoader: false,
    initialLoad: false,
    isLoggedIn: false,
    loading: "idle",
    error: "",
    user: {},
  },
  // reducers: {
  //   loginHandler(state, action) {
  //     state.error = "";
  //     state.isLoggedIn = true;
  //     state.user = action.payload;
  //   },
  // },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     // debugger
  //     return (state = {
  //       ...state,
  //       ...action.payload.category,
  //     });
  //   },
  // },
});

// export const doLogin = (userName, password) => {
//   return async (dispatch) => {
//     try {
//       dispatch(updateAuthLoader(true));
//       const signInUserDetails = await signIn(userName, password);
//       dispatch(loginHandler(signInUserDetails));
//     } catch (error) {
//       captureException(
//         error,
//         SENTRY.ERROR,
//         "Error in function slices/user/doLogin"
//       );
//       dispatch(handleAuthError(error.message));
//     }
//     dispatch(updateAuthLoader(false));
//   };
// };

// export const selectAuthState = (state) => state.user;
// export const {
//   loginHandler,
//   logoutHandler,
//   syncUserSession,
//   handleAuthError,
//   signUpHandler,
//   updateAuthLoader,
// } = userSlice.actions;
export default userSlice.reducer;
