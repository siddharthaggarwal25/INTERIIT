import React, { useState } from "react";
import { Link } from "react-router-dom";

// import HostProjectPage2 from './HostProjectPage2';

const InputField = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
      <label className="text-2xl tracking-tight text-black text-opacity-80">
        {label}
      </label>
      <input
        className="overflow-hidden gap-4 self-stretch px-6 py-3 mt-3 w-full text-base tracking-tight bg-white rounded-xl border border-solid border-black border-opacity-10 text-black text-opacity-40 max-md:px-5"
        placeholder={placeholder}
        aria-label={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const TextArea = ({ label, placeholder, helperText, value, onChange }) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[775px] max-md:max-w-full">
      <div className="flex flex-col w-full min-h-[197px] max-md:max-w-full">
        <label className="text-2xl tracking-tight text-black text-opacity-80 max-md:max-w-full">
          {label}
        </label>
        <textarea
          className="overflow-hidden flex-1 gap-4 px-6 py-3 mt-3 text-base tracking-tight bg-white rounded-2xl border border-solid border-black border-opacity-10 size-full text-black text-opacity-40 max-md:px-5 max-md:max-w-full"
          placeholder={placeholder}
          aria-label={label}
          value={value}
          onChange={onChange}
        />
      </div>
      {helperText && (
        <p className="mt-2 text-base tracking-tight text-black text-opacity-60 max-md:max-w-full">
          {helperText}
        </p>
      )}
    </div>
  );
};

const FileUpload = ({ label, subLabel, buttonText, onChange }) => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] text-black text-opacity-80 max-md:max-w-full">
      <h2 className="text-2xl font-medium tracking-tight">{label}</h2>
      <p className="mt-1 text-base font-light tracking-tight max-md:max-w-full">
        {subLabel}
      </p>
      <label
        htmlFor="fileUpload"
        className="flex gap-2.5 justify-center items-center px-4 mt-1 w-full text-sm tracking-tight text-fuchsia-600 whitespace-nowrap rounded-xl border border-dashed bg-zinc-100 border-black border-opacity-20 leading-[56px] min-h-[48px] max-md:max-w-full cursor-pointer"
      >
        <div className="flex gap-2 justify-center items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/24c6179fecb0dd6726554e8f92e45e4ae309928a4d0da899188125cb387beffb?placeholderIfAbsent=true&apiKey=c1b43e9dee0841bb99e378bc69db4ec8"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt=""
          />
          <span className="self-stretch my-auto w-[60px]">{buttonText}</span>
        </div>
      </label>
      <input
        type="file"
        id="fileUpload"
        className="sr-only"
        aria-label={`Upload ${label}`}
        onChange={onChange}
      />
    </div>
  );
};

const HostProjectPage1 = () => {
  const [projectName, setProjectName] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [domains, setDomains] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col w-full max-md:max-w-full mt-36 px-20">
      {/* <div className=" mr-auto  font-bold p-10 text-center ">Host Project</div> */}
      <div className="flex flex-wrap gap-10 items-center w-full font-medium max-md:max-w-full">
        <InputField
          label="Name of Project"
          placeholder="Enter a name for the project"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <InputField
          label="Expected Duration"
          placeholder="Choose an estimated time"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <InputField
          label="Location"
          placeholder="Choose location type"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-start mt-11 w-full font-medium max-md:mt-10 max-md:max-w-full">
        <TextArea
          label="Brief Description"
          placeholder="Enter a brief summary about the project"
          helperText="*Be very clear about the language and explanations so that a student could understand"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextArea
          label="Any Special requirements"
          placeholder="Enter any special skill/requirement"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-10 items-end mt-11 w-full max-md:mt-10 max-md:max-w-full">
        <InputField
          label="Choose project Domains"
          placeholder="Choose all domains covering the project"
          value={domains}
          onChange={(e) => setDomains(e.target.value)}
        />
        <FileUpload
          label="Project documents"
          subLabel="PNG, JPG, PDF"
          buttonText="Upload"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex justify-center items-center mt-30 w-full text-2xl font-semibold tracking-tight max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap justify-center items-center gap-9 my-auto min-w-[300px] w-[600px] mt-20">
          <Link
            to="/hostProject1"
            className="overflow-hidden flex justify-center items-center px-14 py-3 text-white whitespace-nowrap bg-fuchsia-600 w-[300px] rounded-[100px] max-md:px-5"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HostProjectPage1;
