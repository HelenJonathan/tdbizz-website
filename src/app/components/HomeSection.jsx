import Carousel from "../components/Carousel";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div className="bg-white w-screen h-auto py-4 lg:py-6 flex flex-wrap items-center justify-center">
      <div className="flex-shrink-0 p-4 md:p-8 lg:p-20 md:block">
        <h1 className="text-xl lg:text-5xl font-bold text-center lg:text-left">
          A true <span className="text-[#ffb75e]">commercial</span> centre for
          <br />
          anything and <span className="text-blue-500">everything</span>
        </h1>
      </div>

      <div className="bg-[#EFF2FF] p-4 lg:p-20">
        <p className="text-blue-500 pb-3 pt-2 text-center lg:text-left">
          Become a seller
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grow mt-4 lg:mt-0">
            <h1 className="text-lg lg:text-5xl font-bold mb-4 min-w-[12rem] text-center lg:text-left">
              Sell to thousands <br />
              in just a few <span className="text-blue-500">clicks</span>
            </h1>
            <p className="text-base lg:text-lg mb-4 mt-5 text-center lg:text-left">
              Create your shop, populate your products and start selling,
              <br />
              gain access to hundreds of freelance delivery agents, all the{" "}
              <br />
              tools you need to sell at your disposal.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="rounded mr-2">
                <Image
                  src="/TranspirantGoogle.jpg"
                  alt="Google-button"
                  width="150"
                  height="90"
                />
              </button>
              <button className="rounded">
                <Image
                  src="/TransAppStore.jpg"
                  alt="AppStore-button"
                  width="150"
                  height="90"
                />
              </button>
            </div>
          </div>

          <div className="grow">
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/image1.png"
                width="500"
                height="500"
                alt="Heroimage"
                className="block"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="grid rounded-md grid-cols-1 md:grid-cols-2 m-4 lg:m-20">
        <div className="grow flex justify-center items-center">
          <Image
            className="object-cover rounded-lg rotate-90 mt-16 mb-20 z-0"
            src="/PinkHair.jpg"
            alt="Google-button"
            width="800"
            height="500"
          />
        </div>

        <div className="grow bg-[#fff8ec]  rounded-lg ml-8 mr-10 p-10 lg:p-10">
          <h3 className="text-lg lg:text-5xl font-bold mb-4 text-center lg:text-left">
            Never get stranded, just book a ride.
          </h3>
          <p className="text-sm lg:text-base mb-4 mt-5 text-center lg:text-left">
            Ordering a ride can be as simple as opening the camera on your phone
          </p>

          <div className="flex justify-center lg:justify-start">
            <Image
              src="/IPhone12.png"
              alt="Google-button"
              width="250"
              height="50"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ec] p-4 lg:p-20 mt-16 mb-16">
        <div className="grid rounded-md grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="grow">
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/iPhone12ProMockup.jpg"
                alt="Heroimage"
                width="500"
                height="500"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className="grow mt-4 lg:mt-20 sm:mt-4">
            <p className="text-[#262C4C] pb-3 pt-2">Appointment bookings</p>
            <div>
              <h1 className="text-xl lg:text-5xl font-bold mb-4 min-w-[12rem] text-center lg:text-left">
                Book appointments <br />
                for services in seconds
              </h1>
              <p className="text-base lg:text-base mb-4 mt-5 text-center lg:text-left">
                Have access to a wide range of service providers that offers
                both <br />
                in-shop and home services, arrange before time, everything just{" "}
                <br />
                how you want it
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid rounded-md grid-cols-1 md:grid-cols-2 m-4 lg:m-20 gap-10 mb-16 mt-16">
        <div className="grow bg-[#EFF2FF] rounded-lg p-4 lg:p-10 flex flex-col justify-center items-center">
          <h3 className="text-xl lg:text-5xl font-bold mb-4 min-w-[12rem] text-center lg:text-left">
            Receive and confirm delivery with ease
          </h3>
          <p className="text-m lg:text-base mb-4 mt-5 text-center lg:text-left">
            You have a new delivery!
          </p>
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/Notification.png"
              alt="Google-button"
              className="block"
              width="500"
              height="500"
            />
          </div>
        </div>
        <div className="grow">
          <div className="flex justify-center items-center">
            <Image
              src="/Redbag.jpg"
              width="500"
              height="500"
              alt="Google-button"
              className="block"
            />
          </div>
        </div>
      </section>

      <Carousel />

      <div className="bg-[#fff8ec] p-4 lg:p-16 m-14">
        <div className="lg:grid-cols-2 gap-4">
          <div className="mt-4 lg:mt-20">
            <h5 className="text-lg lg:text-5xl font-bold mb-4 min-w-[12rem] text-center lg:text-left">
              Things doesn’t always have to be strenuous, enjoy easy life now
            </h5>
            <p className="text-base lg:text-lg mb-4 mt-5 text-center lg:text-left">
              Download the TDBizz app, sing up in just few clicks and get
              started immediately.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="rounded mr-2">
                <Image
                  src="/TranspirantGoogle.jpg"
                  alt="Google-button"
                  width="150"
                  height="90"
                />
              </button>
              <button className="rounded">
                <Image
                  src="/TransAppStore.jpg"
                  alt="AppStore-button"
                  width="150"
                  height="90"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
