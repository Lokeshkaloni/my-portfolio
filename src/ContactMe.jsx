import react from "react";

function ContactMe() {
  return (
    <div className="h-full w-screen bg-black space-y-4 flex flex-col text-white p-2">
      <div className="flex justify-center py-10">
        <h1 className="text-yellow-500 text-5xl font-extrabold">
          GET IN
          <span className="text-white text-5xl font-extrabold"> TOUCH</span>
        </h1>
      </div>
      <div className="text-center px-6 py-2 h-22">
        <h1 className="text-2xl font-bold">DON'T BE SHY !</h1>
        <span>
          Feel free to get in touch with me. I am always open to discuss new
          projects, creative ideas or opportunities. I'll be glad to be part of
          your vesions.
        </span>
      </div>
      <div className="px-6 py-2 border rounded-md h-22">
        <h1 className="text-yellow-500 text-xl font-bold">Mail Me</h1>
        <span>lokeshkaloni@gmail.com</span>
      </div>
      <div className="px-6 py-2 border rounded-md h-22">
        <h1 className="text-yellow-500 text-xl font-bold">Call Me</h1>
        <span>+91 9084496021</span>
      </div>
    </div>
  );
}
export default ContactMe;
