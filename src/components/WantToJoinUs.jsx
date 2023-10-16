const CardData =[
    {
        heading:"Commencement of business ",
        description:"Invested shareholders must confirm payment and office address",
        dueDate:"within 180",
        penalty:"₹50,000",
        penaltyForCompany:"for the company",
        penaltyAmtForDirector:"₹1,000",
        penaltyForDirector: "/day for directors",
    },
    {
        heading:"Auditor Appointment",
        description:"Company informs new auditor and submits ADT.1 form to ROC.",
        dueDate:"within 30",
        penalty:"₹300",
        penaltyForCompany:"per month",
    },
    {
        heading:"DIN eKYC",
        description:"Directors share personal information for identification & verification ",
        dueDate:"Ever year",
        penalty:"₹5,000",
        penaltyForCompany:"one time",
    },
    {
        heading:"Commencement of business ",
        description:"Invested shareholders must confirm payment and office address",
        dueDate:"within 180",
        penalty:"₹50,000",
        penaltyForCompany:"for the company",
        penaltyAmtForDirector:"₹1,000",
        penaltyForDirector: "/day for directors",
    },
    {
        heading:"Auditor Appointment",
        description:"Company informs new auditor and submits ADT.1 form to ROC.",
        dueDate:"within 30",
        penalty:"₹300",
        penaltyForCompany:"per month",
    },
    {
        heading:"DIN eKYC",
        description:"Directors share personal information for identification & verification ",
        dueDate:"Ever year",
        penalty:"₹5,000",
        penaltyForCompany:"one time",
    },
    
]


const WantToJoinUs = () => {
  const card = (data, index) => {
    return (
      <div className="rounded-lg relative bg-white border p-2 flex flex-col items-center  ">
        <div className="bg-gradient-to-r from-primary to-secondory absolute -top-1 -left-1 p-2 rounded-md">
          <span className="font-bold text-white">{index+1}st</span>
        </div>

        <div className="my-4 px-8 ">
          <h2 className="text-xl my-2 font-bold">{data?.heading}</h2>
          <p className="text-center  leading-7">
            {data?.description}
          </p>

          <div className="flex text-sm bg-gray-100 rounded-md p-2 mt-2 gap-2">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-blue-500">Due day</p>
              <p>{data?.dueDate}</p>
              <p>days</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-red-500">Penalty fees</p>
              <p>
                <span className="font-semibold">{data?.penalty}</span> {data?.penaltyForCompany}
              </p>
              <p>
                <span className="font-semibold">{data?.penaltyAmtForDirector}</span> {data?.penaltyAmtForDirector}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-wantToJoinUs bg-no-repeat bg-cover">
    <div className="mt-10 w-11/12 mx-auto max-w-screen-2xl  ">
      <div className="flex flex-col gap-4 items-center ">
        <h2 className=" font-bold text-4xl leading-10 md:leading-[4rem] md:text-[4rem] ">
          Want to{" "}
          <span className="bg-gradient-to-r from-primary to-secondory bg-clip-text text-transparent">
            join
          </span>
          us?
        </h2>
        <p>
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {CardData.map(card)}
      </div>
      {/* <div>{card()}</div> */}
      <p className="py-10">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
        <span className="font-semibold">every day</span> until you file the form
        . There is no maximum penalty amount. So, if you don&apos;t file the form for
        a year, you will owe ₹73,000 per form
      </p>
    </div>
    </div>
  );
};

export default WantToJoinUs;
