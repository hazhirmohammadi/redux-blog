import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import App from "../App.jsx";
import SingleBlogPage from "../component/SingleBlogPage.jsx";

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
      path: "/blogs/:blogId",
      element: <SingleBlogPage/>
   }
]);
