import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userDate : null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => { // method for login
            state.status = true;
            state.userDate = action.payload.userDate;
        },
        logout: (state) => {
            state.status = false;
            state.userDate = null;
        }
    }
})

export const {login, logout} = authSlice.actions // action are methods inside reducers

export default authSlice.reducer;