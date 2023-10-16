import  { useState } from 'react'
import { Link } from "react-router-dom";

const rooturl = import.meta.env.VITE_APP_BACKEND_ROOT || "http://localhost:300"

const HeroSection = () => {
    const [searchInput, updateInput] = useState('')
    const [CA, setCA] = useState([])
    const [show, setShow] = useState(false)
    const searchCAs = () => {
        fetch(`${rooturl}/CA?q=${searchInput}`)
            .then(res => res.json())
            .then(data => setCA(data))
    }

    return (
        <div className='bg-gradient-custom '>
            <div className="flex items-center flex-col lg:flex-row gap-5  py-3  md:py-10 w-11/12 mx-auto max-w-screen-2xl ">
                <div className='order-2 lg:order-none flex flex-col gap-4'>
                    <h1 className=" font-bold text-4xl leading-10 md:leading-[4rem] md:text-[4rem] ">Find <span className="bg-gradient-to-r from-primary to-secondory bg-clip-text text-transparent">Partners</span>(CAs) available online</h1>
                    <p className='text-gray-500'><span className="font-bold ">CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
                    <form className="flex"
                        onSubmit={(e) => {
                            e.preventDefault()
                            searchCAs()
                        }}
                    >
                        <div className='relative w-1/2 '>
                        <input type="text" 
                            value={searchInput}  onChange={(e) => updateInput(e.target.value)}
                            placeholder="Search by name" 
                            onFocus={() => setShow(true)}
                            onBlur={() => setShow(false)}
                            className=" p-4  w-full bg-slate-100 border border-r-0 border-slate-300 rounded-s-[10px] outline-none " 
                            />
                        <div className={`absolute top-full mt-1 bg-slate-100 z-10 w-full rounded-2xl p-4 h-40 overflow-auto ${!show && "opacity-0"} `}>
                        {CA.map((value, index) => <p key={index}> <Link to={`/detail/${value.id}`}>{value.name}</Link></p>)}
                        {!CA.length && <p>No CA found</p>}
                        </div>
                        </div>
                        
                        <button className="bg-blue-500 text-white  py-2 px-7 rounded-e-lg box-decoration-clone">
                            Search
                        </button>
                    </form>
                    
                </div>

                <div className="flex gap-2  py-3 order-1 lg:order-none">
                    <div className='min-w-[30%] mt-16'>
                    <img src="/Picture1.png" alt="girl" className='w-full ' />
                    </div>
                    <div className=' min-w-[30%] '>
                    <img src="/Picture2.png" alt="grp" className='w-full' />
                    </div>
                    <div className='mt-10  min-w-[30%] '>
                    <img src="/Picture3.png" alt="girl" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
