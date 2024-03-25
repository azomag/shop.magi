import { useState } from "react";
import { Button, Modal } from 'flowbite-react';
import { GrMenu, GrClose } from "react-icons/gr";
import img from "../assets/logo.png";
export default function Nav() {
  const [nav, setNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <div className="font-poppins w-full ">
      <nav className="flex justify-evenly items-center  w-full px-10 py-5 ">
        <div className="lg:flex hidden">
          <ul className="flex justify-center items-center capitalize font-bold ">
            <li className="px-4">
              <a href="#shop">Shop</a>
            </li>
            <li className="px-4">
              <a href="#account">Account</a>
            </li>
            <div className="dropdown px-3 h-[8vh]  w-[190px] ">
              <a href="">
                {" "}
                <img src={img} alt="" className=" " />
                <div className="dropdown-content bg-white capitalize text-[1px]">
                  <a href="#">New</a>
                </div>
              </a>
            </div>
            <li className="px-4">
              <a href="#about">about</a>
            </li>
            <li className="px-4">
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
        <div className="duration-300  flex md:hidden" onClick={handelNav}>
          {nav ? (
            <GrClose
              size={25}
              className="cursor-pointer absolute right-7 top-6"
            />
          ) : (
            <GrMenu
              size={25}
              className="flex cursor-pointer md:hidden duration-200 absolute right-7 top-6"
            />
          )}
        </div>
      </nav>

      <div
        className={ nav? "fixed duration-500 top-0 w-[70%]  md:hidden  absolute z-[999] bg-gray-800 ease-out" : "duration-500 ease-in fixed left-[-100%]"
        }
      >
        <div className=" px-3  h-[8vh] flex justify-center items-center mx-auto pt-16  w-[200px] ">
          <img src={img} alt="" className=" " />
        </div>
        <div className="flex w-full h-screen justify-center py-10 mx-auto">
          <ul className="text-2xl text-gray-00 text-center font-extrabold capitalize ">
            <li className=" my-10   ">
              <a href="#home">Home</a>
            </li>
            <li className=" my-10  ">
              <a href="#shop">shop</a>
            </li>
            <li className=" my-10   ">
              <a href="#account">account</a>
            </li>
            <li className=" my-10   ">
              <a href="about">about</a>
            </li>
            <li className=" my-10   ">
              <a href="contact">contact</a>
            </li>
            <li>
            <div className="  w-full">
  <Button className=' text-gray-400 border-none capitalize underline' onClick={() => setOpenModal(true)}>Sign up Or Register</Button>
      <Modal className=' flex justify-center items-center z-[999] ' show={openModal} size="lg" onClose={() => setOpenModal(false)} popup>
        <Modal.Header className='bg-gray-800'/>
        <Modal.Body className=''>
          <div className="text-center ">
          <section className=" font-poppins ">
  <div className="relative z-10 flex items-center h-screen py-16 overflow-hidden lg:bg-blue-900 lg:dark:bg-gray-800 2xl:py-44">
    <div className="absolute top-0 left-0 w-full h-full lg:bg-blue-900 dark:bg-bg-gray-700 lg:bottom-0 lg:h-auto lg:w-4/12">
      <img
        src="https://i.postimg.cc/XJBZvxHp/first.jpg"
        alt=""
        className="hidden object-cover w-full h-full lg:block"
      />
    </div>
    <div className="relative max-w-6xl px-4 mx-auto">
      <div className="justify-center max-w-xl mx-auto lg:max-w-5xl">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 lg:w-2/5">
            <div className="z-10 w-full p-10 shadow-md bg-gray-50 dark:bg-gray-900 rounded-lg ">
              <h2 className="text-xl font-bold leading-tight mb-7 md:text-2xl dark:text-gray-300">
                Login to your account
              </h2>
              <form action="" className="mt-4">
                <div>
                  <label
                    htmlFor=""
                    className="block text-gray-700 dark:text-gray-300"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 mt-2 bg-gray-200 rounded-lg dark:text-gray-100 dark:bg-gray-800"
                    name=""
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4">
                  <div>
                    <label
                      htmlFor=""
                      className="text-gray-700 dark:text-gray-300 "
                    >
                      Password:
                    </label>
                    <div className="relative flex items-center mt-2">
                      <input
                        type="password"
                        className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                        name=""
                        placeholder="Enter password"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        className="absolute right-0 mr-3 dark:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"></path>
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"></path>
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <a
                    href="#"
                    className="text-sm font-semibold text-blue-700 hover:underline"
                  >
                    forgot password?
                  </a>
                </div>
                <button
                  className="w-full px-4 py-3 mt-4 font-semibold text-gray-700 bg-blue-400 rounded-lg hover:text-gray-700 hover:bg-blue-200 "
                  type="submit"
                >
                  LOGIN
                </button>
                <div className="mt-4 text-gray-700  dark:text-gray-300">
                  Need an account?
                  <a
                    href="#"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    Create an account{" "}
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
            <span className="flex items-center justify-center w-20 h-20 mx-auto text-gray-900 bg-blue-400 rounded-lg dark:bg-blue-300 mb-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </span>
            <h2 className="text-4xl font-bold text-center text-gray-100 dark:text-gray-400 mb-9 lg:text-6xl ">
              Are you ready to login our account?
            </h2>
            <p className="text-xl font-semibold text-center text-gray-200 dark:text-gray-500 ">
              You are welcome here!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


          </div>
        </Modal.Body>
      </Modal>
  </div>
        
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
