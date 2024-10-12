import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom


function HostProjectPage3() {
  const domains = ["UI/UX", "Web Development", "Product Management"];
  const infoFields = [
    { label: "Deadline", value: "12th December 2024" },
    { label: "Duration", value: "3 months" },
    { label: "Payment", value: "₹50000" },
  ];

  return (
    <main className="flex flex-col justify-between p-11 bg-white rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)] max-md:px-5">
      <div className="flex flex-col w-full max-md:max-w-full">
        <header className="flex flex-col items-start max-w-full text-xl font-medium tracking-tighter text-black whitespace-nowrap">
          <div className="flex gap-4 items-center" />
        </header>

        <section className="flex flex-col justify-center mt-20 w-full shadow-[0px_4px_20px_rgba(0,0,0,0.1)] max-md:mt-10 max-md:max-w-full p-6 rounded-xl">
          <div className="flex flex-col mt-8 w-full">
            <h2 className="text-xl font-semibold tracking-tight text-black text-opacity-70">
              Domains
            </h2>
            <div className="flex gap-4 items-center mt-2 text-sm font-medium tracking-tight text-black text-opacity-60">
              {domains.map((domain, index) => (
                <span
                  key={index}
                  className="overflow-hidden gap-2.5 px-5 py-2 whitespace-nowrap bg-white rounded-xl border border-solid border-black border-opacity-10"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10 mt-8 w-full">
            {infoFields.map((field, index) => (
              <div
                key={index}
                className="flex flex-col w-full"
              >
                <h3 className="text-xl font-semibold tracking-tight text-black text-opacity-70">
                  {field.label}
                </h3>
                <input
                  type="text"
                  defaultValue={field.value}
                  className="mt-2 px-5 py-3 w-full text-lg font-medium tracking-tight rounded-xl border border-solid border-black border-opacity-10 text-black text-opacity-60 focus:outline-none focus:border-fuchsia-600 transition"
                  // Added onChange handler for input
                  onChange={(e) => console.log(`${field.label}: ${e.target.value}`)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="flex justify-center mt-10 w-full">
  <Link
    to="/hostProject3" // Specify the path you want to navigate to
    className="px-14 py-4 text-white bg-fuchsia-600 rounded-full hover:bg-fuchsia-700 transition duration-300 ease-in-out min-w-[240px] text-2xl font-semibold flex justify-center items-center"
  >
    Next
  </Link>
</div>
    </main>
  );
}

export default HostProjectPage3;
