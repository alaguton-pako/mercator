import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <NavLink to="/dashboard">
        <Button className="cursor-pointer">Go to Dashboard</Button>
      </NavLink>
    </div>
  );
};

export default Login;
