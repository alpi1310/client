import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recommend from "../components/Recommend";
const rooturl = import.meta.env.VITE_APP_BACKEND_ROOT || "http://localhost:300"


function DetailPage() {
  const { id } = useParams();
  console.log(id, "id");
  // usestate
  const [ca, setdetail] = useState({});
  console.log(ca, "ca");

  // useEffect
  useEffect(() => {
    fetch(`${rooturl}/CA?id=${id}`)
      .then((res) => res.json())
      .then((data) => setdetail(data[0]));
  }, [id]);

  return (
    <>
      <div className="grid grid-cols-2 mb-8 mx-12 my-10">
        <div>
          <h1 className="font-bold text-2xl">{ca?.name}</h1>
          <p>{ca?.intro}</p>

          <p className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <span>
              {ca?.rating} ({ca?.reviewCount})
            </span>
          </p>

          <div className="shadow-lg p-6  bg-white  rounded-xl my-3">
            <div>
              <div className="my-2">
                <p>{ca?.taskComplexity}</p>
                <p>{ca?.price}</p>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>

                <p>{ca?.deliveryTime}</p>
              </div>

              <div className="flex gap-6">
                <button className="bg-primary text-white font-bold py-2 px-4  rounded-lg w-55">
                  Request Proposal
                </button>
                <button className="bg-white-500 border border-primary font-bold text-primary py-2 px-4  rounded-lg mr-6 w-55">
                  Chat with me
                </button>
              </div>
            </div>
          </div>


          <div className="shadow-lg p-6  bg-white  rounded-xl my-3">
            <h2 className="font-bold text-xl py-3">What people say?</h2>
            <p>
              {ca?.testimonial?.text}
            </p>
          </div>
        </div >
      

      <div>

        <div className=" rounded-lg">
          <img src={`${ca?.image}`} alt={ca?.name} />
        </div>

        <div>
          <h2 className=" text-sm font-semibold">About {ca?.name}</h2>
          <div className="flex gap-4">
            <div >
              <p className="text-[#999999] text-sm font-semibold">FROM</p>
              <p>{ca?.about?.from}</p>
            </div>
            <div>
              <p className="text-[#999999] text-sm font-semibold">PARTNER SINCE</p>
              <p>{ca?.about?.partnerSince}</p>
            </div>
            <div>
              <p className="text-[#999999] text-sm font-semibold">AVERAGE RESPONSE TIME</p>
              <p>{ca?.about?.averageResponseTime}</p>
            </div>
          </div>
          <div>
            <p className="text-[#999999] text-sm font-semibold">About</p>
            <p>{ca?.about?.description}</p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-[#999999] text-sm font-semibold">SERVICES I OFFER</p>
              <ul className="list-disc">
                {ca?.about?.services?.map((data, i) => (
                  <li key={i}>{data}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#999999] text-sm font-semibold">WHY ME?</p>
              <ul className="list-disc">
                {ca?.about?.benefits?.map((data, i) => (
                  <li key={i}>{data}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
      <h4 className="font-bold text-2xl items-center mx-16">Recommended for you</h4>
      <Recommend />
    </>
  );
}
export default DetailPage;
