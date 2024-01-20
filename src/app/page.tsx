import Image from "next/image";
import linga from "../app/lingaphoto.jpg";
import Card from "./Card";
import company from "../app/company.jpg";

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
      <div className="flex-grow container bg-zinc-200 mx-auto p-4 flex flex-row">
        <div className="h-full w-[30%] flex mx-5 gap-6 flex-col ">
          <div className="h-[150px] wrap rounded-3xl p-5  flex flex-col bg-black">
            <div className="pb-5">Monthly retrospective</div>
            <div className="flex justify-between">
              <h2>In 19 min, 10:00 AM</h2>
              <h2>35 min</h2>
            </div>
            <div className="flex pt-5 justify-between">
              <div className="w-8 h-8  bg-zinc-100 rounded-full"></div>
              <button className="bg-white text-black h-8  w-56 rounded-xl">
                Join now
              </button>
            </div>
          </div>
          <div className="bg-white h-[550px]  p-5 w-[100%] gap-3 text-black flex flex-col rounded-3xl">
            <div className="flex justify-between">
              <h2 className="font-semibold">Upcoming Events</h2>
              <div className="bg-blue-600 text-xm  text-white h-6 w-16 pl-2 rounded-3xl">
                2 new
              </div>
            </div>
            <div className="font-serif">March 27</div>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="w-[70%] flex mx-5 gap-6 flex-col ">
          <div className="h-[300px] rounded-3xl p-5 bg-white w-full ">
            <div className="flex justify-between">
              <h2 className="mx-5 text-black font-medium">Efficiency</h2>
              <h2 className="mx-5 text-black font-medium">This week </h2>
            </div>
            hello
          </div>
          <div className=" h-[400px]  w-full flex flex-row ">
            <div className="w-[60%] rounded-3xl flex  flex-col mr-5">
              <div className="w-full h-[200px] mb-5 bg-white rounded-3xl">
                <div className="p-5 gap-5 flex flex-row">
                  <h2 className="text-black font-bold">Requests</h2>
                  <h2 className="bg-orange-500 rounded-3xl h-7 w-28 pl-3 pt-0.5">
                    Processing
                  </h2>
                </div>
                <div className="flex pr-5 pl-5 justify-between">
                  <div className="flex gap-3 mx-5 text-black flex-col">
                    <h2>Dates</h2>
                    <h2 className="font-semibold">16.03.24 - 26.03.24</h2>
                    <h2 className="font-semibold">16.03.24 - 26.03.24</h2>
                  </div>
                  <div className="flex gap-3 text-black flex-col">
                    <h2>Type</h2>
                    <h2 className="font-semibold">Vacation</h2>
                    <h2 className="font-semibold">Sick Leave</h2>
                  </div>

                  <div className="flex gap-3 mx-5 text-black flex-col">
                    <h2>Assign</h2>
                    <h2 className="font-semibold">Peter Parker</h2>
                    <h2 className="font-semibold">Sara James</h2>
                  </div>
                </div>
              </div>
              <div className="w-full h-[200px] flex justify-around ">
                <div className="bg-blue-600 p-5 rounded-3xl w-[30%]">
                  <div className="w-[50px] h-[50px] mb-5 rounded-2xl bg-blue-300 opacity-25"></div>
                  <div>Day off</div>
                  <div className="font-semibold text-3xl pt-4">0</div>
                </div>
                <div className="bg-white p-5 rounded-3xl w-[30%]">
                  <div className="w-[50px] h-[50px] mb-5 rounded-2xl bg-blue-300 opacity-40"></div>
                  <div className="text-black font-medium">Vacation</div>
                  <div className="font-semibold text-black text-3xl pt-4">
                    12
                  </div>
                </div>
                <div className="bg-white p-5 rounded-3xl w-[30%]">
                  <div className="w-[50px] h-[50px] mb-5 rounded-2xl bg-orange-300 opacity-60"></div>
                  <div className="text-black font-medium">Sick</div>
                  <div className="font-semibold text-black text-3xl pt-4">
                    10
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%] rounded-3xl flex flex-col">
              <Image
                src={company}
                alt="img"
                height={600}
                width={400}
                className=" rounded-t-3xl"
              ></Image>
              <div className="p-5 bg-white text-black rounded-b-3xl flex flex-col">
                <h2 className="font-semibold pb-4">
                  Updates in Devs and Designers Schedule
                </h2>
                <h2 className="mb-1">
                  We have complied a list of the main changes in March
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
