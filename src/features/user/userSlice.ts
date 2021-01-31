import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface userState {
    username: string;
    educationInfo: string;
}

const initialState: userState = {
    username: "",
    educationInfo: "",
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        login: (state, action: PayloadAction<string>) => {
            localStorage.removeItem("name")
            state.username = action.payload

            console.log(state.username)

            localStorage.setItem("name", state.username);
        },
        deletUserHistory() {
            localStorage.removeItem("name");
            localStorage.removeItem("education");
        },
        createEducationInfo: (state, action: PayloadAction<string>) => {
            //storing education info inside localstorage
            state.educationInfo = action.payload;
            localStorage.setItem("education", state.educationInfo);
        },
        deleteEducationInfo: (state, action: PayloadAction<string>) => {
            // resetting localstorage after deletions
            state.educationInfo = action.payload;
            localStorage.setItem("education", state.educationInfo);
        }
    },
});

export const { login, deletUserHistory, createEducationInfo, deleteEducationInfo } = userSlice.actions;

// export const selectUser = (state: RootState) => state.user.username;
export const selectUserFromLocalStorage = (state: RootState) => localStorage.getItem("name")
export const selectEducation = (state: RootState) => localStorage.getItem("education")

export default userSlice.reducer;
