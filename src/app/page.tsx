import Head from "next/head";
import LandingNavbar from "./components/LandingNavbar";
import Footer from "./components/Footer";
import Image from "next/image";

import HomeSection from "./components/HomeSection";

export default function Home() {
  return (
    <>
      <div>
        <LandingNavbar />

        <div className="flex flex-col justify-center items-center p-16  ">
          <header className="grid grid-cols-1  pb-5 lg:grid-cols-2 gap-10 items-center justify-between lg:py-6 p-4 md:p-8 lg:p-6">
            <div className="lg:order-2">
              <Image
                src="/Heroimage.jpg"
                alt="Heroimage"
                width="400"
                height="300"
                className="object-cover pt-10 w-full h-full rounded-lg"
              />
            </div>

            <div className="lg:order-1">
              <h1 className="text-xl lg:text-5xl pt-10 font-bold mb-4 min-w-80">
                Life made <span className="text-[#ffb75e]">simple.</span> <br />
                Shop/sell, ride & book <br />
                appointments easily
              </h1>
              <p className="text-m lg:text-base mb-4 mt-5">
                The lifestyle app for your everyday activities, making life
                easier for everyone
              </p>
              <div className="flex flex-wrap">
                <button className="rounded mr-2 mb-2 lg:mb-0">
                  <Image
                    src="/Google.jpg"
                    alt="Google-button"
                    width="150"
                    height="90"
                  />
                </button>
                <button className="rounded">
                  <Image
                    src="/AppStore.jpg"
                    alt="AppStore-button"
                    width="150"
                    height="90"
                  />
                </button>
              </div>
            </div>
          </header>
          <p className="pt-2">
            Trusted by over 1 million people in the UK & Nigeria
          </p>
        </div>

        <main className="w-screen h-auto bg-white">
          <HomeSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
