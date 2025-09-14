import { FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 mx-21">
      <div className="flex flex-wrap justify-center gap-10">

        {/* Home */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer flex items-center gap-1 text-black">
            <FaHome /> হোম
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52"
          >
            <li><a>Sub Item 1</a></li>
            <li><a>Sub Item 2</a></li>
          </ul>
        </div>

        {/* প্রতিষ্ঠান পরিচিতি */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer text-black">
            প্রতিষ্ঠান পরিচিতি
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52">
            <li><a>ইতিহাস</a></li>
            <li><a>শিক্ষকবৃন্দ</a></li>
          </ul>
        </div>

        {/* শিক্ষার্থীর তথ‌্য */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer text-black">
            শিক্ষার্থীর তথ‌্য
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52">
            <li><a>রেজিস্ট্রেশন</a></li>
            <li><a>প্রবেশপত্র</a></li>
          </ul>
        </div>

        {/* পাঠদানসংক্রান্ত তথ্য */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer text-black">
            পাঠদানসংক্রান্ত তথ্য
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52">
            <li><a>সিলেবাস</a></li>
            <li><a>রুটিন</a></li>
          </ul>
        </div>

        {/* নোটিশ */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer text-black">
            নোটিশ
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52">
            <li><a>সাম্প্রতিক নোটিশ</a></li>
            <li><a>পুরাতন নোটিশ</a></li>
          </ul>
        </div>

        {/* ফলাফল */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer text-black">
            ফলাফল
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52">
            <li><a>বার্ষিক</a></li>
            <li><a>মধ্যবর্তী</a></li>
          </ul>
        </div>

        {/* কমিটি */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer text-black">
            কমিটি
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52">
            <li><a>ম্যানেজিং কমিটি</a></li>
            <li><a>অভিভাবক প্রতিনিধি</a></li>
          </ul>
        </div>

        {/* অন্যান্য */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer text-black">
            অন্যান্য
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52">
            <li><a>ডাউনলোড</a></li>
            <li><a>সার্টিফিকেট</a></li>
          </ul>
        </div>

        {/* গ‌্যালারী */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer text-black">
            গ‌্যালারী
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52">
            <li><a>ছবি</a></li>
            <li><a>ভিডিও</a></li>
          </ul>
        </div>

        {/* যোগাযোগ */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer text-black">
            যোগাযোগ
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52">
            <li><a>ঠিকানা</a></li>
            <li><a>ফোন</a></li>
          </ul>
        </div>

        {/* লগইন */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="cursor-pointer text-black">
            লগইন
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52">
            <li><a>অ্যাডমিন</a></li>
            <li><a>শিক্ষার্থী</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

