export default function Footer() {
  return (
    <div className="footerLayout bg-slate-800 grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-20 footer">
      <div className="flex items-center justify-center md:justify-start md:items-start ">
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-extrabold">CONTACT US</h2>
          <p className="flex items-center justify-start gap-5">
            <img src="/assets/icons/email.svg" className="w-5" />
            <span>
              <a href="mailto:xgenfuels@gmail.com" className="underline">
              xgenfuels@gmail.com
              </a>
            </span>
          </p>
          <p className="flex items-start justify-start gap-5">
            <img src="/assets/icons/linkedin.svg" className="w-4 mt-1" />
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                className="underline"
                href="https://www.linkedin.com/company/xgenfuels/"
              >
                X-GEN FUELS
              </a>
            </span>
          </p>
          <p className="flex items-center justify-start gap-5">
            <img src="/assets/icons/instagram.svg" className="w-5" />
            <span>
              <a className="underline" href="https://instagram.com/xgenfuels?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                Instagram
              </a>
            </span>
          </p>
          
        </div>
      </div>
      <div className="flex items-center text-center justify-center flex-col gap-5">
        {/* <h2 className=" text-xl font-extrabold">WORKING HOURS</h2> */}
        {/* <p className="flex items-center justify-center gap-5">
          <span>
            All Days Open <br />
            Except For National Holidays
          </span>
        </p> */}
      </div>
      <div className="flex items-center md:items-end text-center justify-center flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-3">
          <img src="/assets/logo.svg" className=" w-24" />
          <h2 className="text-xl font-extrabold">X-GEN FUELS</h2>
          <div className="flex items-center justify-center gap-7">
            <a href="mailto:xgenfuels@gmail.com">
              <img src="/assets/icons/mail.svg" className="w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/xgenfuels/"
            >
              <img src="/assets/icons/linkedin.svg" className="w-6" />
            </a>
            <a href="https://instagram.com/xgenfuels?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"> <img src="/assets/icons/instagram.svg" className="w-6" /></a>
            
          </div>
        </div>
      </div>
    </div>
  );
}
