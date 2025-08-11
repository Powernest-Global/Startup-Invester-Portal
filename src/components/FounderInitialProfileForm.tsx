import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

// --- SVG Icons (replacing lucide-react for portability) ---
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const FileUpIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
);


// --- Interfaces ---
interface Step {
  id: string;
  title: string;
  children?: Step[];
}

interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: string;
  linkedin: string;
}

// --- Stepper Component ---
const OnboardingStepper = ({ steps, currentStep }: { steps: Step[], currentStep: string }) => {
  const findActiveParentStep = (allSteps: Step[], currentId: string): Step | null => {
    for (const step of allSteps) {
      if (step.id === currentId) return step;
      if (step.children?.some(child => child.id === currentId)) {
        return step;
      }
    }
    if (currentId.includes('-sub')) {
        const parentId = currentId.split('-sub')[0].replace(/-details|-basic/g, '') + '-form';
        return allSteps.find(s => s.id === parentId) || null;
    }
    return allSteps.find(s => s.id === currentId) || null;
  };

  const activeParentStep = findActiveParentStep(steps, currentStep);
  const activeParentIndex = steps.findIndex(step => step.id === activeParentStep?.id);

  const isParentCompleted = (stepId: string) => {
    const index = steps.findIndex(step => step.id === stepId);
    return index < activeParentIndex;
  };

  const isActiveParent = (stepId: string) => stepId === activeParentStep?.id;

  return (
    <div className="flex flex-col w-full">
      {steps.map((step, index) => (
        <div key={step.id} className="flex">
          <div className="flex flex-col items-center mr-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isActiveParent(step.id) ? 'bg-white' : isParentCompleted(step.id) ? 'bg-[#3262FF]' : 'border border-[#303030]'}`}>
              {isActiveParent(step.id) && <div className="w-3 h-3 bg-[#3262FF] rounded-full"></div>}
              {isParentCompleted(step.id) && <CheckIcon className="text-white" />}
            </div>
            {index < steps.length - 1 && (
              <div className={`w-1 h-24 ${isParentCompleted(step.id) || isActiveParent(step.id) ? 'bg-gradient-to-b from-[#8282FF] to-[#00003F]' : 'bg-gradient-to-b from-[#4C4C4C] to-[#222222]'}`}></div>
            )}
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex items-center h-6 relative">
              <p className={`text-lg font-semibold ml-2 ${isActiveParent(step.id) || isParentCompleted(step.id) ? 'text-white' : 'text-[#A9ADB1]'}`}>
                {step.title}
              </p>
            </div>
            {isActiveParent(step.id) && step.children && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {step.children.map(child => {
                  const isChildActive = child.id === currentStep || currentStep.startsWith(child.id.split('-sub')[0]);
                  const lineColor = isChildActive ? 'bg-white' : 'bg-[#A9ADB1]';
                  return (
                    <div key={child.id} className="flex items-center relative">
                      <div className={`absolute left-[-24px] w-[20px] h-px ${lineColor}`}></div>
                      <p className={`text-base ml-2 ${isChildActive ? 'text-white font-semibold' : 'text-[#A9ADB1]'}`}>
                        {child.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
            {index < steps.length - 1 && <div className="pb-16"></div>}
          </div>
        </div>
      ))}
    </div>
  );
};

// --- StartupProfileForm Component ---
const StartupProfileForm: React.FC<{ onNext: (data: any) => void; onBack: () => void; initialData: any }> = ({ onNext, onBack, initialData }) => {
  const [formData, setFormData] = useState({
    startupName: initialData.startupName || '',
    wasIncorporated: initialData.wasIncorporated || '',
    incorporationDate: initialData.incorporationDate || '',
    startupAddress: initialData.startupAddress || '',
    description: initialData.description || '',
    country: initialData.country || '',
    otherCountry: initialData.otherCountry || '',
    city: initialData.city || '',
    state: initialData.state || '',
    pincode: initialData.pincode || '',
    industry: initialData.industry || '',
  });
  const [logoFiles, setLogoFiles] = useState<File[]>(initialData.logoFiles || []);
  const [errors, setErrors] = useState<any>({});

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setLogoFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {'image/*': ['.jpeg', '.png', '.jpg']} });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
     if (value) {
      setErrors((prev: any) => ({...prev, [name]: false}));
    }
  };

  const validateForm = () => {
      const newErrors: any = {};
      if (!formData.startupName) newErrors.startupName = true;
      if (!formData.wasIncorporated) newErrors.wasIncorporated = true;
      if (formData.wasIncorporated === 'yes' && !formData.incorporationDate) newErrors.incorporationDate = true;
      if (!formData.startupAddress) newErrors.startupAddress = true;
      if (!formData.city) newErrors.city = true;
      if (!formData.state) newErrors.state = true;
      if (!formData.country) newErrors.country = true;
      if (!formData.pincode) newErrors.pincode = true;
      if (logoFiles.length === 0) newErrors.logoFiles = true;
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  }

  const handleFormSubmit = () => {
    if (validateForm()) {
        onNext({ ...formData, logoFiles });
    } else {
        console.error('Please fill in all required fields.');
    }
  };

  const countries = [
    '', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Brazzaville)', 'Congo (Kinshasa)',
    'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador',
    'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
    'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
    'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea (North)', 'Korea (South)',
    'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
    'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway',
    'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
    'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
    'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
    'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
    'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
    'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
    'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe',
    'Other'
  ];

  return (
    <div className="p-8 bg-[#0F101A] rounded-xl shadow-lg w-full max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold mb-2 text-white text-left">Start-up Profile</h2>
      <h3 className="text-xl font-semibold mb-6 text-gray-300 text-left">Basic Details</h3>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="startupName" className="block text-gray-400 text-sm font-medium mb-2">What is your start-up’s name? <span className="text-red-500">*</span></label>
          <input type="text" id="startupName" name="startupName" value={formData.startupName} onChange={handleInputChange} className={`w-full p-3 rounded-md bg-[#1A1C28] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF] ${errors.startupName ? 'border-red-500 border' : 'border border-[#303030]'}`} placeholder="Write here" required/>
        </div>
        <div>
          <label className="block text-gray-400 text-sm font-medium mb-2">Was it incorporated? <span className="text-red-500">*</span></label>
          <div className={`flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 rounded-lg ${errors.wasIncorporated ? 'border border-red-500' : ''}`}>
            <div className="flex items-center p-3 bg-[#1A1C28] rounded-lg cursor-pointer hover:bg-[#222436] flex-1">
              <input type="radio" id="wasIncorporatedYes" name="wasIncorporated" value="yes" checked={formData.wasIncorporated === 'yes'} onChange={handleInputChange} className="mr-3 h-5 w-5 text-[#3262FF] border-gray-600 focus:ring-[#3262FF] rounded-full bg-transparent"/>
              <label htmlFor="wasIncorporatedYes" className={`text-lg select-none cursor-pointer ${formData.wasIncorporated === 'yes' ? 'text-white font-semibold' : 'text-gray-400'}`}>Yes</label>
            </div>
            <div className="flex items-center p-3 bg-[#1A1C28] rounded-lg cursor-pointer hover:bg-[#222436] flex-1">
              <input type="radio" id="wasIncorporatedNo" name="wasIncorporated" value="no" checked={formData.wasIncorporated === 'no'} onChange={handleInputChange} className="mr-3 h-5 w-5 text-[#3262FF] border-gray-600 focus:ring-[#3262FF] rounded-full bg-transparent"/>
              <label htmlFor="wasIncorporatedNo" className={`text-lg select-none cursor-pointer ${formData.wasIncorporated === 'no' ? 'text-white font-semibold' : 'text-gray-400'}`}>No</label>
            </div>
          </div>
        </div>
        {formData.wasIncorporated === 'yes' && (
          <div>
            <label htmlFor="incorporationDate" className="block text-gray-400 text-sm font-medium mb-2">If yes, start-up Incorporation date <span className="text-red-500">*</span></label>
            <input type="date" id="incorporationDate" name="incorporationDate" value={formData.incorporationDate} onChange={handleInputChange} className={`w-full p-3 rounded-md bg-[#1A1C28] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF] ${errors.incorporationDate ? 'border-red-500 border' : 'border border-[#303030]'}`} required />
          </div>
        )}
        <div>
            <label htmlFor="startupAddress" className="block text-gray-400 text-sm font-medium mb-2">Your start-up Incorporation address <span className="text-red-500">*</span></label>
            <input type="text" id="startupAddress" name="startupAddress" value={formData.startupAddress} onChange={handleInputChange} className={`w-full p-3 rounded-md bg-[#1A1C28] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF] ${errors.startupAddress ? 'border-red-500 border' : 'border border-[#303030]'}`} placeholder="Enter Your Register address" required />
        </div>
        <div className="flex flex-col sm:flex-row gap-8 w-full">
          <div className="flex-1">
            <label htmlFor="city" className="block text-[#E6E6E6] font-semibold text-sm mb-2">City <span className="text-red-500">*</span></label>
            <input type="text" id="city" name="city" placeholder="Enter city name" value={formData.city} onChange={handleInputChange} className={`w-full h-[48px] px-4 bg-[#1a1a2e] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF] ${errors.city ? 'border-red-500 border' : 'border border-[#303030]'}`} required />
          </div>
          <div className="flex-1">
            <label htmlFor="state" className="block text-[#E6E6E6] font-semibold text-sm mb-2">State <span className="text-red-500">*</span></label>
            <input type="text" id="state" name="state" placeholder="Enter state name" value={formData.state} onChange={handleInputChange} className={`w-full h-[48px] px-4 bg-[#1a1a2e] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF] ${errors.state ? 'border-red-500 border' : 'border border-[#303030]'}`} required />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 w-full">
          <div className="flex-1">
            <label htmlFor="country" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Country <span className="text-red-500">*</span></label>
            <div className="relative">
              <select id="country" name="country" value={formData.country} onChange={handleInputChange} className={`w-full h-[48px] px-4 bg-[#1a1a2e] text-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF] ${errors.country ? 'border-red-500 border' : 'border border-[#303030]'}`} required>
                {countries.map(country => (<option key={country || 'select'} value={country} className="bg-[#05060F]">{country || 'Select your country'}</option>))}
              </select>
            </div>
            {formData.country === 'Other' && (
              <div className="mt-4">
                <label htmlFor="otherCountry" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Please specify country:</label>
                <input type="text" id="otherCountry" name="otherCountry" value={formData.otherCountry} onChange={handleInputChange} placeholder="Enter country name" className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]" required />
              </div>
            )}
          </div>
          <div className="flex-1">
            <label htmlFor="pincode" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Pincode <span className="text-red-500">*</span></label>
            <input type="text" id="pincode" name="pincode" placeholder="Enter code" value={formData.pincode} onChange={handleInputChange} className={`w-full h-[48px] px-4 bg-[#1a1a2e] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF] ${errors.pincode ? 'border-red-500 border' : 'border border-[#303030]'}`} required />
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-[#E6E6E6]">Product Identification (Logos) <span className="text-red-500">*</span></h2>
          <p className="text-sm text-[#A9ADB1] mb-4">Upload your logo (Recommended size: 200×200 px or larger)</p>
          <div {...getRootProps()} className={`border-2 border-dashed rounded-md px-6 py-6 text-center flex flex-col items-center gap-3 cursor-pointer transition ${isDragActive ? "bg-[#1e1e1e]" : "bg-transparent"} ${errors.logoFiles ? 'border-red-500' : 'border-[#303030]'}`}>
            <input {...getInputProps()} id="logoInput" />
            <FileUpIcon className="text-[#A9ADB1]" />
            <p className="text-[#A9ADB1] text-sm">Drag & Drop files here or <span className="underline cursor-pointer" onClick={(e) => { e.stopPropagation(); document.querySelector<HTMLInputElement>("#logoInput")?.click(); }}>Click to Upload</span></p>
            <p className="text-[#A9ADB1] text-xs">Accepted formats: JPG, PNG</p>
          </div>
          {logoFiles.length > 0 && (
            <ul className="mt-4 space-y-2 text-sm text-[#A9ADB1]">
              {logoFiles.map((file, index) => (
                <li key={index} className="flex justify-between items-center bg-[#1A1C28] p-2 rounded-md">{file.name}
                  <button onClick={() => setLogoFiles(files => files.filter((_, i) => i !== index))} className="text-red-400 text-xs hover:underline">Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button onClick={handleFormSubmit} className="px-6 py-3 bg-[#3262FF] text-white rounded-md hover:bg-[#2852D9] transition-colors duration-200 ease-in-out shadow-lg">
          Next: Upload Document
        </button>
      </div>
    </div>
  );
};

// --- UploadDocumentPage Component ---
const UploadDocumentPage: React.FC<{ onNext: (data: any) => void; onBack: () => void; initialData: any }> = ({ onNext, onBack, initialData }) => {
  const [pitchDeck, setPitchDeck] = useState<File[]>(initialData.pitchDeck || []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setPitchDeck(prev => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'application/pdf': ['.pdf'], 'application/vnd.ms-powerpoint': ['.ppt'], 'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'] } });

  return (
    <div className="p-8 bg-[#0F101A] rounded-xl shadow-lg w-full max-w-2xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Upload Document</h2>
      <p className="text-gray-300 mb-8 text-center">Please upload your pitch deck. <span className="text-red-500">*</span></p>
      <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-10 text-center mb-8 cursor-pointer transition ${isDragActive ? 'bg-[#1e1e1e]' : 'bg-transparent'} ${pitchDeck.length === 0 ? 'border-red-500' : 'border-[#303030]'}`}>
        <input {...getInputProps()} />
        <FileUpIcon className="text-[#A9ADB1] mx-auto mb-4" />
        <p className="text-gray-400 mb-4">Drag & drop your files here, or click to browse</p>
        <p className="text-xs text-gray-500">PDF, PPT, PPTX up to 5MB</p>
      </div>
      {pitchDeck.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-[#A9ADB1]">
          {pitchDeck.map((file, index) => (
            <li key={index} className="flex justify-between items-center p-2 bg-[#1A1C28] rounded-md">{file.name}
              <button onClick={() => setPitchDeck(files => files.filter((_, i) => i !== index))} className="text-red-400 text-xs hover:underline">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between mt-8">
        <button onClick={onBack} className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">Back</button>
        <button onClick={() => onNext({ pitchDeck })} disabled={pitchDeck.length === 0} className={`px-6 py-3 rounded-md transition-colors text-white ${pitchDeck.length > 0 ? 'bg-[#3262FF] hover:bg-[#2852D9]' : 'bg-gray-700 cursor-not-allowed'}`}>Next: Add Team Members</button>
      </div>
    </div>
  );
};

// --- AddTeamPage Component (Updated with Validation) ---
const AddTeamPage: React.FC<{ onNext: (data: any) => void; onBack: () => void; initialData: any }> = ({ onNext, onBack, initialData }) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(
    initialData.teamMembers && initialData.teamMembers.length > 0
      ? initialData.teamMembers
      : [{ id: 1, name: '', email: '', role: '', linkedin: '' }]
  );
  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeamMembers(prev =>
      prev.map(member =>
        member.id === id ? { ...member, [name]: value } : member
      )
    );
     if (value) {
      setErrors((prev: any) => ({
        ...prev,
        [id]: { ...prev[id], [name]: false },
      }));
    }
  };

  const handleAddMember = () => {
    setTeamMembers(prev => [
      ...prev,
      { id: Date.now(), name: '', email: '', role: '', linkedin: '' }
    ]);
  };
  
  const handleRemoveMember = (id: number) => {
    setTeamMembers(prev => prev.filter(member => member.id !== id));
    setErrors((prev: any) => {
        const newErrors = {...prev};
        delete newErrors[id];
        return newErrors;
    });
  };

  const validateTeamForm = () => {
    const newErrors: any = {};
    let isValid = true;
    teamMembers.forEach(member => {
        const memberErrors: any = {};
        if (!member.name.trim()) {
            memberErrors.name = true;
            isValid = false;
        }
        if (!member.email.trim()) {
            memberErrors.email = true;
            isValid = false;
        }
        if (!member.role.trim()) {
            memberErrors.role = true;
            isValid = false;
        }
        if (!member.linkedin.trim()) {
            memberErrors.linkedin = true;
            isValid = false;
        }
        if (Object.keys(memberErrors).length > 0) {
            newErrors[member.id] = memberErrors;
        }
    });
    setErrors(newErrors);
    return isValid;
  }

  const handleContinue = () => {
      if(validateTeamForm()){
          onNext({ teamMembers });
      } else {
          console.error("Please fill all the fields for all team members.");
      }
  }

  return (
    <div className="p-8 bg-[#0F101A] rounded-xl shadow-lg w-full max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-white text-left">Add Team Members</h2>
      
      <div className="space-y-10">
        {teamMembers.map((member, index) => (
          <div key={member.id} className="space-y-6 border-b border-[#303030] pb-8 last:border-b-0">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-100">Team member {index + 1}</h3>
                {teamMembers.length > 1 && (
                    <button onClick={() => handleRemoveMember(member.id)} className="text-red-400 hover:text-red-600 transition-colors text-sm">Remove</button>
                )}
            </div>
            
            <div>
              <label htmlFor={`name-${member.id}`} className="block text-gray-400 text-sm font-medium mb-2">Name <span className="text-red-500">*</span></label>
              <input type="text" id={`name-${member.id}`} name="name" value={member.name} onChange={(e) => handleInputChange(member.id, e)} className={`w-full p-3 rounded-md bg-[#1A1C28] border text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF] ${errors[member.id]?.name ? 'border-red-500' : 'border-[#303030]'}`} placeholder="Enter name" required />
            </div>
            
            <div>
              <label htmlFor={`email-${member.id}`} className="block text-gray-400 text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
              <input type="email" id={`email-${member.id}`} name="email" value={member.email} onChange={(e) => handleInputChange(member.id, e)} className={`w-full p-3 rounded-md bg-[#1A1C28] border text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF] ${errors[member.id]?.email ? 'border-red-500' : 'border-[#303030]'}`} placeholder="Enter email address" required />
            </div>

            <div>
              <label htmlFor={`role-${member.id}`} className="block text-gray-400 text-sm font-medium mb-2">Role <span className="text-red-500">*</span></label>
              <input type="text" id={`role-${member.id}`} name="role" value={member.role} onChange={(e) => handleInputChange(member.id, e)} className={`w-full p-3 rounded-md bg-[#1A1C28] border text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF] ${errors[member.id]?.role ? 'border-red-500' : 'border-[#303030]'}`} placeholder="e.g., Founder, Co-founder, CEO, CTO, CFO" required />
            </div>

            <div>
              <label htmlFor={`linkedin-${member.id}`} className="block text-gray-400 text-sm font-medium mb-2">Linkedin profile <span className="text-red-500">*</span></label>
              <input type="text" id={`linkedin-${member.id}`} name="linkedin" value={member.linkedin} onChange={(e) => handleInputChange(member.id, e)} className={`w-full p-3 rounded-md bg-[#1A1C28] border text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF] ${errors[member.id]?.linkedin ? 'border-red-500' : 'border-[#303030]'}`} placeholder="Enter Linkedin profile URL" required />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <button onClick={handleAddMember} className="px-5 py-2 bg-[#1A1C28] border border-[#303030] text-white rounded-md hover:bg-[#222436] transition-colors">
          + Add more member
        </button>
      </div>

      <div className="flex justify-between mt-12">
        <button onClick={onBack} className="px-6 py-3 bg-transparent text-white rounded-md hover:bg-gray-800 transition-colors">Back</button>
        <button onClick={handleContinue} className="px-8 py-3 bg-[#3262FF] text-white rounded-md hover:bg-[#2852D9] transition-colors">Continue</button>
      </div>
    </div>
  );
};


// --- Main App Component ---
export default function App({ onCompleteFounderFlow, onBackFounderFlow }: { onCompleteFounderFlow?: () => void; onBackFounderFlow?: () => void; }) {
  const onboardingSteps: Step[] = [
    { id: 'startup-profile-form', title: 'Start-up Profile', children: [{ id: 'basic-details-sub', title: 'Basic & Startup Details' }] },
    { id: 'upload-document', title: 'Upload Document' },
    { id: 'add-team-members', title: 'Add Team Members' },
  ];

  const allFlatStepsForNavigation = onboardingSteps.map(s => s.id);

  const [currentStepId, setCurrentStepId] = useState(allFlatStepsForNavigation[0]);
  const [allData, setAllData] = useState<any>({});

  const handleNextInternal = (data: any) => {
    const updatedData = { ...allData, [currentStepId]: data };
    setAllData(updatedData);

    const currentIndex = allFlatStepsForNavigation.findIndex(id => id === currentStepId);
    if (currentIndex < allFlatStepsForNavigation.length - 1) {
      setCurrentStepId(allFlatStepsForNavigation[currentIndex + 1]);
    } else {
      console.log("Onboarding Complete! Final Data:", updatedData);
      if (onCompleteFounderFlow) onCompleteFounderFlow();
    }
  };

  const handleBackInternal = () => {
    const currentIndex = allFlatStepsForNavigation.findIndex(id => id === currentStepId);
    if (currentIndex > 0) {
      setCurrentStepId(allFlatStepsForNavigation[currentIndex - 1]);
    } else {
      if (onBackFounderFlow) onBackFounderFlow();
    }
  };

  const renderMainContent = () => {
    switch (currentStepId) {
      case 'startup-profile-form':
        return <StartupProfileForm onNext={handleNextInternal} onBack={handleBackInternal} initialData={allData['startup-profile-form'] || {}} />;
      case 'upload-document':
        return <UploadDocumentPage onNext={handleNextInternal} onBack={handleBackInternal} initialData={allData['upload-document'] || {}} />;
      case 'add-team-members':
        return <AddTeamPage onNext={handleNextInternal} onBack={handleBackInternal} initialData={allData['add-team-members'] || {}} />;
      default:
        return <StartupProfileForm onNext={handleNextInternal} onBack={handleBackInternal} initialData={allData['startup-profile-form'] || {}} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#05060F] text-white flex font-sans">
      <div className="absolute top-0 left-0 w-[721px] h-[721px] transform -translate-x-1/2 -translate-y-1/4 pointer-events-none -z-10">
        <div className="w-full h-full bg-radial-gradient opacity-50 blur-[47px]"></div>
      </div>
      <aside className="fixed rounded-xl z-10 w-[352px] h-screen left-4 top-4 overflow-y-auto p-6" style={{ background: 'radial-gradient(195.32% 112.27% at 50% 80%, #000000 30.77%, #0C0C4A 44.28%, #0606A9 58.97%, #0000FF 75.08%, #9898FF 91.44%)', backgroundRepeat: 'no-repeat', backgroundPosition: 'top center', backgroundSize: '100% 100%' }}>
        <div className="mb-8 mt-16">
          <h2 className="font-semibold text-2xl text-[#E6E6E6]">Onboarding Steps</h2>
        </div>
        <div className="w-[250px] flex flex-row items-start p-0 gap-[12px]">
          <OnboardingStepper steps={onboardingSteps} currentStep={currentStepId} />
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto pl-[424px] py-8 flex justify-center items-start min-h-screen">
        {renderMainContent()}
      </main>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        .font-sans { font-family: 'Inter', sans-serif; }
        .bg-radial-gradient { background: radial-gradient(circle, #9898FF, #0000FF, #0606A9, #0C0C4A, #000000 70%); }
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Custom styles for date picker icon */
        input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(1);
            cursor: pointer;
        }
      `}</style>
    </div>
  );
}      






