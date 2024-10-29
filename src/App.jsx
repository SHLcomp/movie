// CreateBrowserRouter
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// imports
import Dashboard, { dashboardLoader } from './pages/Dashboard'
import Error from "./pages/Error";
import Main, { mainLoader } from "./main/main";
import { logoutAction } from "./actions/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: "logout",
        action: logoutAction,
      }
    ],
  },
  {
    path: "*",
    element: <Error/>,
  }

]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  )
};

export default App;
