const Hero = () => {
  return (
    <div
      className="bg-cover bg-no-repeat rounded-3xl md:w-full  h-full md:h-[35rem]"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/3kYtv41/banner.png)",
      }}
    >
      <div className="w-10/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-4 py-4">
        <h2 className="text-white text-6xl font-bold">
          Discover an exceptional cooking class tailored for you!
        </h2>
        <p className="text-gray-300 text-xl">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex gap-6">
          <button className="btn btn-accent text-xl">Explore Now</button>
          <button className="btn btn-accent btn-outline text-xl ">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
