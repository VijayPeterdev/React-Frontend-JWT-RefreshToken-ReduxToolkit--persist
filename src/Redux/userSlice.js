import {createSlice} from '@reduxjs/toolkit'



const userSlice = createSlice({
    name:"user",
    initialState : {
        isFetching : false, 
        userdata : {},
        error : false,
        errordata : {},
    },
    reducers : {

        loginUserStart : (state) => {
            state.isFetching = true;
        },
        loginUserSuccess : (state,action) => {

            state.isFetching = false;
            state.userdata = action.payload;
          
        },
        loginUserFailed : (state,action) => {
            state.isFetching = false;
            state.errordata = action.payload;
            state.error = true;

        },
    },
});



export  const {loginUserStart,loginUserSuccess,loginUserFailed} =  userSlice.actions;
export  default userSlice.reducer;

