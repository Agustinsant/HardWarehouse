import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as usersService from "../services/userServices"

const userInitialState = {
  loading: false,
  data: {},
  error: "",
  
}

export const sendLoginRequest = createAsyncThunk("LOGIN", usersService.userLoginService)

export const sendLogoutRequest = createAsyncThunk("LOGOUT", usersService.userLogoutService)

export const sendRegisterRequest = createAsyncThunk("REGISTER", usersService.userRegisterService)

export const persistUser = createAsyncThunk("PERSIST", usersService.persistUserService)

export const addToCart = createAsyncThunk("ADD_TO_USER_CART", usersService.addCartUserService)

export const removeFromCart = createAsyncThunk("REMOVE_FROM_USER_CART", usersService.removeCartService)

export const increaseDecreaseCart = createAsyncThunk("INCREASE_DECREASE_USER_CART", usersService.increaseDecreaseCartService)


const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  extraReducers: {
    [sendLoginRequest.pending]: state => {
      state.loading = true
    },
    [sendLoginRequest.fulfilled]: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    [sendLoginRequest.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [sendLogoutRequest.pending]: state => {
      state.loading = true
    },
    [sendLogoutRequest.fulfilled]: (state, action) => {
      state.data = {}
      state.loading = false
    },
    [sendLogoutRequest.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [sendRegisterRequest.pending]: state => {
      state.loading = true
    },
    [sendRegisterRequest.fulfilled]: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    [sendRegisterRequest.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [persistUser.pending]: state => {
      state.loading = true
    },
    [persistUser.fulfilled]: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    [persistUser.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [addToCart.pending]: state => {
      state.loading = true
    },
    [addToCart.fulfilled]: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    [addToCart.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [addToCart.pending]: state => {
      state.loading = true
    },
    [addToCart.fulfilled]: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    [addToCart.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [removeFromCart.pending]: state => {
      state.loading = true
    },
    [removeFromCart.fulfilled]: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    [removeFromCart.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [increaseDecreaseCart.pending]: state => {
      state.loading = true
    },
    [increaseDecreaseCart.fulfilled]: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    [increaseDecreaseCart.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    }
  },
})

export default userSlice.reducer
