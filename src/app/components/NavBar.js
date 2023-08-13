export default function NavBar() {
  return (
    <div className="fixed z-50 top-0 backdrop-blur-lg w-full flex items-center justify-between px-5 md:px-20 py-2">
      <img src="/assets/logo.svg" />
      <div className="hidden items-center justify-center gap-10 font-bold text-white md:flex">
        {/* <p >Home</p> */}
        <a className=" cursor-pointer opacity-60 hover:opacity-100" href="#">Home</a>
        <a className=" cursor-pointer opacity-60 hover:opacity-100" href="#InSights">Insights</a>
        <a className=" cursor-pointer opacity-60 hover:opacity-100" href="#Team">Our Team</a>
        <a className=" cursor-pointer opacity-60 hover:opacity-100" href="#Vision">Vision</a>
        <a className=" cursor-pointer opacity-60 hover:opacity-100" href="#Contact">Contact us</a>
      
    
      </div>
    </div>
  );
}
