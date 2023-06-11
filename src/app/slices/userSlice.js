import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    users: [],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsersData: (state,action) => {
            state.users = action.payload;
        },
   

    },
})


export const { setUsersData } = usersSlice.actions;
export default usersSlice.reducer