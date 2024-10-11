import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import for redirection (if using React Router)

const CompleteDetails = () => {
     const navigate = useNavigate(); // Hook for navigating (if using React Router)
  const [collegeName, setCollegeName] = useState("");
  const [yearOfPassing, setYearOfPassing] = useState("");
  const [workExperience, setWorkExperience] = useState([""]);
  const [githubURL, setGithubURL] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");
  const [skills, setSkills] = useState([""]);
  const [dob, setDob] = useState(""); // DOB state


  // Add new work experience
  const handleAddExperience = () => {
    setWorkExperience([...workExperience, ""]);
  };

  // Update work experience
  const handleExperienceChange = (index, value) => {
    const updatedExperiences = [...workExperience];
    updatedExperiences[index] = value;
    setWorkExperience(updatedExperiences);
  };

  // Add new skill
  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  // Update skill
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(collegeName === "" || yearOfPassing === "" || skills.includes("") || workExperience.includes("") || dob === ""){
          toast.error("Please fill all the fields");
          return;
     }

    await axios
      .post(`http://localhost:8000/complete-details/${localStorage.getItem("userId")}`, {
        collegeName,
        yearOfPassing,
        workExperience,
        githubURL,
        linkedinURL,
        skills,
        dob, // Send DOB
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Details Submitted Successfully");
        setTimeout(() => {
          navigate("/"); // Navigate to the login page
        }
            , 2000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  const handleSkip = () => {
    // Example: Navigate to the homepage or another route when skipped
     navigate("/"); // Navigate to the homepage

    // Alternatively, perform any action you want when the form is skipped
  };

  return (
    <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-gray-100">
      <Toaster />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Details Form</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* College Name */}
          <div>
            <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">
              College Name
            </label>
            <input
              id="collegeName"
              type="text"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              placeholder="Enter your college name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ae01ff] focus:border-[#ae01ff]"
              required
            />
          </div>

          {/* Year Of Passing */}
          <div>
            <label htmlFor="yearOfPassing" className="block text-sm font-medium text-gray-700">
              Year of Passing
            </label>
            <input
              id="yearOfPassing"
              type="text"
              value={yearOfPassing}
              onChange={(e) => setYearOfPassing(e.target.value)}
              placeholder="Enter your year of passing"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ae01ff] focus:border-[#ae01ff]"
              required
            />
          </div>

          {/* DOB */}
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ae01ff] focus:border-[#ae01ff]"
              required
            />
          </div>

          {/* Work Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Work Experience</label>
            {workExperience.map((exp, index) => (
              <input
                key={index}
                type="text"
                value={exp}
                onChange={(e) => handleExperienceChange(index, e.target.value)}
                placeholder={`Work Experience ${index + 1}`}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ae01ff] focus:border-[#ae01ff] mb-2"
              />
            ))}
            <button
              type="button"
              onClick={handleAddExperience}
              className="text-[#ae01ff] hover:underline"
            >
              + Add more work experience
            </button>
          </div>

          {/* GitHub URL */}
          <div>
            <label htmlFor="githubURL" className="block text-sm font-medium text-gray-700">
              GitHub URL
            </label>
            <input
              id="githubURL"
              type="url"
              value={githubURL}
              onChange={(e) => setGithubURL(e.target.value)}
              placeholder="Enter your GitHub URL"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ae01ff] focus:border-[#ae01ff]"
              required
            />
          </div>

          {/* LinkedIn URL */}
          <div>
            <label htmlFor="linkedinURL" className="block text-sm font-medium text-gray-700">
              LinkedIn URL
            </label>
            <input
              id="linkedinURL"
              type="url"
              value={linkedinURL}
              onChange={(e) => setLinkedinURL(e.target.value)}
              placeholder="Enter your LinkedIn URL"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ae01ff] focus:border-[#ae01ff]"
              required
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Skills</label>
            {skills.map((skill, index) => (
              <input
                key={index}
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                placeholder={`Skill ${index + 1}`}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ae01ff] focus:border-[#ae01ff] mb-2"
              />
            ))}
            <button
              type="button"
              onClick={handleAddSkill}
              className="text-[#ae01ff] hover:underline"
            >
              + Add more skills
            </button>
          </div>

          {/* Submit and Skip Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="mt-6 w-[48%] bg-[#ae01ff] text-white font-semibold py-2 rounded-md hover:brightness-90 transition"
            >
              Submit Details
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="mt-6 w-[48%] bg-gray-500 text-white font-semibold py-2 rounded-md hover:brightness-90 transition"
            >
              Skip
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8 flex justify-center text-gray-600">
        <p>
          Already submitted?{" "}
          <a href="/login" className="text-[#ae01ff] hover:underline">
            Check Details
          </a>
        </p>
      </div>
    </div>
  );
};

export default CompleteDetails;
