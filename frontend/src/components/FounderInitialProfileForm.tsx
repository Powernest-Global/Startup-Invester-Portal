
import React, { useState } from 'react';
import { Check, FileUp } from 'lucide-react'; // Import Check icon for stepper
import { useDropzone } from 'react-dropzone';

// --- Interfaces ---
interface Step {
  id: string;
  title: string;
  children?: Step[]; // Added optional children for nested steps
}

// Helper to flatten steps for navigation
const flattenSteps = (steps: Step[]): Step[] => {
  let flat: Step[] = [];
  steps.forEach(step => {
    flat.push(step);
    if (step.children) {
      flat = flat.concat(flattenSteps(step.children));
    }
  });
  return flat;
};

// --- Stepper Component (Reused and slightly adapted for general use) ---
const OnboardingStepper = ({ steps, currentStep }: { steps: Step[], currentStep: string }) => {
  // Find the top-level step that contains the currentStep, or is the currentStep itself
  const findActiveParentStep = (allSteps: Step[], currentId: string): Step | null => {
    for (const step of allSteps) {
      if (step.id === currentId) {
        return step; // currentId is a top-level step
      }
      if (step.children) {
        const foundChild = step.children.find(child => child.id === currentId);
        if (foundChild) {
          return step; // Return the parent if a child is found
        }
      }
    }
    return null;
  };

  const activeParentStep = findActiveParentStep(steps, currentStep);
  const activeParentIndex = steps.findIndex(step => step.id === activeParentStep?.id);

  // Helper functions to determine step state
  const isParentCompleted = (stepId: string) => {
    const index = steps.findIndex(step => step.id === stepId);
    return index < activeParentIndex;
  };

  const isActiveParent = (stepId: string) => {
    return stepId === activeParentStep?.id;
  };

  const isCurrentStepAChildOfThisParent = (step: Step) => {
    return step.children && step.children.some(child => child.id === currentStep);
  };

  return (
    // Main container for the stepper, arranged as a vertical flex column
    <div className="flex flex-col w-full">
      {steps.map((step, index) => (
        <div key={step.id} className="flex"> {/* No mb-4 here, padding is handled below */}
          {/* Left Column: Stepper Circle and Connecting Line */}
          <div className="flex flex-col items-center mr-3">
            {/* Stepper Circle */}
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isActiveParent(step.id) ? 'bg-white' : isParentCompleted(step.id) ? 'bg-[#3262FF]' : 'border border-[#303030]'}`}>
              {isActiveParent(step.id) && <div className="w-3 h-3 bg-[#3262FF] rounded-full"></div>}
              {isParentCompleted(step.id) && <Check className="w-4 h-4 text-white" />}
            </div>
            {/* Connecting Line - now with a larger fixed height to span the increased gap */}
            {index < steps.length - 1 && (
              <div className={`w-1 h-24 ${isParentCompleted(step.id) || isActiveParent(step.id) ? 'bg-gradient-to-b from-[#8282FF] to-[#00003F]' : 'bg-gradient-to-b from-[#4C4C4C] to-[#222222]'}`}></div>
            )}
          </div>

          {/* Right Column: Step Titles and Nested Children */}
          <div className="flex flex-col flex-grow">
            {/* Main Title */}
            <div className="flex items-center h-6 relative">
              <p className={`text-lg font-semibold ml-2 ${isActiveParent(step.id) || isParentCompleted(step.id) ? 'text-white' : 'text-[#A9ADB1]'}`}>
                {step.title}
              </p>
            </div>
            {/* Render children if this is the active parent step or a child of this parent is the current step */}
            {(isActiveParent(step.id) || isCurrentStepAChildOfThisParent(step)) && step.children && (
              <div className="mt-2 ml-4 flex flex-col gap-2"> {/* `ml-4` indents the children */}
                {step.children.map(child => {
                  const isChildActive = child.id === currentStep;
                  const lineColor = isChildActive ? 'bg-white' : 'bg-[#A9ADB1]';
                  return (
                    // `relative` for absolute positioning of the child's connecting line
                    <div key={child.id} className="flex items-center relative">
                      {/* Horizontal line for child item */}
                      {/* `absolute left-[-24px]` positions the line to visually connect to the main stepper line. */}
                      <div className={`absolute left-[-24px] w-[20px] h-px ${lineColor}`}></div>
                      <p className={`text-base ml-2 ${isChildActive ? 'text-white font-semibold' : 'text-[#A9ADB1]'}`}>
                        {child.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
            {/* Add more bottom padding to create the desired gap for the next step's line to connect */}
            {index < steps.length - 1 && (
              <div className="pb-16"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
// Step1: Start-up Profile
// --- StartupProfileForm Component (Combines Basic and Startup Details) ---

interface StartupProfileFormProps {
  onNext: (data: any) => void;
  onBack: () => void;
  initialData: any; // To pre-fill form if navigating back
}

const StartupProfileForm: React.FC<StartupProfileFormProps> = ({ onNext   }) => {
  const [formData, setFormData] = useState({
     wasIncorporated: '',
    incorporationDate: '',
    startupAddress: '',
    startupName:  '',
     
     description:   '',
     country: '',
    otherCountry: '', // For when 'Other' is selected in country dropdown
    city: '', // New: City field
    state: '', // New: State field
     pincode: '', //pincode field
  });
  // State for file uploads
  // const [proofFiles, setProofFiles] = useState<File[]>([]);
  // const [message, setMessage] = useState<string | null>(null);

   const countries = [
    '', // Default empty option
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
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
    'Other' // Added 'Other' option
  ];

  const [currentSubSection, setCurrentSubSection] = useState('basic-details-sub'); // Internal state for sub-sections
// Callback for handling file drops
  // const onDrop = useCallback((acceptedFiles: File[]) => {
  //   // Basic validation for file size
  //   const validFiles = acceptedFiles.filter(file => {
  //     if (file.size > 2 * 1024 * 1024) { // 2MB limit
  //       setMessage(`${file.name} is too large. Max size is 2MB.`);
  //       return false;
  //     }
  //     return true;
  //   });
  //   setProofFiles(validFiles);
  // }, []);
  
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextSubSection = () => {
    if (currentSubSection === 'basic-details-sub') {
      // Basic validation for basic details
      if (!formData.founderName || !formData.founderEmail) {
        alert('Please fill in all basic details.'); // Using alert for simplicity, replace with custom modal
        return;
      }
    

 }
  else if (currentSubSection === 'startup-details-sub') {                                                                                                                                                                                                                                                                                                
      // Basic validation for startup details
      if (!formData.startupName || !formData.industry) {
        alert('Please fill in all startup details.'); // Using alert for simplicity, replace with custom modal
        return;
      }
      // If both sub-sections are complete, call the parent's onNext
      onNext(formData);
    }
  
  };

  const handleBackSubSection = () => {
    if (currentSubSection === 'startup-details-sub') {
      setCurrentSubSection('basic-details-sub');
    } else {
      // If on the first sub-section, call the parent's onBack
    onBack();
    }
 
  };

  return (
    <div className="p-8 bg-[#0F101A] rounded-xl shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white text-left">Start-up Profile</h2>
        <h3 className="text-xl font-bold mb-6 text-white text-left">Basic Details</h3>

      {currentSubSection === 'basic-details-sub' && (
        <div className="animate-fade-in">
       
          <div className="mb-6">
            <label htmlFor="startupName" className="block text-gray-400 text-sm font-medium mb-2">What is your start-up’s name? 
            <span className="text-red-500">*</span></label>
            <input
            type="text"
            id="startupName"
            name="startupName"
            value={formData.startupName}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md bg-[#1A1C28] border border-[#303030] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
              placeholder="Write here"
            />
          </div>
        
            
          <label htmlFor="wasIncorporated" className="block text-gray-400 text-sm font-medium mb-2">
            Was it incorporated? <span className="text-red-500">*</span>
          </label>
          {/* NEW SECTION: Radio Buttons for Yes/No */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            {/* Yes Radio Button */}
            <div className="flex items-center p-3 bg-[#1A1C28] rounded-lg cursor-pointer hover:bg-[#222436] transition-colors duration-200 ease-in-out flex-1">
              <input
                type="radio"
                id="wasIncorporatedYes"
                name="wasIncorporated" // IMPORTANT: Same name for the group
                value="yes"
                checked={formData.wasIncorporated === 'yes'} // Controls checked state
                onChange={handleInputChange}
                className="mr-3 h-5 w-5 text-[#3262FF] border-gray-600 focus:ring-[#3262FF] rounded-full bg-transparent"
              />
              <label
                htmlFor="wasIncorporatedYes"
                className={`text-lg select-none cursor-pointer ${formData.wasIncorporated === 'yes' ? 'text-white font-semibold' : 'text-gray-400'}`}
              >
                Yes
              </label>
            </div>

            {/* No Radio Button */}
            <div className="flex items-center p-3 bg-[#1A1C28] rounded-lg cursor-pointer hover:bg-[#222436] transition-colors duration-200 ease-in-out flex-1">
              <input
                type="radio"
                id="wasIncorporatedNo"
                name="wasIncorporated" // IMPORTANT: Same name for the group
                value="no"
                checked={formData.wasIncorporated === 'no'} // Controls checked state
                onChange={handleInputChange}
                className="mr-3 h-5 w-5 text-[#3262FF] border-gray-600 focus:ring-[#3262FF] rounded-full bg-transparent"
              />
              <label
                htmlFor="wasIncorporatedNo"
                className={`text-lg select-none cursor-pointer ${formData.wasIncorporated === 'no' ? 'text-white font-semibold' : 'text-gray-400'}`}
              >
                No
              </label>
            </div>
            </div>
            
                <div className="mb-6">
             <label htmlFor="ifyesstartup" className="block text-gray-400 text-sm font-medium mb-2">
          If yes, start-up Incorporation date    <span className="text-red-500">*</span>
          </label>
          <input
              type="text"
              value={formData.founderName}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md bg-[#1A1C28] border border-[#303030] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
              placeholder=" Select Date"
            />
            </div>

        <div className="mb-6">
             <label htmlFor="yourstartupincorporationaddress" className="block text-gray-400 text-sm font-medium mb-2">
          Your start-up Incorporation address   <span className="text-red-500">*</span>
          </label>
          <input
              type="text"
              value={formData.founderName}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md bg-[#1A1C28] border border-[#303030] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
              placeholder=" Enter Your Register address"
            />
            </div>
            {/* City and State */}
          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="flex-1">
              <label htmlFor="city" className="block text-[#E6E6E6] font-semibold text-sm mb-2">City <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city name"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="state" className="block text-[#E6E6E6] font-semibold text-sm mb-2">State <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter state name"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                required
              />
            </div>
          </div>
{/* country  and pincode  */}
  
          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="flex-1">
              <label htmlFor="country" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Country <span className="text-red-500">*</span></label>
            
             <div className="relative">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]" // Adjusted padding
                required
              >
                {countries.map(country => (
                  <option key={country || 'select'} value={country} className="bg-[#05060F]">
                    {country || 'Select your country'}
                  </option>
                ))}
              </select>
            </div>
            {formData.country === 'Other' && (
              <div className="mt-4">
                <label htmlFor="otherCountry" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Please specify country:</label>
                <input
                  type="text"
                  id="otherCountry"
                  name="otherCountry"
                  value={formData.otherCountry}
                  onChange={handleInputChange}
                  placeholder="Enter country name"
                  className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                  required
                />
              </div>
              
            )}
            </div>
            
            <div className="flex-1">
              <label htmlFor="pincode" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Pincode <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                placeholder="Enter code"
                value={formData.pincodeincode}
                onChange={handleInputChange}
                className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                required
              />
            </div>
             <div>
          <h2 className="text-sm font-semibold text-[#E6E6E6]">
            Product Identification (Logos)   <span className="text-red-500">*</span>
          </h2>
          <p className="text-sm text-[#A9ADB1] mb-4">
          Upload your logo (Recommended size: 200×200 px or larger)
          </p>

          <div
            {...getProofRootProps()}
            className={`border-2 border-dashed border-[#303030] rounded-md px-6 py-6 text-center flex flex-col items-center gap-3 cursor-pointer transition ${
              isProofActive ? "bg-[#1e1e1e]" : "bg-transparent"
            }`}
          >
            <input {...getProofInputProps()} id="proofInput" />
            <FileUp size={24} className="text-[#A9ADB1]" />
            <p className="text-[#A9ADB1] text-sm">
              Drag & Drop files here or {" "}
              
              <span
                  className="underline cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    document.querySelector<HTMLInputElement>("#proofInput")?.click();
                  }}
              >
                  Click to Upload
              </span>
              </p>
              <p className="text-[#A9ADB1] text-sm">
              Accepted formats: PDF, PPT, PPTX • Max 2MB
            </p>
          </div>
          {proofFiles.length > 0 && (
            <ul className="mt-4 space-y-2 text-sm text-[#A9ADB1]">
              {proofFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center"
                >
                  {file.name}
                  <button
                    onClick={() => {
                      const updated = proofFiles.filter((_, i) => i !== index);
                      setProofFiles(updated);
                      onUpload(updated);
                    }}
                    className="text-red-400 text-xs hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          </div> 

         </div> 
      

      {currentSubSection === 'startup-details-sub' && (
        <div className="animate-fade-in">
          <p className="text-gray-300 mb-8 text-center">Now, tell us about your amazing startup!</p>
          <div className="mb-6">
            <label htmlFor="startupName" className="block text-gray-400 text-sm font-medium mb-2">Startup Name</label>
            <input
              type="text"
              id="startupName"
              name="startupName"
              value={formData.startupName}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md bg-[#1A1C28] border border-[#303030] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
              placeholder="e.g., Quantum Leap Innovations"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="industry" className="block text-gray-400 text-sm font-medium mb-2">Industry</label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md bg-[#1A1C28] border border-[#303030] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
              placeholder="e.g., Artificial Intelligence, FinTech"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="description" className="block text-gray-400 text-sm font-medium mb-2">Brief Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-3 rounded-md bg-[#1A1C28] border border-[#303030] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
              placeholder="Describe what your startup does in a few sentences..."
            ></textarea>
          </div>
        </div>
      )}

      <div className="flex  justify-end mt-8">
        {/* <button
          onClick={handleBackSubSection}
          className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 ease-in-out shadow-lg"
        >
          Back
        </button> */}
        <button
          onClick={handleNextSubSection}
          className="px-6 py-3 bg-[#3262FF] r text-white rounded-md hover:bg-[#2852D9] transition-colors duration-200 ease-in-out shadow-lg"
        >
          {currentSubSection === 'basic-details-sub' ? 'continue' : 'Next: Upload Document'}
        </button>
      </div>
    </div>
  );



{/* --- UploadDocumentPage Component --- */}
const UploadDocumentPage: React.FC<{ onNext: (data: any) => void; onBack: () => void; initialData: any }> = ({ onNext, onBack, initialData }) => {
  const [documentStatus, setDocumentStatus] = useState(initialData.documentUploaded || false);

  const handleUpload = () => {
    // Simulate upload
    alert('Document uploaded successfully!'); // Using alert for simplicity, replace with custom modal
    setDocumentStatus(true);
  };

  return (
    <div className="p-8 bg-[#0F101A] rounded-xl shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Upload Document</h2>
      <p className="text-gray-300 mb-8 text-center">Please upload your required documents here. (e.g., Pitch Deck, Business Plan)</p>

      <div className="border-2 border-dashed border-[#303030] rounded-lg p-10 text-center mb-8">
        <p className="text-gray-400 mb-4">{documentStatus ? 'Document uploaded!' : 'Drag & drop your files here, or'}</p>
        <input type="file" id="file-upload" className="hidden" onChange={handleUpload} />
        <label htmlFor="file-upload" className="cursor-pointer px-4 py-2 bg-[#3262FF] text-white rounded-md hover:bg-[#2852D9] transition-colors duration-200 ease-in-out">
          Browse Files
        </label>
        {documentStatus && <p className="text-green-400 mt-2">File ready for submission.</p>}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 ease-in-out shadow-lg"
        >
          Back
        </button>
        <button
          onClick={() => onNext({ documentUploaded: documentStatus })}
          disabled={!documentStatus} // Disable next until document is 'uploaded'
          className={`px-6 py-3 rounded-md transition-colors duration-200 ease-in-out shadow-lg ${documentStatus ? 'bg-[#3262FF] hover:bg-[#2852D9]' : 'bg-gray-700 cursor-not-allowed'}`}
        >
          Next: Add Your Team
        </button>
      </div>
    </div>
  );
};

// --- AddTeamPage Component ---
const AddTeamPage: React.FC<{ onNext: (data: any) => void; onBack: () => void; initialData: any }> = ({ onNext, onBack, initialData }) => {
  const [teamMembers, setTeamMembers] = useState<string[]>(initialData.teamMembers || []);
  const [newMemberEmail, setNewMemberEmail] = useState('');

  const handleAddMember = () => {
    if (newMemberEmail && !teamMembers.includes(newMemberEmail)) {
      setTeamMembers(prev => [...prev, newMemberEmail]);
      setNewMemberEmail('');
    }
  };

  const handleRemoveMember = (emailToRemove: string) => {
    setTeamMembers(prev => prev.filter(email => email !== emailToRemove));
  };

  return (
    <div className="p-8 bg-[#0F101A] rounded-xl shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Add Your Team</h2>
      <p className="text-gray-300 mb-8 text-center">Invite your co-founders and key team members.</p>

      <div className="mb-6">
        <label htmlFor="newMemberEmail" className="block text-gray-400 text-sm font-medium mb-2">Invite by Email</label>
        <div className="flex gap-2">
          <input
            type="email"
            id="newMemberEmail"
            value={newMemberEmail}
            onChange={(e) => setNewMemberEmail(e.target.value)}
            className="flex-grow p-3 rounded-md bg-[#1A1C28] border border-[#303030] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
            placeholder="e.g., member@example.com"
          />
          <button
            onClick={handleAddMember}
            className="px-4 py-2 bg-[#3262FF] text-white rounded-md hover:bg-[#2852D9] transition-colors duration-200 ease-in-out"
          >
            Add
          </button>
        </div>
      </div>

      {teamMembers.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Added Team Members:</h3>
          <ul className="space-y-2">
            {teamMembers.map((member, index) => (
              <li key={index} className="flex justify-between items-center p-3 bg-[#1A1C28] rounded-md border border-[#303030]">
                <span className="text-white">{member}</span>
                <button
                  onClick={() => handleRemoveMember(member)}
                  className="text-red-400 hover:text-red-600 transition-colors"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 ease-in-out shadow-lg"
        >
          Back
        </button>
        <button
          onClick={() => onNext({ teamMembers: teamMembers })}
          className="px-6 py-3 bg-[#3262FF] text-white rounded-md hover:bg-[#2852D9] transition-colors duration-200 ease-in-out shadow-lg"
        >
          Complete Onboarding
        </button>
      </div>
    </div>
  );
};

// --- Main App Component ---
interface AppProps {
  onCompleteFounderFlow?: () => void; // Prop to signal completion to App.tsx
  onBackFounderFlow?: () => void; // Prop to go back to UserConfirmation from App.tsx
}

const App: React.FC<AppProps> = ({ onCompleteFounderFlow, onBackFounderFlow }) => {
  // Define the steps for the founder onboarding process
  // The 'id' for the parent step 'Start-up Profile' is now the one rendered.
  // Its children are for display in the stepper only.
  const onboardingSteps: Step[] = [
    {
      id: 'startup-profile-form', // This ID will be used for rendering the combined form
      title: 'Start-up Profile',
      children: [
        { id: 'basic-details-sub', title: 'Basic Details' }, // Sub-step for stepper display
        { id: 'startup-details-sub', title: 'Start-up details' }, // Sub-step for stepper display
      ],
    },
    { id: 'upload-document', title: 'Upload Document' },
    { id: 'add-your-team', title: 'Add your team' },
  ];

  // Flatten all steps for easier navigation logic.
  // We'll use the child IDs for `currentStep` to correctly highlight in the stepper.
  const allFlatStepsForNavigation = [
    'basic-details-sub', // First sub-step of Startup Profile
    'startup-details-sub', // Second sub-step of Startup Profile
    'upload-document',
    'add-your-team',
  ];

  // State to track the current step and store any collected data
  const [currentStep, setCurrentStep] = useState(allFlatStepsForNavigation[0]); // Initialize with the first flattened sub-step
  const [allData, setAllData] = useState<any>({}); // To store data from each step

  // Function to handle moving to the next step
  const handleNextInternal = (data: any) => {
    // Store data for the current step
    setAllData(prevData => ({ ...prevData, [currentStep]: data }));

    const currentFlatIndex = allFlatStepsForNavigation.findIndex(step => step === currentStep);
    if (currentFlatIndex < allFlatStepsForNavigation.length - 1) {
      // Move to the next step in the flattened list
    }
      setCurrentStep(allFlatStepsForNavigation[currentFlatIndex + 1]);
   else {
      // If on the last step, signal completion to the parent component
      console.log("App: All founder steps complete. Calling onCompleteFounderFlow.");
      if (typeof onCompleteFounderFlow === 'function') {
        onCompleteFounderFlow();
      } else {
        console.error("Error: onCompleteFounderFlow is not a function or is undefined. Please check parent component props.");
      }
    }
  };

  // Function to handle moving to the previous step
  const handleBackInternal = () => {
    const currentFlatIndex = allFlatStepsForNavigation.findIndex(step => step === currentStep);
    if (currentFlatIndex > 0) {
      // Move to the previous step in the flattened list
      setCurrentStep(allFlatStepsForNavigation[currentFlatIndex - 1]);
    } else {
      // If on the first step, signal to go back to the previous flow (e.g., UserConfirmation)
      console.log("App: Going back from first step. Calling onBackFounderFlow.");
      if (typeof onBackFounderFlow === 'function') {
        onBackFounderFlow();
      } else {
        console.error("Error: onBackFounderFlow is not a function or is undefined. Please check parent component props.");
      }
    }
  };

  // Determine which main component to render based on the currentStep
  // const renderMainContent = () => {
  //   if (currentStep === 'basic-details-sub' || currentStep === 'startup-details-sub') {
  //     return (
  //       <StartupProfileForm
  //         onNext={handleNextInternal}
  //         onBack={handleBackInternal}
  //         initialData={allData['basic-details-sub'] || allData['startup-details-sub'] || {}} // Pass combined data
  //       />
  //     );
  //   } else if (currentStep === 'upload-document') {
  //     return (
  //       <UploadDocumentPage
  //         onNext={handleNextInternal}
  //         onBack={handleBackInternal}
  //         initialData={allData['upload-document'] || {}}
  //       />
  //     );
  //   } else if (currentStep === 'add-your-team') {
  //     return (
  //       <AddTeamPage
  //         onNext={handleNextInternal}
  //         onBack={handleBackInternal}
  //         initialData={allData['add-your-team'] || {}}
  //       />
  //     );
    
  //   return null;
  const renderMainContent = () => {
  if (currentStep === 'basic-details-sub' || currentStep === 'startup-details-sub') {
    return (
      <StartupProfileForm
        onNext={handleNextInternal}
        onBack={handleBackInternal}
        initialData={allData['basic-details-sub'] || allData['startup-details-sub'] || {}}
      />
    );
  } else if (currentStep === 'upload-document') {
    return (
      <UploadDocumentPage
        onNext={handleNextInternal}
        onBack={handleBackInternal}
        initialData={allData['upload-document'] || {}}
      />
    );
  } else if (currentStep === 'add-your-team') {
    return (
      <AddTeamPage
        onNext={handleNextInternal}
        onBack={handleBackInternal}
        initialData={allData['add-your-team'] || {}}
      />
    );
  }

  return null; // default fallback
};

  


  return (
    <div className="min-h-screen bg-[#05060F] text-white flex font-sans">
      {/* Background Gradient Ellipse (Main Page Background) */}
      <div className="absolute top-0 left-0 w-[721px] h-[721px] transform -translate-x-1/2 -translate-y-1/4 pointer-events-none">
        <div className="w-full h-full bg-radial-gradient opacity-50 blur-[47px]"></div>
      </div>

      {/* Sidebar - Fixed positioning with full gradient background */}
      <aside
        className="fixed rounded-xl z-10 w-[352px] h-screen left-4 top-4 overflow-y-auto p-6"
        style={{
          background: 'radial-gradient(195.32% 112.27% at 50% 80%, #000000 30.77%, #0C0C4A 44.28%, #0606A9 58.97%, #0000FF 75.08%, #9898FF 91.44%)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: '100% 100%',
        }}
      >
        {/* Onboarding Steps Title */}
        <div className="mb-8 mt-16">
          <h2
            className="font-neulis-sans font-semibold text-2xl leading-8 tracking-tightest text-[#E6E6E6]"
            style={{
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '32px',
              letterSpacing: '-0.0025em',
              color: '#E6E6E6',
            }}
          >
            Onboarding Steps
          </h2>
        </div>

        {/* Stepper Container (Frame 39440) */}
        <div className="w-[250px] flex flex-row items-start p-0 gap-[12px]">
          <OnboardingStepper steps={onboardingSteps} currentStep={currentStep} />
        </div>
      </aside>

      {/* Main Content Area - This is where your dynamic step content will be rendered */}
      <main className="flex-1 overflow-y-auto pl-[424px] py-8 flex justify-center items-start min-h-screen">
        {renderMainContent()}
      </main>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Neulis+Sans:wght@600&display=swap');
        .font-sans {
            font-family: 'Inter', sans-serif;
        }
        .font-neulis-sans {
            font-family: 'Neulis Sans', sans-serif;
        }
        .bg-radial-gradient {
          background: radial-gradient(circle, #9898FF, #0000FF, #0606A9, #0C0C4A, #000000 70%);
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );


export default App;
