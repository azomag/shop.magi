import { FcLikePlaceholder } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const Shop = () => {
  return (
    <div className="py-16 w-full   bg-white px-10 " id="shop">
      <h1 className="text-black text-2xl capitalize font-semibold text-center">
        #featured product
      </h1>

      <div className="cards flex justify-center items-center flex-col lg:flex-row py-16 w-full">
        {/* start card  */}
        <div className="card border w-[250px]  m-5 rounded-2xl  shadow hover:scale-[1.03] duration-200">
          <div className=" ">
            <FcLikePlaceholder size={25} className="absolute m-5" />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-[240px] h-[260px] p-2"
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
                  $75.00
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end card  */}

  {/* start card  */}
  <div className="card border w-[250px] m-5 rounded-2xl  shadow hover:scale-[1.03] duration-200">
          <div className=" ">
            <FcLikePlaceholder size={25} className="absolute m-5" />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1618354691321-e851c56960d1?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-[240px] h-[260px] p-2"
            />
          </div>
          <div className=" capitalize py-3 text-black font-bold text-center">
            <h1>Plain Long Sleeve Gray</h1>
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
                  $87.00
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end card  */}

          {/* start card  */}
          <div className="card border w-[250px] m-5 rounded-2xl  shadow hover:scale-[1.03] duration-200">
          <div className=" ">
          <p className="absolute m-5 text-[15px] font-extrabold text-green-500">NEW</p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1618354691490-0de58a2c4c93?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-[240px] h-[260px] p-2"
            />
          </div>
          <div className=" capitalize py-3 text-black font-bold text-center">
            <h1>water bottle</h1>
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
                  $10.00
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end card  */}



          {/* start card  */}
          <div className="card border w-[250px] m-5 rounded-2xl  shadow hover:scale-[1.03] duration-200">
          <div className=" ">
          <p className="absolute m-5 text-[15px] font-extrabold text-green-500">NEW</p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-[240px] h-[260px] p-2"
            />
          </div>
          <div className=" capitalize py-3 text-black font-bold text-center">
            <h1>Gray Beanie</h1>
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
                  $23.00
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end card  */}
        
      </div>


      {/* roow 2  */}

      <div className="cards flex justify-center items-center flex-col lg:flex-row py- w-full">
        {/* start card  */}
        <div className="card border w-[250px]  m-5 rounded-2xl  shadow hover:scale-[1.03] duration-200">
          <div className=" ">
            <FcLikePlaceholder size={25} className="absolute m-5" />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043"
              alt=""
              className="w-[240px] h-[260px] p-2"
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
                  $350.00
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end card  */}

  {/* start card  */}
  <div className="card border w-[250px] m-5 rounded-2xl  shadow hover:scale-[1.03] duration-200">
          <div className=" ">
          <p className="absolute m-5 text-[15px] font-extrabold text-green-500">NEW</p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://www.visualeducation.com/wp-content/uploads/2020/05/Beats_headphones-2-1558px.jpg"
              alt=""
              className="w-[240px] h-[260px] p-2"
            />
          </div>
          <div className=" capitalize py-3 text-black font-bold text-center">
            <h1>Plain Long Sleeve Gray</h1>
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
                  $25.00
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end card  */}

          {/* start card  */}
          <div className="card border w-[250px] m-5 rounded-2xl  shadow hover:scale-[1.03] duration-200">
          <div className=" ">
          <p className="absolute m-5 text-[15px] font-extrabold text-green-500">NEW</p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://cms.dresma.com/uploads/Image_2_18dd01e601.jpg"
              alt=""
              className="w-[240px] h-[260px] p-2"
            />
          </div>
          <div className=" capitalize py-3 text-black font-bold text-center">
            <h1>water bottle</h1>
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
                  $9.00
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end card  */}



          {/* start card  */}
          <div className="card border w-[250px] m-5 rounded-2xl  shadow hover:scale-[1.03] duration-200">
          <div className=" ">
          <p className="absolute m-5 text-[15px] font-extrabold text-green-500">NEW</p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://media.istockphoto.com/id/1137042576/pt/foto/classic-women-gold-watch-black-dial-leather-strap-isolate-on-white-background.jpg?s=612x612&w=0&k=20&c=N06hUPb5MGLZWzxqAeSxvP1SIlaQwJj26a19Q-KwR0Q="
              alt=""
              className="w-[240px] h-[260px] p-2"
            />
          </div>
          <div className=" capitalize py-3 text-black font-bold text-center">
            <h1>Gray Beanie</h1>
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
                  $65.00
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end card  */}
        
      </div>

    </div>
  );
};

export default Shop;
