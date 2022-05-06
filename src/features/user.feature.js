import http from '../api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const userFeature = createSlice({
    name: "user",
    initialState: {
        user: [],
    },
    reducers: {
        resetStatus: (state, action) => {
            state.status = "idle"
            state.fetchStatus = "idle"
            state.error = ""
            state.fetchError = ""
        }
    },
    extraReducers(builder) {
        builder
            .addCase(createUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
            .addCase(createUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(updateUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(activateDeactivateUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(activateDeactivateUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
            .addCase(activateDeactivateUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(fetchUsers.pending, (state) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded'
                state.user = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.fetchStatus = 'failed'
                state.error = action.error.message
            })
    }
});

export const createUser = createAsyncThunk('/user', async (user) => {
    console.log("create user>>>>", user);
    const { username, fullName, role, active, email } = user
    const response = await http.post('user', { username, fullName, role, active, email })
    console.log("Response>>>", response.data);
    return response.data
})

export const updateUser = createAsyncThunk('/user/id', async (user) => {
    console.log("update user>>>>", user);
    const { id, username, fullName, role, active, email } = user
    const response = await http.put(`user/${id}`, { username, fullName, role, active, email })
    console.log("Response>>>", response.data);
    return response.data
})

export const activateDeactivateUser = createAsyncThunk('/user/{id}/status/{status}', async (user) => {
    console.log("deactivate/Activate user>>>>", user);
    const { id, status } = user
    const response = await http.patch(`user/${id}/status/${status}`)
    console.log("Response>>>", response.data);
    return response.data
})

export const fetchUsers = createAsyncThunk('/users', async () => {
    const response = await http.patch(`users`)
    return response.data
})

export const { resetStatus } = userFeature.actions

export const selectUsers = (state) => state.user.user

export default userFeature.reducer
