import {configureStore} from "@reduxjs/toolkit";
import blogReducer from "../reducers/blogSlice.js";
export const store=configureStore({
   reducer:{
      blogs:blogReducer,
   }
})