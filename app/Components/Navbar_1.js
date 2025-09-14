import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-primary-content p-4 mx-21">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 mx-8">
        
        {/* Logo + School Name */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <img
            className="w-12 h-12 rounded-full"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQODoUriwF61XDaYa_SpXFr7auZ4H7xjNQfFQQnXXuySRFkrDiUekSRSQBDGyNG6ljfmkejwqs6sdBxc1TYQ5qGpqI2AolRPH-7ALL3zzceGUCOozWL_9_YEFQ_xEusakiznDTPoPy7UjR/w250-h320/primary-education.jpg"
            alt="Logo"
          />
          <h1 className="text-lg md:text-xl leading-tight">
            রহমতপুর আদর্শ বালিকা উচ্চ বিদ্যালয় <br />
            <span className="text-xs">
              শিক্ষা জাতির মেরুদন্ড, শিক্ষা হোক সবার জন‌্য
            </span>
          </h1>
        </div>

        {/* School Info */}
        <div className="text-xs text-center md:text-right">
          <p>ইআইআইএন: ১২১১২৬; এমপিও কোড: ৮৭০২০৯১২০৪</p>
          <p>দিনাজপুর বোর্ড কোড: ৮৯৯১; কারিগরি বোর্ড কোড: ১৮১৭৪</p>
        </div>
      </div>
    </nav>
  );
}


