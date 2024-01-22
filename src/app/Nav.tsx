import React from 'react'
import Image from 'next/image'
import linga from "../app/lingaphoto.jpg";


const Nav = () => {
  return (
    <div className="flex-shrink-0 h-[150px] xs:h-[75px] bg-black">
        <div className="container mx-auto h-[50px] flex items-center">
          <nav className="flex flex-row w-[50%] mx-auto justify-evenly pt-2 text-white">
            <button className="hover:text-orange-600 h-8">Dashboard</button>
            <button className="hover:text-orange-600 h-8">Events</button>
            <button className="hover:text-orange-600 h-8">My Requests</button>
            <button className="hover:text-orange-600 h-8">Company news</button>
            <button className="hover:text-orange-600 h-8">Tasks</button>
          </nav>
          
          <div className="flex flex-row text-white">
            <h2 className="pt-7">Llyod Robinson</h2>
            <Image
              src={linga}
              width={50}
              height={50}
              alt="img"
              className="pr-2 pt-5"
            ></Image>
          </div>
        </div>
        <div className=" h-[60px] mt-10 text-white flex justify-between ">
          <div className="mx-10 font-serif text-3xl pr-3 flex justify-start">
            Good Morning, Lloyd
          </div>
          <div className="w-[500px] flex justify-evenly">
            <button className="bg-transparent 0 w-48 h-10 text-zinc-300 font-light border border-zinc-300 rounded-full">
              New Request
            </button>
            <button className="bg-orange-600 0 w-48 h-10 text-sm text-white-700 font-light  rounded-full">
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
  )
}

export default Nav