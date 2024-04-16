import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  TwitterIcon,
  Location,
  Email,
  Calls,
  LinkedIn,
  Instagram,
} from "./assets/icons";

const Footer = () => {
  return (
    <footer className="bg-[#EFF2FF] py-32 px-16 text-[#262C4C] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 pb-10 gap-12 min-w-screen">
      {/* Footer Logo and App Download */}
      <div className="flex flex-col items-start md:items-start">
        <Link href="/">
          <Image src="/logo.png" alt="footerlogo" width="100" height="40" />
        </Link>
        <p className="text-sm my-4 text-start md:text-left">
          Download the app by clicking the links below
        </p>
        <div className="flex justify-center md:justify-start space-x-2">
          <Image
            src="/TranspirantGoogle.png"
            alt="google"
            width="110"
            height="40"
          />
          <Image
            src="/TransAppStore.png"
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
            <div>
              <Calls />
            </div>

            <p>(406) 555-0120</p>
          </div>
          <div className="flex items-center space-x-2">
            <div>
              <Email />
            </div>

            <p>support@tdbizz.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="mr-2">
              <Location />
            </div>

            <p>
              45 Highfield Avenue, <br /> Manchester, M2 3B, UK
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col items-start md:items-start">
        <p className="text-sm font-semibold mb-2">Social Media</p>
        <div className="grid grid-cols-4 gap-3 mt-4">
          <div className="relative w-2 h-4">
            <Image src="/facebooklogo.png" alt="facebook" fill />
          </div>

          <div className="relative w-2 h-4 mr-3">
            <TwitterIcon />
          </div>

          <div className="relative w-2 h-4 mr-3">
            <LinkedIn />
          </div>

          <div className="relative w-2 h-4 mr-3">
            <Instagram />
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="flex flex-col items-center min-w-[screen] md:items-start">
        <p className="text-sm font-semibold mb-2">
          Subscribe to our newsletter
        </p>
        <form action="post" className="space-y-2 md:space-y-6 md:space-x-2">
          <label htmlFor="email" className="text-[#131835] block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="samplemail@google.com"
            className="rounded bg-[#EFF2FF] border-solid border-[#131835] py-4 p-4 md:w-64"
          />
          <button className="bg-[#131835] text-white font-bold py-4 px-4 min-w-[64] md:w-64 rounded-full">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
