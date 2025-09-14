import { FaUserCircle } from "react-icons/fa";

export default function AdminPanel() {
  return (
    <div className="bg-white shadow flex flex-col items-center gap-4">
      {/* Heading */}
      <h3 className="text-white bg-green-700 px-21 font-bold text-xs py-3 ">এডমিন প্যানেল</h3>

      {/* User Image */}
      <FaUserCircle className="text-green-700" size={30}/>

      {/* Login Button */}
      <a href="/login" className="text-black text-xs mb-3 hover:text-blue-950">
        লগইন
      </a>
    </div>
  );
}
