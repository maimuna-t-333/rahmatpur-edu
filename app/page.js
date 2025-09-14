import Carousel from './Components/Carousel'

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
  <div className="container mx-auto flex flex-col lg:flex-row gap-6">
    
    {/* Left/Main Section */}
    <div className="flex-1 space-y-6">
      
      <div className="w-250 h-64 mb-36 ">
        <Carousel/>
      </div>

      {/* Marquee */}
      <div className="flex bg-white p-2 shadow">
        <button className="btn bg-green-600 border-none rounded-none  ml-3">শিরোনাম:</button>
        <marquee className="text-blue-950 ml-3 mt-2">২০২৫ সালের ১০ম শ্রেণির শিক্ষার্থীদের প্রাক-নির্বাচনী পরীক্ষা আগামী ০১/০৯/২০২৫ইং তারিখ হইতে আরম্ভ হইবে।</marquee>
      </div>

      {/* Notice Board */}
      <div className="bg-white p-4 shadow">
        <h3 className="font-semibold mb-2">Notice Board</h3>
        <ul className="list-disc list-inside">
          <li>Notice 1</li>
          <li>Notice 2</li>
          <li>Notice 3</li>
        </ul>
      </div>

      {/* 6 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow">Card 1</div>
        <div className="bg-white p-4 shadow">Card 2</div>
        <div className="bg-white p-4 shadow">Card 3</div>
        <div className="bg-white p-4 shadow">Card 4</div>
        <div className="bg-white p-4 shadow">Card 5</div>
        <div className="bg-white p-4 shadow">Card 6</div>
      </div>
    </div>

    {/* Right/Side Section */}
    <div className="w-full lg:w-80 flex flex-col gap-6">
      {/* Card with image + details */}
      <div className="bg-white shadow p-4">
        <img src="/sample.jpg" alt="Sample" className="w-full h-32 object-cover mb-2"/>
        <p>Short details about the card content.</p>
      </div>

      {/* Login Button */}
      <button className="btn btn-primary w-full">Login</button>

      {/* Map */}
      <div className="bg-gray-300 w-full h-48">Map goes here</div>

      {/* Important Links Card */}
      <div className="bg-white shadow p-4">
        <h4 className="font-semibold mb-2">Important Links</h4>
        <ul className="list-disc list-inside">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
    </div>

  </div>
</main>

  );
}
