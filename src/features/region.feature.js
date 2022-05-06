import http from '../api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const regionFeature = createSlice({
    name: "region",
    initialState: {
        regions: [],
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
            .addCase(createRegion.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createRegion.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.region = action.payload
            })
            .addCase(createRegion.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(updateRegion.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateRegion.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.region = action.payload
            })
            .addCase(updateRegion.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(deleteRegion.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteRegion.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.region = action.payload
            })
            .addCase(deleteRegion.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(fetchRegions.pending, (state) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchRegions.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded'
                state.region = action.payload
            })
            .addCase(fetchRegions.rejected, (state, action) => {
                state.fetchStatus = 'failed'
                state.error = action.error.message
            })
    }
});

export const createRegion= createAsyncThunk('/region', async (region) => {
    console.log("create region>>>>", region);
    const { regionname, fullName, role, active, email } = region
    const response = await http.post('region', { regionname, fullName, role, active, email })
    console.log("Response>>>", response.data);
    return response.data
})

export const updateRegion= createAsyncThunk('/region/id', async (region) => {
    console.log("update region>>>>", region);
    const { id, regionname, fullName, role, active, email } = region
    const response = await http.put(`region/${id}`, { regionname, fullName, role, active, email })
    console.log("Response>>>", response.data);
    return response.data
})

export const deleteRegion= createAsyncThunk('/region/{id}', async (id) => {
    console.log("delete region>>>>", id);
    const response = await http.patch(`region/${id}`)
    console.log("Response>>>", response.data);
    return response.data
})

export const fetchRegions = createAsyncThunk('/regions', async () => {
    const response = await http.patch(`regions`)
    return response.data
})

export const { resetStatus } = regionFeature.actions

export const selectRegions = (state) => state.regions.region

export default regionFeature.reducer
