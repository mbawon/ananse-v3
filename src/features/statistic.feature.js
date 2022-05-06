import http from '../api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const statisticFeature = createSlice({
    name: "statistic",
    initialState: {
        statistics: [],
    },
    reducers: {
        resetStatus: (state, action) => {
            state.status = "idle"
            state.error = ""
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchStatistics.pending, (state) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchStatistics.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded'
                state.statistics = action.payload
            })
            .addCase(fetchStatistics.rejected, (state, action) => {
                state.fetchStatus = 'failed'
                state.error = action.error.message
            })
    }
});

export const fetchStatistics = createAsyncThunk('/get-statistics', async () => {
    const response = await http.patch(`get-statistics`)
    return response.data
})

export const { resetStatus } = statisticFeature.actions

export const selectStatistics = (state) => state.statistic.statistics

export default statisticFeature.reducer
