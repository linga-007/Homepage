import Image from "next/image";
import linga from "../app/lingaphoto.jpg";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="flex-shrink-0 h-[150px] xs:h-[75px] bg-black">
        <div className="container mx-auto h-[50px] flex items-center">
          <nav className="flex flex-row w-[50%] mx-auto justify-evenly pt-2 text-white">
            <button className="hover:text-orange-500 h-8">Dashboard</button>
            <button className="hover:text-orange-500 h-8">Events</button>
            <button className="hover:text-orange-500 h-8">My Requests</button>
            <button className="hover:text-orange-500 h-8">Company news</button>
            <button className="hover:text-orange-500 h-8">Tasks</button>
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
        <div className=" h-[60px] mt-10 text-white flex ">
          <div className="mx-10 font-serif text-3xl flex justify-start">
            Good Morning, Lloyd
          </div>
          
        </div>
      </div>
      <div className="flex-grow container mx-auto p-4">
        {/* Add your content here */}
        <p>Hello, world!</p>
      </div>
    </main>
  );
}
