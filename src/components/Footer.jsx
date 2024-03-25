import img from '../assets/logo.png'
const Footer = () => {
  return (
    <section className="flex flex-col  lg:justify-end font-poppins">
    <div className="w-full bg-white/10 ">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div className="flex flex-wrap py-10 -mx-3">
          <div className="w-full px-4 mb-11 md:w-1/2 lg:w-4/12 lg:mb-0">
            <a
              href="#"
              className="inline-block mb-4 text-xl font-bold text-gray-200 dark:text-gray-400"
            >
            <img src={img} alt=""  className='w-[250px]'/>
            </a>
            <p className="text-base font-normal leading-6 text-gray-300 lg:w-64 dark:text-gray-400">
              Lorem ipsum dor amet Lorem ipsum dor amet Lorem ipsum dor amet Lorem
              ipsum dor amet
            </p>
            <div className="flex items-center mt-4 ">
              <a href="#">
                <img
                  src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                  alt=""
                  className="object-cover h-16 mr-2 w-26"
                />
              </a>
              <a href="#">
                <img
                  src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                  alt=""
                  className="object-cover h-16 mr-2 w-26"
                />
              </a>
              <a href="#">
                <img
                  src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                  alt=""
                  className="object-cover h-16 mr-2 w-26"
                />
              </a>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0">
            <h2 className="mb-4 text-xl font-bold text-gray-200 dark:text-gray-400">
              Quick Links{" "}
            </h2>
            <ul>
              <li className="flex items-center mb-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <a
                  href="#"
                  className="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center mb-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <a
                  href="#"
                  className="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  About Us
                </a>
              </li>
              <li className="flex items-center mb-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <a
                  href="#"
                  className="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 md:w-1/4 lg:w-2/12  lg:mb-0">
            <h2 className="mb-4 text-xl font-bold text-gray-200 dark:text-gray-400">
              Features{" "}
            </h2>
            <ul>
              <li className="flex items-center mb-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <a
                  href="#"
                  className="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  Products
                </a>
              </li>
              <li className="flex items-center mb-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <a
                  href="#"
                  className="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  Article
                </a>
              </li>
              <li className="flex items-center mb-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <a
                  href="#"
                  className="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  Shop
                </a>
              </li>
            </ul>
          </div>
        
          <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0">
  <div className="flex flex-wrap items-center justify-between pb-4 border-b border-gray-500 dark:border-gray-700 lg:justify-between">
    <h2 className="mb-4 text-2xl font-semibold tracking-wider text-gray-300 lg:mb-0 dark:text-gray-400">
      our newsletter
    </h2>
    <p className="py-5 text-white/40">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <div className="flex flex-wrap">
      <div className="w-full py-1 mb-2 lg:flex-1 lg:py-0 lg:mr-3 lg:mb-0">
        <input
          type="email "
          className="inline-block w-full h-12 px-3 text-gray-700 placeholder-gray-500 border rounded-md dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-700 "
          placeholder="Your email"
        />
      </div>
      <div className="w-full py-1 lg:w-auto lg:py-0">
        <a
          href="#"
          className="inline-block w-full px-5 py-4 font-medium leading-4 text-center  rounded-md duration-300 bg-white/60 text-gray-600  hover:bg-blue-400"
        >
          Subscribe
        </a>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
      <div className="pb-6 text-center text-gray-300  ">
        <span>© Copyright 2024 . Dev.Magi</span>
      </div>
    </div>
  </section>
  

  );
};

export default Footer;
