import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import OrderInfo from "../Pages/OrderInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
        {
            path: "",
            element: <Home />,
        },
        {
            path: "/home",
            element: <Home/>,
        },
        {
            path: "/orderInfo",
            element: <OrderInfo/>,
        },
    ]
  },
]);
export default router;
