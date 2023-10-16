const ExploreFeature = () => {
  return (
    <div className="mt-10 w-11/12  mx-auto max-w-screen-2xl my-10 ]">
      <div className="grid  grid-cols-1  md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-8">
            <div  className="flex flex-col gap-8">
              <h2 className=" font-bold text-4xl leading-10 md:leading-[4rem] md:text-[4rem] ">
                <span className="bg-gradient-to-r from-primary to-secondory bg-clip-text text-transparent">
                  All-in-One
                </span>{" "}
                platform that Makes Easier
              </h2>
              <p>
                We are more than a platform; We are your success partner.
                Discover our services to achieve your business and educational
                goals
              </p>
            </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col md:flex-row items-center">
              <img src="/search.png" alt="search" />
              <p className="text-center">
                <span className="font-semibold">SEARCH</span> for vital company
                information
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/connect.png" alt="connect" />
              <p className="text-center">
                <span className="font-semibold">CONNECT</span> with the
                resources to meet your business needs
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/research.png" alt="research" />
              <p className="text-center">
                <span className="font-semibold">RESEARCH</span> and generate
                reports that drive growth
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/academy.png" alt="academy" />
              <p className="text-center">
                <span className="font-semibold">ACADEMY</span> to give you the
                skills for success in your career
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex ">
            <div className="flex flex-col gap-4 relative">
              <span className="p-2 text-sm rounded-2xl rounded-ee-none bg-[#EFD9F9] ">
                Hey, check out loreumipsum services.{" "}
              </span>
              <span className="p-2 text-sm rounded-2xl rounded-ee-none bg-[#EFD9F9]">
                I learned from their videos, got my first job.
              </span>
              <span className="p-2 text-sm rounded-2xl rounded-ee-none bg-[#EFD9F9]">
                You won&apos;t be disappointed with their services.{" "}
              </span>
            </div>

            <div>
              <img src="/Student.png" alt="" />
            </div>
          </div>

          <div className="flex ">
            <div>
              <img src="/Teacher.png" alt="" />
            </div>
            <div className="flex flex-col gap-4 relative">
              <span className="p-2 text-sm mt-4 rounded-2xl rounded-es-none bg-[#DDF3FF] ">
                I got a perfect analysis report from them too{" "}
              </span>
              <span className="p-2 text-sm rounded-2xl rounded-es-none bg-[#DDF3FF]">
                Oh, that&apos;s great.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreFeature;
