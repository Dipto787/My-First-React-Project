 
const Banner = () => {
    return (
        <div>
            <div
  className="hero flex justify-center items-center  rounded-3xl text-white  py-48"
  style={{
    backgroundImage: "url(src/assets/banner.png)",
    backgroundRepeat:'no-repeat',
    borderRadius:'40px'
  }}>
  <div className="hero-overlay   text-center bg-opacity-60"></div>
  <div className="hero-content w-4/6  text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5  text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">
      Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
      </p>
     <div className="">
     <button className="bg-[#0BE58A] p-3 rounded-full text-black font-bold px-8">Explore Now</button>
     <button className="border-2 ml-10 rounded-full p-3 px-8 font-bold">Our Feedback</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;