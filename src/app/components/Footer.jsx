import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#EFF2FF] py-32 px-16 text-[#262C4C] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 pb-10 gap-12 min-w-screen">
      {/* Footer Logo and App Download */}
      <div className="flex flex-col items-start md:items-start">
        <Link href="/">
          <Image src="/homelogo.jpg" alt="footerlogo" width="100" height="40" />
        </Link>
        <p className="text-sm my-4 text-start md:text-left">
          Download the app by clicking the links below
        </p>
        <div className="flex justify-center md:justify-start space-x-2">
          <Image
            src="/TranspirantGoogle.jpg"
            alt="google"
            width="110"
            height="40"
          />
          <Image
            src="/TransAppStore.jpg"
            alt="appstore"
            width="110"
            height="40"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col items-start md:items-start">
        <p className="text-sm font-semibold mb-2">Contact</p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <Image src="/phoneicon.jpg" alt="call" width="20" height="20" />
            <p>(406) 555-0120</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="/emailicon.png" alt="email" width="20" height="20" />
            <p>support@tdbizz.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/locationicon.png"
              alt="location"
              width="20"
              height="20"
            />
            <p>
              45 Highfield Avenue, <br /> Manchester, M2 3B, UK
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col items-start md:items-start">
        <p className="text-sm font-semibold mb-2">Social Media</p>
        <div className="flex space-x-2">
          <Image src="/facebook.jpg" alt="facebook" width="30" height="20" />

          <Image src="/twitter.jpg" alt="twitter" width="30" height="20" />
          <Image src="/linkedin.jpg" alt="linkedin" width="30" height="20" />
          <Image src="/instagram.jpg" alt="logo" width="30" height="20" />
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="flex flex-col items-center md:items-start">
        <p className="text-sm font-semibold mb-2">
          Subscribe to our newsletter
        </p>
        <form action="post" className="space-y-2 md:space-y-6 md:space-x-2">
          <label htmlFor="email" className="text-[#262C4C] block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="samplemail@google.com"
            className="rounded border-gray-500 py-5 px-4 md:w-64"
          />
          <button className="bg-[#262C4C] text-white font-bold py-5 px-4 md:w-64 rounded">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
