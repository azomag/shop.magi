export default function Hero() {
  return (
    <div className="w-full py-16" id="home">
      <div className="flex justify-center items-center lg:flex-row flex-col ">
        <div className="px-10 lg:py-0 py-5 ">
          <div className="absolute z-[1] lg:flex ">
          <p className=" absolute w-[200px] lg:top-[200px] lg:left-[40px]  uppercase font-extrabold top-[140px] left-[25px] text-[10px] text-white/50 text-black font-thin">Black friday sale!</p>
            <h1 className="absolute lg:text-5xl w-[200px] lg:top-[230px] lg:left-[40px] uppercase font-extrabold top-[170px] left-[25px] text-[20px] font-serif text-white">Backpacks for business men</h1>
          <p className=" absolute w-[200px] lg:top-[430px] lg:left-[40px] uppercase top-[240px] left-[25px] text-sm font-extrabold text-gray-300 font-Allura">New prise  <span className="text-white text-lg px-4 lg:text-xl">$255</span></p>

            <button type="enter" className="border absolute px-16  py-2 text-white text-[14px] top-[300px] left-[25px] capitalize lg:top-[500px] lg:left-[40px]">buy</button>
          </div>
          <div className="">
          
          <img
            src="https://images.unsplash.com/photo-1618453292610-4119319e5ac7?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="lg:w-[500px] w-[330px] rounded-xl  duration-500 hover:opacity-[0.4] opacity-[0.7] shadow"
            alt=""
          />
          </div>
        </div>
        <div className="flex-cols">
          <div className="py-3">
{/* contenu img */}
<div className="px-5 lg:py-0 py-4">
          <div className="absolute z-[1] ">
            <h1 className="absolute lg:text-2xl w-[200px] top-[40px] text-xl left-[20px] lg:top-[60px] lg:left-[10px] uppercase font-extrabold font-serif text-white">best t-shirt for women here</h1>
                    <p className=" absolute w-[200px] top-[130px] left-[20px] text-[10px] lg:top-[160px] lg:left-[10px] capitalize  lg:text-[10px] font-bold text-gray-800 ">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>

            <button type="enter" className="border absolute px-16 left-[20px] top-[180px]  py-2 text-white text-[14px] capitalize lg:top-[220px] lg:left-[10px]">started</button>
          </div>
          </div>
{/* end contenu */}
          
            <img
              src="https://images.unsplash.com/photo-1503342331296-c8ca3b8dd0a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="lg:w-[450px] w-[350px] rounded-xl hover:opacity-[0.4] duration-300 opacity-[0.7]"
              alt=""
            />
          </div>
          <div className="">
        
{/* contenu  */}
<div className="px-5 lg:py-0 py-5 ">
          <div className="absolute z-[1] ">
            <h1 className="absolute lg:text-3xl w-[200px] top-[80px] left-[20px] text-xl lg:top-[80px] lg:left-[10px] uppercase font-extrabold font-serif text-white">woodman Backpacks</h1>
                    <p className=" absolute w-[200px] top-[150px] left-[20px]  lg:top-[160px] lg:left-[10px] capitalize  text-[10px] font-bold text-gray-400 ">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
<a href="" className="text-white lg:text-2xl text-xl left-[20px] top-[190px] absolute lg:top-[210px] lg:left-[10px] ">$455</a>
          </div>
          </div>
{/* end contenu */}
            <img
              src="https://images.unsplash.com/photo-1503341873906-91d1932a9758?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="lg:w-[450px] opacity-[0.4] hover:opacity-[0.7] duration-300 w-[350px] rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <h1></h1>
      </div>
    </div>
  );
}
