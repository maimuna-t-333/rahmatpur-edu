import Carousel from './Components/Carousel'

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
  <div className="container mx-auto flex flex-col lg:flex-row gap-6">
    
    {/* Left/Main Section */}
    <div className="flex-1 space-y-6">
      
      <div className="w-250 h-64 ">
        <Carousel/>
      </div>

      {/* Headline + Button */}
      <div className="flex justify-between items-center bg-white p-4 shadow">
        <h2 className="text-xl font-bold">Headline Here</h2>
        <button className="btn btn-primary">Click Me</button>
      </div>

      {/* Marquee */}
      <div className="bg-white p-2 shadow">
        <marquee>Latest News / Updates scrolling here...</marquee>
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
