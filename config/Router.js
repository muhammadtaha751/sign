import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate
} from "react-router-dom"

import Signup from "../components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
    children: [
      ,
      {
        path: "/",
        element: <Main />,
      }
    ]
  }
]);

function Router() {
  return <RouterProvider router={router} />
}

function Main() {
  const navigate = useNavigate()

  return <div>

  </div>
}

export default Router