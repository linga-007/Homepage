import Image from "next/image";
import linga from "../app/lingaphoto.jpg";
import Card from "./Card";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
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
      <div className="flex-grow container bg-zinc-300 mx-auto p-4 flex flex-row">
        <div className="h-full w-[30%] flex mx-5 gap-6 flex-col ">
          <div className="h-[150px] rounded-3xl p-5  flex flex-col bg-black">
            <div className="pb-5">Monthly retrospective</div>
            <div className="flex justify-between">
              <h2>In 19 min, 10:00 AM</h2>
              <h2>35 min</h2>
            </div>
            <div className="flex pt-5 justify-between">
              <div className="w-8 h-8  bg-zinc-600 rounded-full"></div>
              <button className="bg-white text-black h-8  w-56 rounded-xl">
                Join now
              </button>
            </div>
          </div>
          <div className="bg-white h-[500px]  p-5 w-[100%] gap-3 text-black flex flex-col rounded-3xl">
            <div className="flex justify-between">
              <h2 className="font-semibold">Upcoming Events</h2>
              <div className="bg-blue-600 text-xm  text-white h-6 w-16 pl-2 rounded-3xl">
                2 new
              </div>
            </div>
            <div className="font-serif">March 27</div>
            <Card/>
            <Card/>
            <Card/>
           
          </div>
        </div>
        <div className="h-[75%] w-[70%] flex mx-5 flex-col bg-black">
          <h2 className="">hello</h2>
          <h2>hello</h2>
        </div>
      </div>
    </main>
  );
}
