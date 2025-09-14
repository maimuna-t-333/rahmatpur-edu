export default function ImportantLinks() {
  const links = [
    { name: "শিক্ষা মন্ত্রণালয়", url: "#" },
    { name: "মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ", url: "#" },
    { name: "মাধ্যমিক ও উচ্চশিক্ষা, রংপুর অঞ্চল", url: "#" },
    { name: "দিনাজপুর বোর্ড (ই-ফাইলিং, রেজিঃ, ফরম ফিলাপ)", url: "#" },
    { name: "দিনাজপুর বোর্ড (অফিসিয়াল সাইট, নোটিশ)", url: "#" },
    { name: "বাংলাদেশ কারিগরি শিক্ষা বোর্ড", url: "#" },
    { name: "EMIS", url: "#" },
    { name: "BANBEIS", url: "#" },
    { name: "উপবৃত্তি (HSP-MIS)", url: "#" },
  ];

  return (
    <div className="bg-white  rounded">
      {/* Heading */}
      <h3 className="text-green-700 font-bold text-sm mb-3">
        গুরত্বপুর্ণ লিংকসমুহ
      </h3>

      {/* Links list */}
      <ul className="space-y-1 text-blue-950">
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
