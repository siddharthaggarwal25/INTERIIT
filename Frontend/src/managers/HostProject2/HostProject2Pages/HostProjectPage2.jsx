import React from "react";
import { Link } from "react-router-dom";

const HostProjectPage2 = () => {
  return (
    <>
      <main className="flex flex-col font-medium mt-32 px-28">
        <section className="flex flex-wrap gap-10 items-center mt-11 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <h2 className="text-2xl tracking-tight text-black text-opacity-80 max-md:max-w-full">
              Preferred time zones to hold meetings
            </h2>
            <div className="flex flex-wrap gap-3 items-start mt-3 w-full text-base tracking-tight whitespace-nowrap text-black text-opacity-40 max-md:max-w-full">
              <div className="flex shrink-0 gap-4 bg-white rounded-xl border border-solid border-black border-opacity-10 h-[54px] w-[86px]" />
              <div className="overflow-hidden flex-1 shrink gap-4 self-stretch px-6 py-4 bg-white rounded-xl border border-solid border-black border-opacity-10 min-h-[54px] min-w-[240px] max-md:px-5 max-md:max-w-full">
                Monday
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <h2 className="text-2xl tracking-tight text-black text-opacity-80 max-md:max-w-full">
              Preferred Meet Timings
            </h2>
            <div className="flex flex-wrap gap-6 items-center mt-3 w-full whitespace-nowrap max-md:max-w-full">
              <div className="flex flex-1 shrink gap-4 self-stretch my-auto bg-white rounded-xl border border-solid basis-12 border-black border-opacity-10 h-[54px] min-w-[240px] w-[244px]" />
              <span className="self-stretch my-auto text-xl tracking-tight text-black text-opacity-80">
                to
              </span>
              <div className="overflow-hidden flex-1 shrink gap-6 self-stretch px-6 py-4 my-auto text-base tracking-tight bg-white rounded-xl border border-solid border-black border-opacity-10 min-h-[54px] min-w-[240px] text-black text-opacity-40 max-md:px-5">
                Monday
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-wrap gap-10 items-start mt-11 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink text-2xl tracking-tight basis-0 min-w-[240px] text-black text-opacity-80 max-md:max-w-full">
            <h2>Project Amount</h2>
            <div className="flex gap-4 mt-3 w-full bg-white rounded-xl border border-solid border-black border-opacity-10 min-h-[54px] max-md:max-w-full" />
          </div>
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <h2 className="text-2xl tracking-tight text-black text-opacity-80">
              Terms and conditions
            </h2>
            <div className="overflow-hidden gap-6 px-6 pt-3 pb-28 mt-3 w-full text-base tracking-tight bg-white rounded-2xl border border-solid border-black border-opacity-10 min-h-[143px] text-black text-opacity-40 max-md:px-5 max-md:pb-24 max-md:max-w-full">
              Enter any special skill/requirement
            </div>
          </div>
        </section>

        {/* New section added at the bottom */}
        <section className="flex flex-col items-center mt-10 w-full">
          <div className="flex justify-center mt-6">
            <Link
              to="/hostProject2"
              className="overflow-hidden flex justify-center items-center px-14 py-4 text-lg font-bold text-white whitespace-nowrap bg-fuchsia-600 w-[300px] rounded-[100px] max-md:px-5 transition duration-300 ease-in-out hover:bg-fuchsia-700"
            >
              Next
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default HostProjectPage2;
