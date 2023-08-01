import { createSlice } from "@reduxjs/toolkit"
const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        editUser: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
    }
})

export const { editUser } = userSlice.actions
export default userSlice.reducer