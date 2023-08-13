import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import App from "../App.jsx";
import SingleBlogPage from "../component/SingleBlogPage.jsx";
import CreateBlogForm from "../component/CreateBlogForm.jsx";
import EditBlogForm from "../component/EditBlogForm.jsx";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h3 className="text-center">Not Found 😢...</h3>
      , children: [
         {
            path: "/",
            element: <App/>,
         }
      ]
   },
   {
      path: "/blogs/create-blog",
      element: <CreateBlogForm/>
   },
   {
      path: "/blogs/:blogId",
      element: <SingleBlogPage/>
   },
   {
      path: "/editBlog/:blogId",
      element: <EditBlogForm/>
   }
]);
