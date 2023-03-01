import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1>Want tips & tricks to optimize your flow?</h1>
          <p>Sing up to our news letter and stay up date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-green-600 text-black rounded-md font-medium w-[200px] ml-4 px-6 py-3 ">
              {" "}
              Notify Me
            </button>
          </div>
          <p className="mt-2">
            We care bout the protection of your data Read our{" "}
            <span className="bg-green-600">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
