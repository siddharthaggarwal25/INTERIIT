import React, { useState } from 'react';

const AddBid = () => {
  const [step, setStep] = useState(1);
  const [bidType, setBidType] = useState(''); // Tracks whether individual, team, or company
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    collegeName: '',
    clubName: '',
    teamName: '',
    headID: '', // Head ID for the team
    teamDetails: [{ name: '', email: '' }],
    companyName: '',
    companyEmail: '',
    companyMembers: [{ name: '', email: '' }],
    companyHeadID: '', // Head ID for the company
  });

  const [errors, setErrors] = useState({});

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleTeamMemberChange = (index, field) => (e) => {
    const newTeamDetails = [...formData.teamDetails];
    newTeamDetails[index][field] = e.target.value;
    setFormData({ ...formData, teamDetails: newTeamDetails });
  };

  const handleCompanyMemberChange = (index, field) => (e) => {
    const newCompanyMembers = [...formData.companyMembers];
    newCompanyMembers[index][field] = e.target.value;
    setFormData({ ...formData, companyMembers: newCompanyMembers });
  };

  const addTeamMember = () => {
    if (formData.teamDetails.length < 8) {
      setFormData({
        ...formData,
        teamDetails: [...formData.teamDetails, { name: '', email: '' }],
      });
    }
  };

  const addCompanyMember = () => {
    if (formData.companyMembers.length < 8) {
      setFormData({
        ...formData,
        companyMembers: [...formData.companyMembers, { name: '', email: '' }],
      });
    }
  };

  const nextStep = () => {
    if (step === 1) {
      if (!bidType) {
        setErrors({ bidType: 'Please select a bid type.' });
        return;
      }
      setErrors({});
      setStep(step + 1);
    } else if (step === 2) {
      if (bidType === 'individual') {
        if (!formData.name || !formData.email) {
          setErrors({ name: 'Name is required.', email: 'Email is required.' });
          return;
        }
      } else if (bidType === 'team') {
        if (!formData.collegeName || !formData.clubName || !formData.teamName || !formData.headID) {
          setErrors({
            collegeName: 'College name is required.',
            clubName: 'Club name is required.',
            teamName: 'Team name is required.',
            headID: 'Head ID is required.',
          });
          return;
        }
        const invalidMember = formData.teamDetails.find((member) => !member.name || !member.email);
        if (invalidMember) {
          setErrors({ teamDetails: 'All team member fields are required.' });
          return;
        }
      } else if (bidType === 'company') {
        if (!formData.companyName || !formData.companyEmail || !formData.companyHeadID) {
          setErrors({
            companyName: 'Company name is required.',
            companyEmail: 'Company email is required.',
            companyHeadID: 'Company head ID is required.',
          });
          return;
        }
        const invalidMember = formData.companyMembers.find((member) => !member.name || !member.email);
        if (invalidMember) {
          setErrors({ companyMembers: 'All company member fields are required.' });
          return;
        }
      }
      setErrors({});
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-32 pb-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl border border-gray-300">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-700 border-b pb-3">Select Bid Type</h2>
            <div className="flex flex-col space-y-4">
              <label>
                <input
                  type="radio"
                  value="individual"
                  checked={bidType === 'individual'}
                  onChange={() => { setBidType('individual'); setErrors({}); }}
                  className="mr-2"
                />
                As an Individual
              </label>
              <label>
                <input
                  type="radio"
                  value="team"
                  checked={bidType === 'team'}
                  onChange={() => { setBidType('team'); setErrors({}); }}
                  className="mr-2"
                />
                As a College Team
              </label>
              <label>
                <input
                  type="radio"
                  value="company"
                  checked={bidType === 'company'}
                  onChange={() => { setBidType('company'); setErrors({}); }}
                  className="mr-2"
                />
                As a Company
              </label>
              {errors.bidType && <p className="text-red-500">{errors.bidType}</p>}
            </div>
            <button
              onClick={nextStep}
              className="bg-[#ae01ff] text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-all mt-4"
            >
              Next
            </button>
          </div>
        )}
        {step === 2 && bidType === 'individual' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-700 border-b pb-3">Individual Details</h2>
            <div className="flex flex-col space-y-4">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange('name')}
                className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange('email')}
                className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
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
        )}
        {step === 2 && bidType === 'team' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-700 border-b pb-3">Team Details</h2>
            <div className="flex flex-col space-y-4">
              <label>College Name</label>
              <input
                type="text"
                placeholder="Enter your college name"
                value={formData.collegeName}
                onChange={handleChange('collegeName')}
                className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
              />
              {errors.collegeName && <p className="text-red-500">{errors.collegeName}</p>}
              <label>Club Name</label>
              <input
                type="text"
                placeholder="Enter your club name"
                value={formData.clubName}
                onChange={handleChange('clubName')}
                className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
              />
              {errors.clubName && <p className="text-red-500">{errors.clubName}</p>}
              <label>Team Name</label>
              <input
                type="text"
                placeholder="Enter your team name"
                value={formData.teamName}
                onChange={handleChange('teamName')}
                className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
              />
              {errors.teamName && <p className="text-red-500">{errors.teamName}</p>}
              <label>Head ID</label>
              <input
                type="text"
                placeholder="Enter Head ID"
                value={formData.headID}
                onChange={handleChange('headID')}
                className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
              />
              {errors.headID && <p className="text-red-500">{errors.headID}</p>}
              <label>Team Members (Max 8 Members)</label>
              {formData.teamDetails.map((member, index) => (
                <div key={index} className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Member Name"
                    value={member.name}
                    onChange={handleTeamMemberChange(index, 'name')}
                    className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Member Email"
                    value={member.email}
                    onChange={handleTeamMemberChange(index, 'email')}
                    className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
                  />
                </div>
              ))}
              <button
                onClick={addTeamMember}
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 mt-2"
              >
                Add Team Member
              </button>
              {errors.teamDetails && <p className="text-red-500">{errors.teamDetails}</p>}
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
        )}
        {step === 2 && bidType === 'company' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-700 border-b pb-3">Company Details</h2>
            <div className="flex flex-col space-y-4">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Enter your company name"
                value={formData.companyName}
                onChange={handleChange('companyName')}
                className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
              />
              {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}
              <label>Company Email ID</label>
              <input
                type="email"
                placeholder="Enter your company email"
                value={formData.companyEmail}
                onChange={handleChange('companyEmail')}
                className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
              />
              {errors.companyEmail && <p className="text-red-500">{errors.companyEmail}</p>}
              <label>Head ID</label>
              <input
                type="text"
                placeholder="Enter Head ID"
                value={formData.companyHeadID}
                onChange={handleChange('companyHeadID')}
                className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
              />
              {errors.companyHeadID && <p className="text-red-500">{errors.companyHeadID}</p>}
              <label>Company Members (Max 8 Members)</label>
              {formData.companyMembers.map((member, index) => (
                <div key={index} className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Member Name"
                    value={member.name}
                    onChange={handleCompanyMemberChange(index, 'name')}
                    className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Member Email"
                    value={member.email}
                    onChange={handleCompanyMemberChange(index, 'email')}
                    className="p-3 border rounded border-gray-300 focus:ring focus:ring-purple-500 outline-none"
                  />
                </div>
              ))}
              <button
                onClick={addCompanyMember}
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 mt-2"
              >
                Add Company Member
              </button>
              {errors.companyMembers && <p className="text-red-500">{errors.companyMembers}</p>}
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
        )}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-600">Bid Registered Successfully!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBid;
