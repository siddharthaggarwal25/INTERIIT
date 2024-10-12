import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineFile, AiOutlineCalendar, AiOutlineClockCircle, AiOutlineDollarCircle } from 'react-icons/ai';
import { toast,Toaster } from 'react-hot-toast';

const HostProject = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: '',
    duration: '',
    location: '',
    description: '',
    requirements: '',
    domains: '',
    documents: '',
    meetingDays: '',
    meetingTime: '',
    amount: '',
    terms: '',
    skills: '',
  });



  const [errors, setErrors] = useState({});

  const nextStep = () => {
    if (validateForm()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.projectName) newErrors.projectName = 'Project Name is required';
    if (!formData.duration) newErrors.duration = 'Deadline is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.domains) newErrors.domains = 'Project domains are required';
    
    console.log(newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-32 pb-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl border border-gray-300">
        {step === 1 && (
          <BasicInfo formData={formData} handleChange={handleChange} nextStep={nextStep} errors={errors} />
        )}
        {step === 2 && (
          <AdditionalInfo formData={formData} handleChange={handleChange} prevStep={prevStep} nextStep={nextStep} errors={errors} />
        )}
        {step === 3 && (
          <ReviewInfo formData={formData} prevStep={prevStep} nextStep={nextStep} />
        )}
        {step === 4 && <CompletionPage />}
      </div>
    </div>
  );
};

const BasicInfo = ({ formData, handleChange, nextStep, errors }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-700 border-b pb-3">Basic Info</h2>
      <div className="flex flex-col space-y-4">
        <label>Project Name</label>
        <input
          type="text"
          placeholder="Enter your project name"
          value={formData.projectName}
          onChange={handleChange('projectName')}
          className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
        />
        {errors.projectName && <p className="text-red-500">{errors.projectName}</p>}
        
        <label>Expected Deadline</label>
        <input
          type="date"
          placeholder="Enter expected duration"
          value={formData.duration}
          onChange={handleChange('duration')}
          className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
        />
        {errors.duration && <p className="text-red-500">{errors.duration}</p>}
        
        <label>Location</label>
        <input
          type="text"
          placeholder="Enter the project location"
          value={formData.location}
          onChange={handleChange('location')}
          className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
        />
        {errors.location && <p className="text-red-500">{errors.location}</p>}
        
        <label>Description</label>
        <textarea
          placeholder="Enter a short description"
          value={formData.description}
          onChange={handleChange('description')}
          className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
        />
        {errors.description && <p className="text-red-500">{errors.description}</p>}
        <label>Skills required</label>
        <textarea
          placeholder="Enter the skills required"
          value={formData.skills}
          onChange={handleChange('skills')}
          className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
        />
        {errors.description && <p className="text-red-500">{errors.description}</p>}
        
        <label>Special Requirements</label>
        <input
          type="text"
          placeholder="Enter special requirements (if any)"
          value={formData.requirements}
          onChange={handleChange('requirements')}
          className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
        />
        {errors.requirements && <p className="text-red-500">{errors.requirements}</p>}
        
        <label>Project Domains</label>
        <input
          type="text"
          placeholder="Enter project domains"
          value={formData.domains}
          onChange={handleChange('domains')}
          className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
        />
        {errors.domains && <p className="text-red-500">{errors.domains}</p>}
        
        <label>Upload Documents <AiOutlineFile className="inline-block ml-2" /></label>
        <input
          type="file"
          placeholder="Upload relevant documents"
          onChange={handleChange('documents')}
          className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
        />
        {errors.documents && <p className="text-red-500">{errors.documents}</p>}
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={nextStep}
          className="bg-[#ae01ff] text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const AdditionalInfo = ({ formData, handleChange, prevStep, nextStep, errors }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-700 border-b pb-3">Additional Information</h2>
      <div className="flex flex-col space-y-4">
        <label>Preferred Days for Meetings <AiOutlineCalendar className="inline-block ml-2" /></label>
        <input
          type="text"
          placeholder="Enter preferred days for meetings"
          value={formData.meetingDays}
          onChange={handleChange('meetingDays')}
          className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
        />
        {errors.meetingDays && <p className="text-red-500">{errors.meetingDays}</p>}
        
        <label>Preferred Time for Meetings <AiOutlineClockCircle className="inline-block ml-2" /></label>
        <input
          type="text"
          placeholder="Enter preferred time for meetings"
          value={formData.meetingTime}
          onChange={handleChange('meetingTime')}
          className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
        />
        {errors.meetingTime && <p className="text-red-500">{errors.meetingTime}</p>}
        
        <label>Project Amount <AiOutlineDollarCircle className="inline-block ml-2" /></label>
        <input
          type="number"
          placeholder="Enter the project amount"
          value={formData.amount}
          onChange={handleChange('amount')}
          className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
        />
        {errors.amount && <p className="text-red-500">{errors.amount}</p>}
        
        <label>Terms and Conditions</label>
        <textarea
          placeholder="Enter any terms and conditions"
          value={formData.terms}
          onChange={handleChange('terms')}
          className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
        />
        {errors.terms && <p className="text-red-500">{errors.terms}</p>}
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition-all"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className="bg-[#ae01ff] text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const ReviewInfo = ({ formData, prevStep, nextStep }) => {


    const handleSubmit = async() => {
        

        if(!localStorage.getItem("userId")){
          alert("Please login to host a project");
          return;
        }

        await axios.post(`http://localhost:8000/hostProject/${localStorage.getItem("userId")}`,{
            NameProject: formData.projectName,
            ProjectInfo: formData.description,
            Domain: formData.domains,
            Deadline: formData.duration,
            SkillsReq: formData.skills,
            Amount: formData.amount,


        } )
        .then((res) => {
            console.log(formData);
            console.log(res.data);
            toast.success("Project Hosted Successfully");
            setTimeout(() => {
                nextStep();
            }, 2000);
        }
        )
        .catch((err) => {
            console.log(err);
        }
        );
    
        
      }
      return (
        <div className="space-y-4">
            <Toaster />
          <h2 className="text-2xl font-bold text-gray-700 border-b pb-3 mb-4">Review Information</h2>
    
          <div className="space-y-2">
            {formData.projectName && <p><strong>Project Name:</strong> {formData.projectName}</p>}
            {formData.duration && <p><strong>Duration:</strong> {formData.duration}</p>}
            {formData.location && <p><strong>Location:</strong> {formData.location}</p>}
            {formData.description && <p><strong>Description:</strong> {formData.description}</p>}
            {formData.requirements && <p><strong>Requirements:</strong> {formData.requirements}</p>}
            {formData.domains && <p><strong>Domains:</strong> {formData.domains}</p>}
            {formData.documents && (
              <p>
                <strong>Documents:</strong> {formData.documents.name || 'Document uploaded'}
              </p>
            )}
            {formData.meetingDays && <p><strong>Meeting Days:</strong> {formData.meetingDays}</p>}
            {formData.meetingTime && <p><strong>Meeting Time:</strong> {formData.meetingTime}</p>}
            {formData.amount && <p><strong>Amount:</strong> ${formData.amount}</p>}
            {formData.terms && <p><strong>Terms:</strong> {formData.terms}</p>}
            {formData.skills && <p><strong>Skills:</strong> {formData.skills}</p>}
          </div>
    
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition-all"
            >
              Previous
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#ae01ff] text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-all"
            >
              Submit
            </button>
          </div>
        </div>
      );
};

const CompletionPage = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-700">Project Hosted Successfully!</h2>
      <p>Your project details have been submitted.</p>
    </div>
  );
};

export default HostProject;
