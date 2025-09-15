import Carousel from './Components/Carousel'
import NoticeBoard from './Components/NoticeBoard'
import InfoCard from './Components/InfoCard'
import PrincipalCard from './Components/PrincipalCard'
import AdminPanel from './Components/AdminPanel';
import Map from './Components/Map';
import ImportantLinks from './Components/ImportantLinks';

export default function Page() {
  return (
    <main className="min-h-screen  p-4">
  <div className="container mx-auto flex flex-col lg:flex-row gap-6">
    
    {/* Left/Main Section */}
    <div className="flex-1 space-y-6">
      
      <div className="w-250 h-64 lg:mb-36 ">
        <Carousel/>
      </div>

      {/* Marquee */}
      <div className="flex bg-white p-2 shadow">
        <button className="btn bg-green-600 border-none rounded-none  ml-3">শিরোনাম:</button>
        <marquee className="text-blue-950 ml-3 mt-2">২০২৫ সালের ১০ম শ্রেণির শিক্ষার্থীদের প্রাক-নির্বাচনী পরীক্ষা আগামী ০১/০৯/২০২৫ইং তারিখ হইতে আরম্ভ হইবে।</marquee>
      </div>

      {/* Notice Board */}
      <div className="bg-white p-4 shadow">
      <NoticeBoard/>
      </div>

      {/* 6 Cards */}
      <div>
        <InfoCard/>
        </div>
    </div>

    {/* Right/Side Section */}
    <div className="w-full border  flex flex-col gap-6">
      {/* Card with image + details */}
      <div >
        <PrincipalCard/>
      </div>

      {/* Login Button */}
      <AdminPanel></AdminPanel>

      {/* Map */}
      <div className="bg-gray-300 w-full ">
        <Map></Map>
      </div>

      {/* Important Links Card */}
      <div className="bg-white shadow ">
      <ImportantLinks></ImportantLinks>
      </div>
    </div>

  </div>
</main>

  );
}
