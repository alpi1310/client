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
      <div className="grid grid-cols-2 mb-8">
        <div>
          <h1>{ca?.name}</h1>
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

          <div>
            <div>
              <p>{ca?.taskComplexity}</p>
              <p>{ca?.price}</p>
            </div>

            <div className="flex  items-center">
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

            <div className="flex">
              <button className="bg-primary text-white font-bold py-2 px-4  rounded-lg">
              Request Proposal
              </button>
              <button className="bg-white-500 border border-primary font-bold text-primary py-2 px-4  rounded-lg mr-6 ">
              Chat with me
</button>
            </div>

            <div>
                <h2>What people say?</h2>
                <p>
                    {ca?.testimonial?.text}
                </p>
            </div>
          </div>
        </div>
        <div>

            <div>
                <img src={`${ca?.image}`} alt={ca?.name} />
            </div>

            <div>
                <h2>About {ca?.name}</h2>
                <div>
                    <div>
                        <p>FROM</p>
                        <p>{ca?.about?.from}</p>
                    </div>
                    <div>
                        <p>PARTNER SINCE</p>
                        <p>{ca?.about?.partnerSince}</p>
                    </div>
                    <div>
                        <p>AVERAGE RESPONSE TIME</p>
                        <p>{ca?.about?.averageResponseTime}</p>
                    </div>
                </div>
                <div>
                    <p>About</p>
                    <p>{ca?.about?.description}</p>
                </div>
                <div>
                    <div>
                        <p>SERVICES I OFFER</p>
                        <ul>
                            {ca?.about?.services?.map((data,i)=>(
                                <li key={i}>{data}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>WHY ME?</p>
                        <ul>
                            {ca?.about?.benefits?.map((data,i)=>(
                                <li key={i}>{data}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


        </div>
      </div>
        <Recommend/>
    </>
  );
}
export default DetailPage;
