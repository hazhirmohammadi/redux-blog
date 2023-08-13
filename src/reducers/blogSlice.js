import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
   blogs: [
      {
         id: nanoid(),
         data: new Date().toDateString(),
         title: "[ 1 ] post",
         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
         id: nanoid(),
         data: new Date().toDateString(),
         title: "[ 2 ] post",
         content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.📜"
      }
   ]
};

const blogSlice = createSlice({
   name: "blogs",
   initialState: initialState,
   reducers: {
      blogAdded: {
         reducer(state, action) {
            state.blogs.push(action.payload)
         },
         prepare(title, content) {
            return {
               payload: {
                  id: nanoid(),
                  title,
                  content
               },
            };
         },
      },
      /**/
      blogUpdated: (state, action) => {
         const {id, title, content} = action.payload;
         const existingBlog = state.blogs.find(blog => blog.id === id);
         if (existingBlog) {
            existingBlog.title = title;
            existingBlog.content = content;
         }
      }
      /**/
      , blogDeleted: (state, action) => {
         const {id} = action.payload;
         state.blogs = state.blogs.filter(blog => blog.id !== id);
      }
   },
});

export const selectAllBlogs=state=>state.blogs.blogs;
export const  selectBlogsId=(state,blogId)=> state.blogs.blogs.find(blog=>blog.id===blogId);
export const {blogAdded, blogUpdated, blogDeleted} = blogSlice.actions;

export default blogSlice.reducer;