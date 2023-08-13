export default function Vision() {
  return (
    <div className="pageLayout" id="Vision">
      <h1 className="text-center font-londrina text-3xl md:text-4xl font-bold">
        VISION
      </h1>

      <div
        className="overflow-hidden rounded-2xl mt-16 md:mt-30 relative vison"
        style={{
          minHeight: "100vh",
          height: "100%",
        }}
      >
        <div className="h-full w-full z-20 top-0 left-0 absolute p-5 md:p-20 flex items-center justify-center flex-col gap-20 md:gap-40 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40 w-full">
            {[
              "🌟 Pioneering Clean Energy: At X-GEN FUELS,we lead the charge in the hydrogen-based revolution, envisioning a greener world powered by clean energy solutions.",
              "🚀 Collaborating for Global Impact: We believe in the power of partnerships. By collaborating with industry, research we strive to drive sustainable progress and make a significant global impact.",
            ].map((data, index) => {
              return (
                <div
                  key={index}
                  className=" bg-white flex items-center justify-center p-4 md:p-8 rounded-xl hover:scale-105"
                >
                  <p className=" text-md md:text-lg text-justify">{data}</p>
                </div>
              );
            })}
          </div>

          <div className=" bg-white flex items-center justify-center p-4 md:p-8 rounded-xl hover:scale-105 w-full md:w-3/6">
            <p className=" text-md md:text-lg text-justify">
              🌍 Empowering Sustainable Progress: Our mission is to provide
              accessible and eco-friendly energy solutions, empowering
              communities and industries to thrive in a brighter and more
              sustainable future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
