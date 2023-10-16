
const Footer = () => {
  return (
    <div className=" bg-primary bg-gradient-to-br from-primary to-secondory">
      <div className="w-11/12 mx-auto max-w-screen-2xl">

     
      <div className="flex flex-col items-start md:flex-row justify-between gap-5  text-white px-3 py-5   ">
        <div className="flex flex-col gap-3 max-w-sm">
            <div>

          <img
            src="/TopBarLogo.png"
            alt="logo"
            className="filter brightness-0 invert"
            />
            </div>
          <p>India&apos;s first platform dedicated to simplifying partner search</p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">COMPANY</h3>
          <ul className="flex flex-col gap-3">
            <li>About</li>
            <li>Pricing</li>
            <li>careers</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">SOLUTIONS</h3>
          <ul className="flex flex-col gap-3">
            <li>Search</li>
            <li>Connect</li>
            <li>Research</li>
            <li>Academy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">RESOURCES</h3>
          <ul className="flex flex-col gap-3">
            <li>Blogs</li>
            <li>forms</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">SUPPORT</h3>
          <ul className="flex flex-col gap-3">
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">LEGAL</h3>
          <ul className="flex flex-col gap-3">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>

      {/* horizontol line */}
       <hr className="my-4" />

      {/* bottom footer */}

      <div className="flex flex-col md:flex-row  justify-start md:justify-between gap-5 items-center mb-4">
         <p className="text-white  ">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
          <div className="flex items-center  gap-10 ">
                <img src="/svg/facebook.svg" alt="facebook" />
                <img src="/svg/instagram.svg" alt="instagram" />
                <img src="/svg/linkedin.svg" alt="linkedin" />
                <img src="/svg/whatsapp.svg" alt="whatsapp" />
          </div>
      </div>
      </div>

      <p className="bg-black px-5 py-5 text-white text-center">
        Registered trademark of India Private Limited © 2023 loerumipsum Inc.
        All Rights Reserve
      </p>
    </div>
  );
};

export default Footer;
