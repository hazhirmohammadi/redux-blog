import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState=[
   {
      id: nanoid(),
      data: new Date().toDateString(),
      title:"[ 1 ] post",
      content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
   },
   {
      id: nanoid(),
      data: new Date().toDateString(),
      title:"[ 2 ] post",
      content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.📜"
   }
];

const blogSlice = createSlice({
   name: "blogs",
   initialState: initialState,
   reducers: {},
});
export default blogSlice.reducer;