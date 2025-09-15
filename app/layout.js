import Navbar_1 from './Components/Navbar_1'
import Navbar_2 from './Components/Navbar_2'
import Footer from './Components/Footer.js'
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className="bg-white text-black"
      >
        <Navbar_1/>
        <Navbar_2/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
