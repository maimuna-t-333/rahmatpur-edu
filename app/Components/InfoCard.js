"use client";

import {   FaBookOpen, FaUsers,  FaPlus } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { LuClipboardList } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";


export default function InfoCards() {
  const cards = [
    {
      title: "Admission",
      icon: <GiGraduateCap size={70} className="text-green-600" />,
      items: ["ভর্তি বিজ্ঞপ্তি", "অনলাইন আবেদন", "অফলাইন ভর্তির ফরম"],
    },
    {
      title: "নোটিশ",
      icon: <LuClipboardList size={70} className="text-green-600" />,
      items: ["সকল নোটিশ", "শিক্ষার্থীর নোটিশ", "শিক্ষক-কর্মচারীর নোটিশ"],
    },
    {
      title: "পাঠ্যপুস্তক",
      icon: <FaBookOpen size={70} className="text-green-600" />,
      items: ["৬ষ্ঠ শ্রেণি", "৭ম শ্রেণি", "৮ম শ্রেণি", "৯ম ও ১০ম শ্রেণি"],
    },
    {
      title: "জনবল",
      icon: <FaUsers size={70} className="text-green-600" />,
      items: ["শিক্ষকমন্ডলী", "পরিচালনা কমিটি", "কর্মচারী"],
    },
    {
      title: "স্বীকৃতি/অনুমোদন",
      icon: <SlBadge size={70} className="text-green-600" />,
      items: ["পাঠদান/শাখা/বিভাগ অনুমোদন", "স্বীকৃতি নবায়ন", "কমিটি অনুমোদন"],
    },
    {
      title: "অন‌্যান‌্য",
      icon: <FaPlus size={70} className="text-green-600" />,
      items: ["শিক্ষার্থীর তথ‌্য", "তথ‌্য কর্মকর্তা", "অভিযোগ ও প্রতিকার"],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 w-250 mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow p-4 flex items-start gap-12 hover:shadow-lg transition rounded-md"
        >
          {/* Left Icon */}
          <div className="flex-shrink-0 ml-20 mt-4">{card.icon}</div>

          {/* Right Content */}
          <div>
            <h3 className="font-bold text-green-700 mb-2">{card.title}</h3>
            <ul className="space-y-1 text-blue-950 text-sm">
              {card.items.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-green-600 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}



