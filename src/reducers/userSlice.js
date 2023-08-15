import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllUsers} from "../services/blogsServices.js";




export const fetchUser= createAsyncThunk('/users/fetchUser',async ()=>{
   const response= await getAllUsers();
   return response.date;
})

const usersSlice=createSlice({
   name:"users",
   initialState:[],
   reducers:{}
});
export default usersSlice.reducer;
