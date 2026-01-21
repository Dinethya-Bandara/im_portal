import logo from "../assets/logo.png";
import "./NavBar.css";
import GradientButton from "../components/GradientButton.jsx";

export default function Navbar() {
  return (

    <div className="flex w-full h-22 py-2 px-6 items-center justify-between bg-white">

      {/* left div */}
      <div className="flex h-full items-center">
        <img src={logo} className="h-9/12" alt="IM Portal Logo" />
        <div className="brand">
           <div className="text-3xl font-bold ml-2">IM PORTAL</div>
           <div className="ml-2 text-xs text-gray-400">Department of Industrial Management</div>
        </div>
      </div>

      {/* nav links */}
      <div className="flex gap-4">
        <div className="p-1 rounded-md px-4 hover:bg-gray-300 transition">
          <h3>Home</h3>
        </div>
        <div className="p-1 rounded-md px-4 hover:bg-gray-300 transition">
          <h3>About</h3>
        </div>
      </div >

      {/* action set */}
      <div className="flex h-full items-center">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-solid">Sign Up</button>
      </div>

    </div>
  );
}