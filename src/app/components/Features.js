export default function Features() {
  const data = [
    {
      src: "user.svg",
      title: "20+ Members",
    },
    {
      src: "locationInsights.svg",
      title: "3+ Location",
    },
    {
      src: "event.svg",
      title: "5+ Events",
    },
  ];
  return (
    <div className="pageLayout">
      <div className="flex items-center justify-center md:justify-between flex-wrap gap-10">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3"
            >
              <img
                src={`/assets/icons/${data.src}`}
                className="hover:scale-110"
              />
              <p className=" text-lg">{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
