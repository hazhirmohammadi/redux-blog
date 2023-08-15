import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { router } from "./routes";
import {fetchUser} from "./reducers/userSlice.js";

const main=()=>{
   //Fetch all users from api
   store.dispatch(fetchUser());
   createRoot(document.getElementById("root")).render(
       <StrictMode>
          <Provider store={store}>
             <RouterProvider router={router} />
          </Provider>
       </StrictMode>
   );
};
main();