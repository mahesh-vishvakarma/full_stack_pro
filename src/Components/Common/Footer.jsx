import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta, TbFilePhone } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import {FiPhoneCall} from "react-icons/fi"
const Footer = () => {
  return (
    <footer>
      <div className="border-t py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
          <div>
            <h3 className="text-lg text-gray-800 mb-4">News Letter</h3>
            <p className="text-gray-500 mb-4">
              bBe the first to hear about new products, exclusive events and
              online offers
            </p>
            <p className="font-medium text-gray-600 mb-6">
              Sign up and get 10% off
            </p>

            {/* news letter form */}
            <form className="flex">
              <input
                type="text"
                placeholder="enter email"
                className="p-3 border-b w-full text-sm border-t border-l border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 translate-all required"
              />
              <button className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">
                Subscribe
              </button>
            </form>
          </div>
          {/* shopp links */}
          <div>
            <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="#" className="hover:text-gray-500 transition-colors">
                  Men's top wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500 transition-colors">
                  Women's top wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500 transition-colors">
                  Men's Bottom wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500 transition-colors">
                  Women's Bottom wear
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="#" className="hover:text-gray-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500 transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>
        {/* follow us */}
          <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopner noreferrer" className="hover:text-gray-500"><TbBrandMeta className="w-4 h-4"/></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopner noreferrer" className="hover:text-gray-500"><IoLogoInstagram className="w-4 h-4"/></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopner noreferrer" className="hover:text-gray-500"><RiTwitterXLine className="w-4 h-4"/></a>
          </div>
          <p>
            <FiPhoneCall className="inline-block"/>
            123-456-789
          </p>
        </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">@2025, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
