import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";

const Socials = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div
        className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid "
        data-aos="fade-down"
      >
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <HiOutlineMail className="p-2 rounded-xl text-vegas-gold  border border-jet border-solid text-4xl" />
          <p className="text-gray text-[15px] md:text-[16px] font-bold">
            Email
          </p>
        </div>
        <a
          href="mailto:sangodareisaac92@gmail.com"
          target="_blank"
          className="flex flex-col items-center justify-center gap-2 group"
        >
          <p className=" text-[12px] md:text-[13px] font-medium">
            sangodareisaac92@gmail.com
          </p>
          <h4 className="text-[14px] md:text-[16px]  group-hover:text-vegas-gold transition-all delay-200 font-medium">
            Send A Mail
          </h4>
        </a>
      </div>

      <div
        className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid "
        data-aos="fade-down"
      >
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <FaWhatsapp className="p-2 rounded-xl text-vegas-gold  border border-jet border-solid text-4xl" />
          <p className="text-gray text-[15px] md:text-[16px] font-bold">
            WhatsApp
          </p>
        </div>
        {/* <button
          className="bg-[#4dc247] hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition duration-1000"
          title="whatsapp"
        >
          <a href="https://wa.me/2348068290320" target="_blank">
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white shadow-md">
              <path
                d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>
        </button> */}
        <a href="https://wa.me/2348068290320" target="_blank" className="flex flex-col items-center justify-center gap-2 group">
                        <p className=" text-[12px] md:text-[13px] font-medium">+234-80-682-903-20</p>
                        <h4 className="text-[14px] md:text-[16px]  group-hover:text-vegas-gold transition-all delay-200 font-medium">Send A Message</h4>
                    </a>
      </div>

      <div
        className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid "
        data-aos="fade-down"
      >
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <FaPhoneVolume className="p-2 rounded-xl text-vegas-gold  border border-jet border-solid text-4xl" />
          <p className="text-gray text-[15px] md:text-[16px] font-bold">
            Phone
          </p>
        </div>
        <a
          href="tel:+2348068290320"
          target="_blank"
          className="flex flex-col items-center justify-center gap-2 group"
        >
          <p className=" text-[12px] md:text-[13px] font-medium">
          +234-80-682-903-20
          </p>
          <h4 className="text-[14px] md:text-[16px]  group-hover:text-vegas-gold transition-all delay-200 font-medium">
            Place A Call
          </h4>
        </a>
      </div>

      <div
        className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-sm shadow-jet border border-jet border-solid "
        data-aos="fade-down"
      >
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <HiOutlineMapPin className="p-2 rounded-xl text-vegas-gold  border border-jet border-solid text-4xl" />
          <p className="text-gray text-[15px] md:text-[16px] font-bold">
            Location
          </p>
        </div>

        <h4 className="text-[14px] md:text-[16px]  transition-all delay-200 font-medium">
          Lagos State, Nigeria
        </h4>
      </div>
    </main>
  );
};

export default Socials;
