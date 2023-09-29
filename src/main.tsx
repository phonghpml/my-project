import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import axios from "axios"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "./ErrorPage"
import {
  UserCreate,
  actionCreateUser,
} from "./feature/user/components/UserCreate"
import { UserList, loaderUsers } from "./feature/user/components/UserList"
import { StoryList } from "./feature/user/story/components/StoryList"
import "./index.css"
import { Root } from "./routes/Root"
import { storyControllerGetStories } from "./generated/mybe"

axios.defaults.baseURL = "http://localhost:2000"

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
      {
        path: "stories",
        element: <StoryList />,
        loader: () => {
          return storyControllerGetStories({ limit: 20, pageNumber: 0 })
        },
      },
    ],
  },
])
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
)
