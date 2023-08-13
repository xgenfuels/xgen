export default function Hero() {
  return (
    <div
      className="pageLayout relative flex items-center justify-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <video
        playsInline
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover scale-150"
      >
        <source src="/assets/hero_bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="flex flex-col items-center justify-center gap-10  text-center text-shadow-md h-full relative z-10">
        <h1 className="text-5xl md:text-9xl font-extrabold text-[#ffffffad] hover:text-white hover:scale-105">
          X-GEN-FUELS
        </h1>
        <p className="w-full md:w-6/12 text-[#ffffffad] hover:text-white hover:scale-105">
          Welcome to X-GEN FUELS: Revolutionizing Energy with Hydrogen! We drive
          innovation, collaborate with industry, and create a sustainable future
          with clean energy. Join us in the #HydrogenRevolution now!
        </p>
      </div>
    </div>
  );
}
