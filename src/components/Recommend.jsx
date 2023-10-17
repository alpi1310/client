import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const rooturl = import.meta.env.VITE_APP_BACKEND_ROOT || "http://localhost:300"

const Recommend = () => {
  const [ca, setCs] = useState([]);

  useEffect(() => {
    fetch(`${rooturl}/CA`)
      .then((res) => res.json())
      .then((data) => setCs(data));
  }, []);

  const card = (data, i) => {

    if (i >= 3) return

    return (<div>
      <div>
        <img src={data?.image} alt={data?.name} />
      </div>
      <div>
        <div className="font-semibold text-xl flex gap-4">
          <div >
            <h2>{data?.name}</h2>
          </div>
          <div>
            <h2>{data?.price}</h2>
          </div>

        </div>
       
        <p>{data?.intro}</p>
        <div className="flex">
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
          {data?.rating} ({data?.reviewCount})
        </span>
        </div>
      </div>
      <Link to={`/detail/${data?.id}`}>
        <button className="bg-primary text-white  py-2 px-4  rounded-xl w-55">
          View service
        </button>
      </Link>
    </div>)
  };

  return (
    <dir className="flex gap-5">
      {ca?.map(card)}
    </dir>
  );
};

export default Recommend;
