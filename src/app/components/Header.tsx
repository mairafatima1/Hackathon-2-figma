import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      {/* Top bar */}
      <div className="w-full h-[36px] bg-primaryColor flex justify-between items-center px-6 py-2 text-[10px] font-medium text-gray-500">
        <Image src="/Logo.png" alt="Logo" width={24} height={24} />

        <div className="flex gap-4  ">
          <Link href="#" className="hover:text-gray-800  link-separator ">Find Store</Link>
          <Link href="#" className="hover:text-gray-800 link-separator ">Help</Link>
          <Link href="/Join" className="hover:text-gray-800 link-separator">Join Us</Link>
          <Link href="#" className="hover:text-gray-800 link-separator">Sign In</Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="w-full flex justify-between items-center px-6 py-4">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <Image
            src="/Vector.png"
            width={78}
            height={24}
            alt="Nike Logo"
            className="md:w-[78px] sm:w-[60px] w-[30px]"
          />
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="flex gap-6 text-gray-700 font-medium text-[10px] md:text-[16px] sm:text-[14px]">
          <Link href="#" className="hover:text-black whitespace-nowrap">New & Featured</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Men</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Kids</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Sale</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">SNKRS</Link>
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4">
          {/* Desktop Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-15px py-1 text-sm focus:outline-none  "
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500 " />
          </div>

          {/* Icons (Heart and Shopping Bag) */}
          <div className="flex items-center gap-2">
            <FaHeart className="text-gray-700 w-[20px] h-[20px] cursor-pointer hover:text-black" />
            <FaShoppingBag className="text-gray-700 w-[20px] h-[20px] cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500 " />
        </div>
      </div>
    </div>
  );
}
