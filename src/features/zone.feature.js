import http from '../api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const zoneFeature = createSlice({
    name: "zone",
    initialState: {
        zones: [],
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
            .addCase(createZone.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createZone.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.zone = action.payload
            })
            .addCase(createZone.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(updateZone.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateZone.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.zone = action.payload
            })
            .addCase(updateZone.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(deleteZone.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteZone.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.zone = action.payload
            })
            .addCase(deleteZone.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(fetchZones.pending, (state) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchZones.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded'
                state.zone = action.payload
            })
            .addCase(fetchZones.rejected, (state, action) => {
                state.fetchStatus = 'failed'
                state.error = action.error.message
            })
    }
});

export const createZone = createAsyncThunk('/zone', async (zone) => {
    console.log("create zone>>>>", zone);
    const { zonename, fullName, role, active, email } = zone
    const response = await http.post('zone', { zonename, fullName, role, active, email })
    console.log("Response>>>", response.data);
    return response.data
})

export const updateZone= createAsyncThunk('/zone/id', async (zone) => {
    console.log("update zone>>>>", zone);
    const { id, zonename, fullName, role, active, email } = zone
    const response = await http.put(`zone/${id}`, { zonename, fullName, role, active, email })
    console.log("Response>>>", response.data);
    return response.data
})

export const deleteZone= createAsyncThunk('/zone/{id}', async (id) => {
    console.log("delete zone>>>>", id);
    const response = await http.patch(`zone/${id}`)
    console.log("Response>>>", response.data);
    return response.data
})

export const fetchZones = createAsyncThunk('/zones', async () => {
    const response = await http.patch(`zones`)
    return response.data
})

export const { resetStatus } = zoneFeature.actions

export const selectZones = (state) => state.zones.zone

export default zoneFeature.reducer
