import http from '../api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const loginFeature = createSlice({
    name: "login",
    initialState: {
        user: "",
        publicKey: ""
    },
    reducers: {
        resetStatus: (state, action) => {
            state.status = "idle"
            state.keyStatus = "idle"
            state.error = ""
            state.keyError = ""
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getPublicKey.pending, (state) => {
                state.keyStatus = 'loading'
            })
            .addCase(getPublicKey.fulfilled, (state, action) => {
                state.keyStatus = 'succeeded'
                state.getPublicKey = action.payload
            })
            .addCase(getPublicKey.rejected, (state, action) => {
                state.keyStatus = 'failed'
                state.keyError = action.error.message
            })
            .addCase(login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.login = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
});

export const getPublicKey = createAsyncThunk('/auth/username', async (username) => {
    const response = await http.get(`auth/${username}/key`)
    return response.data
})

export const login = createAsyncThunk('/login', async (credential) => {
    console.log("Login credentials>>>>",credential);
    const response = await http.post('login', credential)
    console.log("Response>>>", response.data);
    return response.data
})

export const { resetStatus } = loginFeature.actions

export const selectUser = (state) => state.login.user
export const selectKey = (state) => state.login.publicKey

export default loginFeature.reducer
