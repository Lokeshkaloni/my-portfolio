import react from "react";

function MyWorks() {
  return (
    <div className="h-full w-screen bg-black space-y-4 flex flex-col text-white p-2">
      <div className="flex justify-center py-10">
        <h1 className="text-yellow-500 text-5xl font-extrabold">
          MY RECENT
          <span className="text-white text-5xl font-extrabold"> PROJECTS</span>
        </h1>
      </div>
      <div className="px-6 py-2 border rounded-md h-22">
        <h1 className="text-yellow-500 text-xl font-bold">Unit Converter</h1>
        <span>
          Unit converter is a software, which allows you to convert mathematical
          units to the units you want. the process involves multiplication or
          division, to provide the exact converted value the user want ,can be
          done very easily.
        </span>
      </div>
      <div className="px-6 py-2 border rounded-md h-22">
        <h1 className="text-yellow-500 text-xl font-bold">Meet Our Teamcard</h1>
        <span>
          displays, teammembers with their full information side by side. alone
          we can do so little, together we can do so much.-- LOKESH KALONI
        </span>
      </div>
      <div className="px-6 py-2 border rounded-md h-22">
        <h1 className="text-yellow-500 text-xl font-bold">Show Table</h1>
        <span>
          this software allows you to find the multiplication talble of any
          number you want , the purpose of making this software is to help
          children learn tables of numbers they want to.
        </span>
      </div>
      <div className="px-6 py-2 border rounded-md h-22">
        <h1 className="text-yellow-500 text-xl font-bold">To-Do List App</h1>
        <span>
          this software is excellent , by this you can create a to-do list of
          your works and get it checked if you have done the work or not. this
          is very good software for those who eventually forget to do the work
          that they thought of doing before, to-do app reminds you of doing that
          work.
        </span>
      </div>
      <div className="px-6 py-2 border rounded-md h-22">
        <h1 className="text-yellow-500 text-xl font-bold">
          Figma responsible design
        </h1>
        <span>this is a extraordinary website disigned by me .</span>
      </div>
      <div className="px-6 py-2 border rounded-md h-22">
        <h1 className="text-yellow-500 text-xl font-bold">
          Guess my fav fruit
        </h1>
        <span>
          its just a simple game of gussing my fav fruit. if you get the answer
          right you get awarded with 100rupees G-Pay.
        </span>
      </div>
      <div className="px-6 py-2 border rounded-md h-22">
        <h1 className="text-yellow-500 text-xl font-bold">CodeYogi App</h1>
        <span>
          this is a website used by students as well as teachers of CodeYogi web
          dovelopment program . i made the design of the website so good i was
          appreciated by Mark zukerberg.
        </span>
      </div>
    </div>
  );
}
export default MyWorks;
