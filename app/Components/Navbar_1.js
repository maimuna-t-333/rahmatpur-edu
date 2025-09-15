import Link from "next/link";

export default function Navbar_1() {
  return (
    <nav className="bg-green-600 text-primary-content p-4 lg:mx-21">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10">

        {/* Logo + School Name */}
        <Link href='/' className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
          <img
            className="w-16 h-16 rounded-full"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQODoUriwF61XDaYa_SpXFr7auZ4H7xjNQfFQQnXXuySRFkrDiUekSRSQBDGyNG6ljfmkejwqs6sdBxc1TYQ5qGpqI2AolRPH-7ALL3zzceGUCOozWL_9_YEFQ_xEusakiznDTPoPy7UjR/w250-h320/primary-education.jpg"
            alt="Logo"
          />
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl font-semibold leading-snug">
              রহমতপুর আদর্শ বালিকা উচ্চ বিদ্যালয়
            </h1>
            <span className="text-xs text-gray-200 mt-1 sm:mt-0">
              শিক্ষা জাতির মেরুদন্ড, শিক্ষা হোক সবার জন‌্য
            </span>
          </div>
        </Link>

        {/* School Info - hidden on mobile */}
        <div className="hidden md:block text-xs text-right">
          <p>ইআইআইএন: ১২১১২৬; এমপিও কোড: ৮৭০২০৯১২০৪</p>
          <p>দিনাজপুর বোর্ড কোড: ৮৯৯১; কারিগরি বোর্ড কোড: ১৮১৭৪</p>
        </div>

      </div>
    </nav>
  );
}

