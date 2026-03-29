import Link from "next/link";
import Image from 'next/image'
import logo from '@/public/logo.jpg'
import { Inter } from "next/font/google";
  const inter = Inter({
  subsets: ["latin", "latin-ext"], // load only these characters
  weight: ["400", "700"],
});
const Navigation = () => {
  
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Image
         src={logo}
          width={120} 
          height={120}
           alt="logo"
           quality={100} 
           priority={false}
           placeholder="blur"
           blurDataURL=""
        className="rounded-full h-12 w-12"/>
        <h1 className={ `text-xl font-bold ${inter.className}`}>MyWebsite</h1>

        {/* Menu */}
        <nav>
          <ul className="flex space-x-6">
          <li>
  <Link href="/" className="hover:text-gray-300">
    Home
  </Link>
</li>
<li>
  <Link href="/contact" className="hover:text-gray-300">
    Contact
  </Link>
</li>
<li>
  <Link href="/about" className="hover:text-gray-300">
    About
  </Link>
</li>
<li>
  <Link href="/service" className="hover:text-gray-300">
    Service
  </Link>
</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;