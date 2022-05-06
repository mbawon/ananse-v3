import http from '../api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const areaFeature = createSlice({
    name: "area",
    initialState: {
        areas: [],
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
            .addCase(createArea.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createArea.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.areas = action.payload
            })
            .addCase(createArea.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(updateArea.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateArea.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.areas = action.payload
            })
            .addCase(updateArea.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(deleteArea.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteArea.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.areas = action.payload
            })
            .addCase(deleteArea.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(fetchAreas.pending, (state) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchAreas.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded'
                state.areas = action.payload
            })
            .addCase(fetchAreas.rejected, (state, action) => {
                state.fetchStatus = 'failed'
                state.error = action.error.message
            })
    }
});

export const createArea= createAsyncThunk('/area', async (area) => {
    console.log("create area>>>>", area);
    const { areaname, fullName, role, active, email } = area
    const response = await http.post('area', { areaname, fullName, role, active, email })
    console.log("Response>>>", response.data);
    return response.data
})

export const updateArea= createAsyncThunk('/area/id', async (area) => {
    console.log("update area>>>>", area);
    const { id, areaname, fullName, role, active, email } = area
    const response = await http.put(`area/${id}`, { areaname, fullName, role, active, email })
    console.log("Response>>>", response.data);
    return response.data
})

export const deleteArea= createAsyncThunk('/area/{id}', async (id) => {
    console.log("delete area>>>>", id);
    const response = await http.patch(`area/${id}`)
    console.log("Response>>>", response.data);
    return response.data
})

export const fetchAreas = createAsyncThunk('/areas', async () => {
    const response = await http.patch(`areas`)
    return response.data
})

export const { resetStatus } = areaFeature.actions

export const selectAreas = (state) => state.areas.area

export default areaFeature.reducer
