export default function PrincipalCard() {
  return (
    <div className="bg-white shadow  flex flex-col items-start gap-2">
      {/* Heading */}
      <h3 className="bg-green-700 px-22 py-2 text-white font-bold text-xs">প্রধান শিক্ষক</h3>

      <img className="ml-8" src="/PrincipalImage.PNG"/>

      {/* Name */}
      <p className="text-blue-950 ml-14">মোঃ আব্দুল কাদির</p>



      {/* Details link/button */}
      <a
        href="#"
        className="ml-20 text-xs  text-blue-950 px-4 py-2 rounded hover:bg-green-700 transition"
      >
        বিস্তারিত
      </a>
    </div>
  );
}
