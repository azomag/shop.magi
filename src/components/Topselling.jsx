import { FcLikePlaceholder } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { MdOutlineFiberNew } from "react-icons/md";

import img1 from '../assets/capu.png'
import img2 from '../assets/watch.png'
import img3 from '../assets/nike.png'
import img4 from '../assets/headphone.png'
import img5 from '../assets/devimg.png'

const Topselling = () => {
  return (
    <div className="w-full ">
      <h1 className="text-white text-2xl capitalize font-semibold text-center">
        #Top selling
      </h1>

      <div className="cards flex justify-center items-center flex-col lg:flex-row py-10 w-full">
        {/* start card  */}
        <div className="card border w-[250px] bg-white m-5 rounded-2xl  shadow hover:scale-[1.03] duration-200">
          <div className=" ">
            <FcLikePlaceholder size={25} className="absolute m-5" />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={img1}
              alt=""
              className="w-[190px] h-[200px] py-3 px-2 rounded-2xl"
            />
          </div>
          <div className=" capitalize py-3 text-black font-bold text-center">
            <h1>Plain Short Sleeve</h1>
            <div className="flex justify-center items-center py-3">
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />
              <FaStarHalf className="text-yellow-500 " />
            </div>
            <div>
              <p>
                <a href="" className="font-extrabold text-gray-800">
                  $77.00
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end card  */}


        {/* start card  */}
        <div className="card border w-[250px] bg-white m-5 rounded-2xl  shadow hover:scale-[1.03] duration-200">
          <div className=" ">
            <FcLikePlaceholder size={25} className="absolute m-5" />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={img2}
              alt=""
              className="w-[130px] h-[200px] py-3 px-2 rounded-2xl"
            />
          </div>
          <div className=" capitalize py-3 text-black font-bold text-center">
            <h1>Plain Short Sleeve</h1>
            <div className="flex justify-center items-center py-3">
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />
              <FaStarHalf className="text-yellow-500 " />
            </div>
            <div>
              <p>
                <a href="" className="font-extrabold text-gray-800">
                  $80.00
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end card  */}


        {/* start card  */}
        <div className="card border w-[250px] bg-white m-5 rounded-2xl  shadow hover:scale-[1.03] duration-200">
          <div className=" ">
            <FcLikePlaceholder size={25} className="absolute m-5" />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={img3}
              alt=""
              className="w-[190px] h-[200px] py-3 px-2 rounded-2xl"
            />
          </div>
          <div className=" capitalize py-3 text-black font-bold text-center">
            <h1>Plain Short Sleeve</h1>
            <div className="flex justify-center items-center py-3">
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />
              <FaStarHalf className="text-yellow-500 " />
            </div>
            <div>
              <p>
                <a href="" className="font-extrabold text-gray-800">
                  $51.00
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end card  */}


        {/* start card  */}
        <div className="card border w-[250px] bg-white m-5 rounded-2xl  shadow hover:scale-[1.03] duration-200">
          <div className=" ">
            <FcLikePlaceholder size={25} className="absolute m-5" />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={img4}
              alt=""
              className="w-[170px] h-[200px] py-3 px-2 rounded-2xl"
            />
          </div>
          <div className=" capitalize py-3 text-black font-bold text-center">
            <h1>Plain Short Sleeve</h1>
            <div className="flex justify-center items-center py-3">
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />
              <FaStar className="text-yellow-500 " />
              <FaStarHalf className="text-yellow-500 " />
            </div>
            <div>
              <p>
                <a href="" className="font-extrabold text-gray-800">
                  $47.00
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end card  */}
    </div>

    <div className="flex justify-center items-center py-16 lg:flex-row flex-col">
<div className="px-7 ">

  <img src={img5} alt="" className="w-[300px] rounded-3xl rotate-[-15deg] hover:rotate-0 duration-500 "/>
</div>
<div className=" flex justify-center items-center lg:py-0 py-10">
  <p className="lg:text-[15px] text-[14px] capitalize font-bold text-gray-400 flex justify-center items-center "><MdOutlineFiberNew size={50} className="text-green-400  mx-2 border-[3px] rounded-full "/>

t-shirt Devmagi out now go buy now <span className="text-white text-xl px-2"> $9</span> .</p>
</div>
    </div>
    </div>
  
  );
}

export default Topselling;
