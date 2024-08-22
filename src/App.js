import { Link, Outlet } from "react-router-dom";
import RootNavigator from "./components/RootNavigator";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <RootNavigator>
      <Dashboard/>
    </RootNavigator>
  );
}

export default App;
