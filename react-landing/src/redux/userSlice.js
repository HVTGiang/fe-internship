import { createSlice } from "@reduxjs/toolkit"
const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: "Charles",
        lastName: "Deo",
        title: "UI/UX Designer",
        gender: "male",
        birthday: "1980-06-26",
        address: "2239 Hog Camp Road, Schaumburg",
        email: "charles5182@ummoh.com",
        phone: "33757005467",
        img: "./img/user_img.png",
        imgCover: "./img/info_cover.png",
    },
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