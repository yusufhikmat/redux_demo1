const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAction
const axios = require('axios')

const initialState={
    loading:false,
    users:[],
    error:""
}
const fetchUsers=createAsyncThunk("user/fetchUsers",()=>{
    return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.data)
})
const userSlice = createSlice({
    name:"users",
    initialState,
    extraReducers:(builder)=>{ 
        builder.addCase(fetchUsers.pending, (state)=>{
            state.loading=true
        }),
        builder.addCase(fetchUsers.fullfied,(state,action)=>{
            state.loading= false,
            state.users=action.payload
            state.error=""
        }),
        builder.addCase(fetchUsers.fullfied,(state,action)=>{
            state.loading= false,
            state.users=[]
            state.error=action.error.message
        })
    }
})
module.exports = userSlice.reducer
