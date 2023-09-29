import { Link, Outlet, useLocation } from "react-router-dom"
import { userListPath } from "../feature/user/routes"
import { storyListPath } from "../feature/user/story/routes"
export const Root = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <>
      <div>
        <div className="h-16 bg-slate-500"></div>
        <div className="flex">
          <nav className="w-48 p-3">
            <div
              className={`h-8 p-1 pl-2 bg-slate-50 hover:bg-slate-200 ${
                pathname.includes(userListPath) ? "bg-slate-200" : ""
              }`}
            >
              <Link className="block w-full h-full" to={userListPath}>
                User
              </Link>
            </div>
            <div
              className={`h-8 p-1 pl-2 bg-slate-50 hover:bg-slate-200 ${
                pathname.includes(storyListPath) ? "bg-slate-200" : ""
              }`}
            >
              <Link className="block w-full h-full" to={storyListPath}>
                Story
              </Link>
            </div>
          </nav>
          <div className="grow p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
