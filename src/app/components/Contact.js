export default function Contact() {
  return (
    <div id="Contact" className="pageLayout">
      <h1 className="text-center font-londrina text-3xl md:text-4xl font-bold">
        CONTACT US
      </h1>
      <div className="gradient mt-16 md:mt-30 grid grid-cols-1 md:grid-cols-2 gap-10 p-5 md:p-10 rounded-2xl">
        <div className="flex items-center justify-start order-2 md:order-1">
          <div className="flex items-start flex-col gap-5 w-full lg:w-8/12">
            <input className="inputBx" placeholder="Name" name="name" />
            <input
              className="inputBx"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="inputBx"
              placeholder="Message"
              rows={6}
              name="message"
            />
            {/* {isSuccess && (
              <div className=" bg-primary text-white w-full p-2 rounded-md text-center">
                Message sent
              </div>
            )} */}
            <button
              type="submit"
              className="btnPrimary"
              //   disabled={btnText == "Submitting..."}
              //   style={{
              //     opacity: btnText == "Submitting..." ? 0.5 : 1,
              //   }}
            >
              <p>Submit</p>
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <img src="/assets/icons/earth.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}
