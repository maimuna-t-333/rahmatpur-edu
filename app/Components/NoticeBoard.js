"use client";

import { LuClipboardList } from "react-icons/lu";
import Link from "next/link";

export default function NoticeBoard() {
  return (
    <div className="bg-white p-4 max-w-3xl mx-auto flex flex-col md:flex-row md:justify-between">
      {/* Left Icon */}
      <div className="flex justify-center md:justify-start text-green-600 mb-4 md:mb-0">
        <LuClipboardList className="lg:mr-20" size={100} />
      </div>

      {/* Middle Content */}
      <div className="flex-1 md:ml-4">
        <h2 className="text-lg font-bold text-green-700 mb-2">নোটিশ বোর্ড</h2>
        <ul className="list-disc list-inside space-y-1 text-blue-950">
          <li>
            <Link href="/notice/1" className="hover:text-green-600">
              Eid-E Miladunnabi Sa. 2025 Programm List
            </Link>
          </li>
          <li>
            <Link href="/notice/2" className="hover:text-green-600">
              প্রত‌্যাহিক সমাবেশ
            </Link>
          </li>
          <li>
            <Link href="/notice/3" className="hover:text-green-600">
              অর্ধ বার্ষিক পরীক্ষা ২০২৫ এর উত্তরপত্র জমাদান সংক্রান্ত।
            </Link>
          </li>
          <li>
            <Link href="/notice/4" className="hover:text-green-600">
              MPO EFT সংক্রান্তঃ মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তরাধীন শিক্ষা
              প্রতিষ্ঠানের...
            </Link>
          </li>
          <li>
            <Link href="/notice/5" className="hover:text-green-600">
              উপবৃত্তি প্রাপ্ত শিক্ষার্থীদের শিক্ষা প্রতিষ্ঠান পরিবর্তন/ট্রান্সফারকরণ প্রসঙ্গে।
            </Link>
          </li>
        </ul>

        {/* Bottom Button */}
        <div className="mt-4 text-center md:text-left">
          <Link href="/notice">
            <button className="btn lg:ml-100 rounded-xl bg-green-600 text-white  border-none hover:bg-green-700">
              সকল নোটিশ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}


