import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = [
   {
      id:"1",
      fullname:"hazhir mohammadi"
   },
   {
      id:"2",
      fullname:"rezgar mohammadi"
   },
   {
      id:"3",
      fullname:"BlackPerla"
   },

];

const usersSlice=createSlice({
   name:"users",
   initialState,
   reducers:{}
});
export default usersSlice.reducer;
