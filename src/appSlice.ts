import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import type {RootState} from './store';

// Define a type for the slice state
interface AppState {
  user: {
    userToken?: string;
    email?: string;
    firstname?: string;
    lastName?: string;
    organisationId?: string;
    refreshToken?: string;
    userId?: string;
  };
}

// Define the initial state using that type
const initialState: AppState = {
  user: {},
};

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logout: () => initialState,
    userLogin: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
    // userLogin: state => {
    //   state.user ;
    // },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const {logout, userLogin} = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default appSlice.reducer;
