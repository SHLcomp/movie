// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
//assets
import wave from '../assets/wave.svg';
// components
import Nav from "../components/nav";

// loader, function that tell react browser how to load the data
export function mainLoader(){
  // we need a helper function (file) to help us use this on multiple files
  const userName = fetchData("userName");
  return { userName }
}

const Main = () => {
  const {userName} = useLoaderData()
  return (
    <div className="layout">
      <Nav userName={userName} />

      <main>
        <Outlet />  {/* puts anything within the children element in the route (in App.jsx) into this one comp */}
      </main>
      <img src={wave} alt="" />
    </div>
  )
}

export default Main;
