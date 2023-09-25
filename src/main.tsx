import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "./ErrorPage"
import {
  UserCreate,
  actionCreateUser,
} from "./feature/user/components/UserCreate"
import { UserList, loaderUsers } from "./feature/user/components/UserList"
import "./index.css"
import { Root } from "./routes/Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "users",
        element: <UserList />,
        loader: loaderUsers,
      },
      {
        path: "users/create",
        element: <UserCreate />,
        action: actionCreateUser,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
