import { BiSolidOffer } from "react-icons/bi";
import cricketBats from "../assets/cricketBats.webp";
const Discount = () => {
  return (
    <div className="mb-20 px-10">
      <h1 className="text-5xl text-center text-cyan-950 mb-5">
        Discount <span className="text-amber-500">Offer</span>
      </h1>
      <p className="text-center text-xl text-cyan-950 mb-20">
        Free shipping on orders above{" "}
        <span className="text-amber-500">$100</span>. Don't miss out on our
        <span className="text-amber-500"> exclusive bundle deals</span> for
        extra savings
      </p>
      <div className="flex justify-between gap-10 items-center flex-col md:flex-col lg:flex-row ">
        {/* flex justify-center items-center flex-col w-[70%] mx-auto bg-amber-500
        text-cyan-950 */}
        <div className="p-5 lg:w-[70%] bg-amber-500 text-cyan-900 ">
          <h1 className="text-center text-cyan-950 flex items-center justify-center gap-2 md:text-3xl">
            Limited Time
            <span className="text-amber-500 bg-cyan-950 p-2">Discount</span>
            <BiSolidOffer className="text-5xl" />
          </h1>
          <p className="text-center lg:text-xl text-lg mt-4">
            Get 20% off on all cricket equipment this weekend!
          </p>
          <p className="text-center lg:text-xl text-lg">
            Get yours fast before 1st February 2025
          </p>
        </div>
        <div className="">
          <img
            className="w-[1000px] h-[700px] object-cover"
            src={cricketBats}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
