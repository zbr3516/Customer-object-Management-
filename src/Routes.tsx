import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Signup from "./Signup";

export const router =createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", 
            element: <Login/>},
            {path: "signup", 
            element: <Signup/>}
        ]
    }
])