const Headline = () => {
  return (
    <div className="py-4 w-full px-10">
      <div className="flex justify-center items-center flex-col lg:flex-row">
        {/* img display */}
<div className="m-7">
  <div className="absolute z-[99] w-[300px]">
<p className="text-gray-400   font-mono capitalize absolute top-[100px] left-[20px] text-[13x] lg:top-[130px] lg:left-[30px]">buy you favorite product now !</p>
  <h1 className="uppercase absolute text-white  lg:text-5xl  font-extrabold top-[140px] left-[20px] text-4xl lg:top-[160px] lg:left-[30px]">extra 75% off</h1>
  <p className="capitalize absolute lg:top-[270px] lg:left-[30px] top-[230px] left-[20px] text-[14px] text-gray-300 font-mono">use promo code : <span className="text-xl font-bold underline  text-white">Dev.Magi</span></p>
  <button className="py-2 px-10 border absolute lg:top-[320px] lg:left-[30px] top-[270px] left-[20px]">Shop now</button>
  </div>
<img src="https://img.freepik.com/free-photo/black-suit-man-street-photography_1409-6648.jpg?t=st=1705683219~exp=1705686819~hmac=c106a9be7560a27d590bd88df8509997b8e546e95a2b9c7158cec7d516c48755&w=740" className="lg:w-[470px] w-[350px] h-[350px] lg:h-[400px]  hover:opacity-[0.7] duration-300 opacity-[0.6]" alt="" />
</div>
<div className="">
<iframe
  src="https://www.youtube.com/embed/OaVsCM0Zeio"
  title="Kvell Apparel Co. - Clothing Brand Promo Video"
  frameBorder={0}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen=""
  className="lg:w-[700px] lg:h-[400px] w-[400px] h-[300px]"
/>
</div>

      </div>
    </div>
  );
}

export default Headline;
