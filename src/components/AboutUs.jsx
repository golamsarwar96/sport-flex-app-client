import aboutUsImg from "../assets/aboutUs.jpg";
const AboutUs = () => {
  return (
    <div className="bg-cyan-950 flex px-12 justify-center items-center pt-20 flex-col lg:flex-row gap-5">
      <div className="lg:w-1/2">
        <h1 className="text-5xl text-center text-amber-500">About Us</h1>
        <p className="bg-amber-500 text-cyan-950 p-4 font-base text-sm mt-4 text-center">
          "Sport Flex" is your ultimate destination for all things sports.
          Whether you’re an athlete, a coach, or a fitness enthusiast, our
          website is designed to fuel your passion for sports and fitness. With
          a sleek and engaging interface, you can explore a variety of sections
          that make navigation effortless and enjoyable. From discovering
          top-quality sports gear and accessories tailored for every game to
          browsing curated categories for Cricket, Football, Hockey, and Tennis,
          Sport Flex has it all. Be inspired by stories of athletes and their
          winning moments with our products, while staying informed with
          insightful blogs. Sport Flex is committed to empowering athletes with
          premium products and a platform that celebrates the love of sports.
          Play your best game with Sport Flex!
        </p>
      </div>
      <div className="lg:w-1/2">
        <img className="" src={aboutUsImg} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
