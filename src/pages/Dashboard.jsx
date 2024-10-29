// rrd imports
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

// loader, function that tell react browser how to load the data
export function dashboardLoader(){
  // we need a helper function (file) to help us use this on multiple files
  const userName = fetchData("userName");
  return { userName }
}

const Dashboard = () => {
  const {userName} = useLoaderData()
  return (
    <div>
      <h4>Welcome, {userName}</h4>
      <h4>Dashboard in the outlet</h4>
    </div>
  )
}

export default Dashboard;
