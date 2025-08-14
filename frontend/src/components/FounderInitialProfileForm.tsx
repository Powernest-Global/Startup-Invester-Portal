
// FounderInitialProfileForm 
import React, { useState, useCallback } from 'react';
import { Check, FileUp, ChevronDown, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import OnboardingFounder from './OnboardingFounder';



// --- Interfaces ---
interface Step {
  id: string;
  title: string;
  children?: Step[];
}

interface FormData {
  startupName: string;
  wasIncorporated: string;
selectDate: string;
  startupAddress: string;
  pincode: string;
  country: string;
  otherCountry: string;
  sectorPreference: string[];
  stagePreference: string;
  websiteUrl: string;
  founderStory: string;
  productDifferentiation: string;
  traction: string;
//  marketValidation: string;
  productOverview: string;
  coreTeam: string;
  founderHistory: string;
  productStage: string;
  productFeatures: string;
  userFeedback: string;
  marketInsights: string;
  technologyStack: string;
  productLogoFile: File | null;
  pitchDeckFiles: File[];
  pitchDeckLink: string;
  pitchDeckLinkError: string;
  otherDocLink: string;
  otherDocLinkError: string;
  otherDocuments: File[];

  teamMembers: string[];
}

// Utility function to flatten the steps for navigation
const flattenSteps = (s: Step[]): Step[] => {
  let flat: Step[] = [];
  s.forEach(step => {
    flat.push(step);
    if (step.children) {
      flat = flat.concat(flattenSteps(s[0].children || []));
    }
  });
  return flat;
};

// --- Stepper Component ---
const OnboardingStepper = ({ steps, currentStep, onStepClick }: { steps: Step[], currentStep: string, onStepClick: (stepId: string) => void }) => {
  const flatSteps = flattenSteps(steps);
  const findActiveParentStep = (allSteps: Step[], currentId: string): Step | null => {
    for (const step of allSteps) {
      if (step.id === currentId) {
        return step;
      }
      if (step.children) {
        const foundChild = step.children.find(child => child.id === currentId);
        if (foundChild) {
          return step;
        }
      }
    }
    return null;
  };

 const activeParentStep = findActiveParentStep(steps, currentStep);
  const activeParentIndex = steps.findIndex(step => step.id === activeParentStep?.id);
  const currentStepIndex = flatSteps.findIndex(fs => fs.id === currentStep);
const isParentCompleted = (stepId: string) => {
    const parentIndex = steps.findIndex(step => step.id === stepId);
    return parentIndex < activeParentIndex;
  };

  const isStepCompleted = (stepId: string) => {
    const stepIndex = flatSteps.findIndex(fs => fs.id === currentStep);
    return stepIndex < currentStepIndex;
  };

  const isActiveParent = (stepId: string) => {
    return stepId === activeParentStep?.id;
  };

  return (
    <div className="flex flex-col w-full">
      {steps.map((step, index) => (
        <div key={step.id} className="flex">
          <div className="flex flex-col items-center mr-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isActiveParent(step.id) ? 'bg-white' : isParentCompleted(step.id) ? 'bg-[#3262FF]' : 'border border-[#303030]'}`}>
              {isActiveParent(step.id) && <div className="w-3 h-3 bg-[#3262FF] rounded-full"></div>}
              {isParentCompleted(step.id) && <Check className="w-4 h-4 text-white" />}
            </div>
            {index < steps.length - 1 && (
              <div className={`w-1 h-24 ${isParentCompleted(step.id) || isActiveParent(step.id) ? 'bg-gradient-to-b from-[#8282FF] to-[#00003F]' : 'bg-gradient-to-b from-[#4C4C4C] to-[#222222]'}`}></div>
            )}
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex items-center h-6 relative">
              <button
                type="button"
                onClick={() => onStepClick(step.children?.[0]?.id || step.id)}
                className={`text-lg font-semibold ml-2 text-left ${isActiveParent(step.id) || isParentCompleted(step.id) ? 'text-white' : 'text-[#A9ADB1]'}`}
              >
                {step.title}
              </button>
            </div>
            {step.children && (isActiveParent(step.id) || isParentCompleted(step.id)) && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {step.children.map(child => {
                  const isChildActive = child.id === currentStep;
                  const isChildCompleted = isStepCompleted(child.id);
                  const lineColor = isChildActive ? 'bg-white' : isChildCompleted ? 'bg-[#A9ADB1]' : 'bg-[#4C4C4C]';
                  return (
                    <div key={child.id} className="flex items-center relative">
                      <div className={`absolute left-[-24px] w-[20px] h-px ${lineColor}`}></div>
                      <button
                        type="button"
                        onClick={() => onStepClick(child.id)}
                        className={`text-base ml-2 text-left ${isChildActive ? 'text-white font-semibold' : isChildCompleted ? 'text-gray-400' : 'text-[#A9ADB1]'}`}
                      >
                        {child.title}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
            {index < steps.length - 1 && (
              <div className="pb-16"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Main application component ---
export default function App() {
  const steps: Step[] = [
    {
      id: 'startup-profile',
      title: 'Startup Profile',
      children: [
        { id: 'basic-details-sub', title: 'Basic details' },
        { id: 'startup-details-sub', title: 'Start-up details' },
      ],
    },
    {
      id: 'upload-document',
      title: 'Upload Document',
    },
    {
      id: 'add-team',
      title: 'Add Your Team',
    },
   
  ];
const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);



  const [formData, setFormData] = useState<FormData>({
    startupName: '',
    wasIncorporated: '',
    selectDate: '',
    startupAddress: '',
    pincode: '',
    country: '',
    otherCountry: '',
    sectorPreference: [],
    stagePreference: '',
    websiteUrl: '',
      founderStory: '',
  productOverview: '',
  coreTeam: '',
  founderHistory: '',
  productStage: '',
  productFeatures: '',
  technologyStack: '',
  traction: '',
  userFeedback: '',
  productDifferentiation: '',
  marketInsights: '',
    productLogoFile: null,
    pitchDeckFiles: [],
    pitchDeckLink: '',
     pitchDeckLinkError: '',
    otherDocuments: [],
    otherDocLink: '',
  otherDocLinkError: '',
    teamMembers: [],
    
  });

  
const flatSteps = [
  { id: 'basic-details-sub', title: 'Basic Details' },
  { id: 'startup-details-sub', title: 'Startup Details' },
  { id: 'upload-document', title: 'Upload Document' },
  { id: 'add-team', title: 'Add Your Team' },
  { id: 'onboarding-founder', title: 'Onboarding Founder' }, // Final step, not in sidebar
];
  const [currentStepId, setCurrentStepId] = useState(flatSteps[0].id);
  const currentStepIndex = flatSteps.findIndex(step => step.id === currentStepId);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [websiteUrlError, setWebsiteUrlError] = useState('');

  const [isSectorDropdownOpen, setIsSectorDropdownOpen] = useState(false);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(
  formData.teamMembers.length > 0
    ? formData.teamMembers

: [
    { id: 1, name: '', email: '', role: '', linkedin: '' },
    { id: 2, name: '', email: '', role: '', linkedin: '' }
  ]
);
const [teamErrors, setTeamErrors] = useState<any>({});
  const onStepClick = (stepId: string) => {
    setCurrentStepId(stepId);
  };
 


const handleNext = (newData: Partial<typeof formData> = {}) => {
  setMessage(null);

  // Merge newData into formData first for validation
  const updatedFormData = { ...formData, ...newData };

  let isValid = true;

  switch (currentStepId) {
    case 'basic-details-sub':
      if (
        !updatedFormData.startupName ||
        !updatedFormData.wasIncorporated ||
        !updatedFormData.startupAddress ||
        !updatedFormData.country ||
        !updatedFormData.pincode ||
        !updatedFormData.productLogoFile
      ) {
        isValid = false;
      }
      if (updatedFormData.wasIncorporated === 'yes' && !updatedFormData.selectDate) {
        isValid = false;
      }
      if (updatedFormData.country === 'Other' && !updatedFormData.otherCountry) {
        isValid = false;
      }
      if (updatedFormData.sectorPreference.length === 0) {
        isValid = false;
      }
      if (updatedFormData.stagePreference === '') {
        isValid = false;
      }
      const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w]{2,}(\/\S*)?$/i;
      const websiteUrl = updatedFormData.websiteUrl?.trim();
      if (websiteUrl && !urlPattern.test(websiteUrl)) {
        setWebsiteUrlError("Please enter a valid website URL (e.g., https://example.com)");
        isValid = false;
      } else {
        setWebsiteUrlError('');
      }
      break;

    case 'startup-details-sub':
      if (
        !updatedFormData.founderStory ||
        !updatedFormData.productOverview ||
        !updatedFormData.coreTeam ||
        !updatedFormData.founderHistory ||
        !updatedFormData.productStage ||
        !updatedFormData.productFeatures ||
        !updatedFormData.technologyStack ||
        !updatedFormData.traction ||
        !updatedFormData.userFeedback ||
        !updatedFormData.productDifferentiation ||
        !updatedFormData.marketInsights
      ) {
        isValid = false;
      }
      break;

    case 'upload-document':
      if (updatedFormData.pitchDeckFiles.length === 0) {
        isValid = false;
      }
      break;

    case 'add-team':
      if (!updatedFormData.teamMembers || updatedFormData.teamMembers.length === 0) {
        isValid = false;
      }
      break;

    default:
      break;
  }

  if (!isValid) {
    setMessage({ text: 'Please fill out all required fields.', type: 'error' });
    return;
  }

  // Update formData state with merged data
  setFormData(updatedFormData);

  // Move to next step
  const currentIndex = flatSteps.findIndex(step => step.id === currentStepId);
  if (currentIndex < flatSteps.length - 1) {
    setCurrentStepId(flatSteps[currentIndex + 1].id);
  } else {
    setIsOnboardingComplete(true);
  }
};

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepId(flatSteps[currentStepIndex - 1].id);
      setMessage(null); // Clear messages when going back
    }
  };




const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  memberId?: number
) => {
  const { name, value, type } = e.target;

  // --- TEAM MEMBER LOGIC ---
  if (name.startsWith('teamMember-') && memberId !== undefined) {
    const fieldName = name.replace('teamMember-', '');

    setTeamMembers(prev =>
      prev.map(member =>
        member.id === memberId ? { ...member, [fieldName]: value } : member
      )
    );

    if (value) {
      setTeamErrors((prev: any) => ({
        ...prev,
        [memberId]: {
          ...prev[memberId],
          [fieldName]: false,
        },
      }));
    }

    return;
  }

  

  // website URL error
  if (name === 'websiteUrl') {
    setWebsiteUrlError('');
  }

  // Validate Google Drive public link
  if (name === 'pitchDeckLink' || name === 'otherDocLink') {
    const isPublicDriveLink =
      /^https:\/\/drive\.google\.com\/(file|open)\//.test(value) &&
      !value.includes('usp=restricted') &&
      !value.includes('authuser');

    setFormData(prev => ({
      ...prev,
      [name]: value,
      [`${name}Error`]:
        !isPublicDriveLink && value.trim() !== ''
          ? 'Please enter a valid public Google Drive link.'
          : '',
    }));

    return;
  }

  // Sector preference (checkbox group)
  if (type === 'checkbox') {
    const checkbox = e.target as HTMLInputElement;
    const { checked } = checkbox;

    setFormData(prev => {
      const currentSectors = prev.sectorPreference;
      if (checked && currentSectors.length < 3) {
        return {
          ...prev,
          sectorPreference: [...currentSectors, value],
        };
      } else if (!checked) {
        return {
          ...prev,
          sectorPreference: currentSectors.filter(s => s !== value),
        };
      }
      return prev;
    });
  } else {
    // For all other fields
    setFormData(prev => ({ ...prev, [name]: value }));
  }
};



  const handleSectorChange = (sector: string) => {
    setFormData(prev => {
      const currentSectors = prev.sectorPreference;
      if (currentSectors.includes(sector)) {
        return {
          ...prev,
          sectorPreference: currentSectors.filter(s => s !== sector)
        };
      } else if (currentSectors.length < 3) {
        return {
          ...prev,
          sectorPreference: [...currentSectors, sector]
        };
      }
      return prev;
    });
  };

  const onProductLogoDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFormData(prev => ({ ...prev, productLogoFile: acceptedFiles[0] }));
    }
    setMessage(null);
  }, []);

  const onPitchDeckDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFormData(prev => ({ ...prev, pitchDeckFiles: [acceptedFiles[0]] }));
    }
    setMessage(null);
  }, []);

  const onOtherDocumentsDrop = useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(file => {
      if (file.size > 10 * 1024 * 1024) { // Max 10MB
        setMessage({ text: `${file.name} is too large. Max size is 10MB.`, type: 'error' });
        return false;
      }
      return true;
    });
    setFormData(prev => ({ ...prev, otherDocuments: validFiles }));
    setMessage(null);
  }, []);

  const handleRemoveProductLogo = () => {
    setFormData(prev => ({ ...prev, productLogoFile: null }));
  };

  const handleRemovePitchDeckFile = () => {
    setFormData(prev => ({
      ...prev,
      pitchDeckFiles: []
    }));
  };

  const handleRemoveOtherDoc = (indexToRemove: number) => {
    setFormData(prev => ({
      ...prev,
      otherDocuments: prev.otherDocuments.filter((_, index) => index !== indexToRemove)
    }));
  };


const handleAddMember = () => {
  if ( teamMembers.length >= 10) return; //  Limit to 5
  setTeamMembers(prev => [
    ...prev,
    { id: Date.now(), name: '', email: '', role: '', linkedin: '' }
  ]);
};
 
//   const handleRemoveMember = (id: number) => {
//   setTeamMembers(prev => prev.filter(member => member.id !== id));
//   setTeamErrors((prev: any) => {
//     const newErrors = { ...prev };
//     delete newErrors[id];
//     return newErrors;
//   });
// };
const handleRemoveMember = (id: number) => {
  setTeamMembers(prev => {
    if (prev.length <= 2) {
      alert("At least 2 team members are required.");
      return prev; // don't remove if minimum reached
    }
    return prev.filter(member => member.id !== id);
  });

  setTeamErrors((prev: any) => {
    const newErrors = { ...prev };
    delete newErrors[id];
    return newErrors;
  });
};

const validateTeamForm = () => {
  const newErrors: any = {};
  let isValid = true;
  teamMembers.forEach(member => {
    const memberErrors: any = {};
    if (!member.name.trim()) memberErrors.name = true;
    if (!member.email.trim()) memberErrors.email = true;
    if (!member.role.trim()) memberErrors.role = true;
    if (!member.linkedin.trim()) memberErrors.linkedin = true;

    if (Object.keys(memberErrors).length > 0) {
      newErrors[member.id] = memberErrors;
      isValid = false;
    }
  });
  setTeamErrors(newErrors);
  return isValid;
};

const handleTeamContinue = () => {
  if (validateTeamForm()) {
    // Set the teamMembers into formData first
    setFormData(prev => ({ ...prev, teamMembers }));

    // Delay the transition to the OnboardingFounder page until next render tick
    setTimeout(() => {
      setIsOnboardingComplete(true);
    }, 0);
  } else {
    setMessage({ text: 'Please fill out all required fields.', type: 'error' });
  }
};


  const handleFinalSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  console.log('Final Data:', formData);

  
  setIsOnboardingComplete(true);

 
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
  const sectors = ['Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education', 'Real Estate'];
  const stages = ['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Series C+', 'Growth Stage'];
const [showPitchDeckLinkInput, setShowPitchDeckLinkInput] = useState(false);
const [showOtherDocLinkInput, setShowOtherDocLinkInput] = useState(false);
  const { getRootProps: getProductLogoRootProps, getInputProps: getProductLogoInputProps, isDragActive: isProductLogoDragActive } = useDropzone({ onDrop: onProductLogoDrop, accept: {'image/png': ['.png'], 'image/jpeg': ['.jpeg', '.jpg'], 'image/svg+xml': ['.svg']}, maxFiles: 1, maxSize: 5 * 1024 * 1024 });
  const { getRootProps: getPitchDeckRootProps, getInputProps: getPitchDeckInputProps, isDragActive: isPitchDeckDragActive } = useDropzone({ onDrop: onPitchDeckDrop, accept: {'application/pdf': ['.pdf'], 'application/vnd.ms-powerpoint': ['.ppt', '.pptx']}, maxFiles: 1, maxSize: 10 * 1024 * 1024 });
  const { getRootProps: getOtherDocsRootProps, getInputProps: getOtherDocsInputProps, isDragActive: isOtherDocsDragActive } = useDropzone({ onDrop: onOtherDocumentsDrop, accept: {'application/pdf': ['.pdf'], 'application/vnd.ms-powerpoint': ['.ppt', '.pptx']}, maxFiles: 10, maxSize: 10 * 1024 * 1024 });

  const countWords = (text: string) => {
    return text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  };

  const TextAreaField: React.FC<{
    label: string;
    name: keyof FormData;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
    wordLimit?: number;
    required?: boolean;
    helperText?: string;
  }> = ({ label, name, value, onChange, placeholder, wordLimit, required = false, helperText }) => {
    const wordCount = countWords(value);
    return (
      <div className="flex flex-col items-start p-0 gap-2 w-full">
        <label htmlFor={name} className="text-sm font-semibold text-white">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {helperText && <p className="text-sm text-[#A9ADB1]">{helperText}</p>}
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-32 p-3 border border-[#303030] rounded-md bg-[#1A1C28] text-white resize-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
        />
        {wordLimit && (
          <div className="w-full text-xs text-right text-gray-400">
            {wordCount}/{wordLimit} Words
          </div>
        )}
      </div>
    );
  };
  
  const renderCurrentForm = () => {
    switch (currentStepId) {
      case 'basic-details-sub':
        return (
          <div className="animate-fade-in space-y-6">
            <h1 className="text-xl font-bold text-white text-left">Startup Profile</h1>
            <h2 className="text-lg font-bold text-white text-left">Basic Details</h2>
            <div>
              <label htmlFor="startupName" className="block text-gray-400 text-sm font-medium mb-2">
                What is your start-up’s name? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="startupName"
                name="startupName"
                value={formData.startupName}
                onChange={handleInputChange}
                className="w-full p-3 rounded-md bg-[#1A1C28] border border-[#303030] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                placeholder="Write here"
                required
              />
            </div>
            <div>
              <label htmlFor="wasIncorporated" className="block text-gray-400 text-sm font-medium mb-2">
                Was it incorporated? <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="wasIncorporatedYes"
                    name="wasIncorporated"
                    value="yes"
                    checked={formData.wasIncorporated === 'yes'}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-[#3262FF] border-gray-600 focus:ring-[#3262FF] rounded-full"
                  />
                  <span className={formData.wasIncorporated === 'yes' ? 'text-white font-semibold' : 'text-gray-400'}>
                    Yes
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="wasIncorporatedNo"
                    name="wasIncorporated"
                    value="no"
                    checked={formData.wasIncorporated === 'no'}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-[#3262FF] border-gray-600 focus:ring-[#3262FF] rounded-full"
                  />
                  <span className={formData.wasIncorporated === 'no' ? 'text-white font-semibold' : 'text-gray-400'}>
                    No
                  </span>
                </label>
              </div>
            </div>
            {formData.wasIncorporated === 'yes' && (
              <div>
                <label htmlFor="selectDate" className="block text-gray-400 text-sm font-medium mb-2">
                  If yes, start-up Incorporation date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="selectDate"
                  name="selectDate"
                  value={formData.selectDate}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md bg-[#1A1C28] border border-[#303030] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                  required
                />
              </div>
            )}
            <div>
              <label htmlFor="startupAddress" className="block text-gray-400 text-sm font-medium mb-2">
                Your start-up Incorporation address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="startupAddress"
                name="startupAddress"
                value={formData.startupAddress}
                onChange={handleInputChange}
                className="w-full p-3 rounded-md bg-[#1A1C28] border border-[#303030] text-white focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                placeholder="Enter Your Register address"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-8 w-full">
              <div className="flex-1">
                <label htmlFor="country" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Country <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                    required
                  >
                    {countries.map(country => (
                      <option key={country || 'select'} value={country} className="bg-[#05060F]">
                        {country || 'Select your country'}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A9ADB1] pointer-events-none" />
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
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                  required
                />
              </div>
            </div>
            {/* Product Logo Dropzone */}
            <div>
              <label htmlFor="productLogo" className="block text-gray-400 text-sm font-medium mb-2">
                Product Identification Logo <span className="text-red-500">*</span>
              </label>
              <div
                {...getProductLogoRootProps()}
                className={`border-2 border-dashed rounded-md p-6 text-center flex flex-col items-center gap-3 cursor-pointer transition ${isProductLogoDragActive ? "bg-[#1e1e1e] border-[#3262FF]" : "bg-transparent border-[#303030]"}`}
              >
                <input {...getProductLogoInputProps()} />
                {formData.productLogoFile ? (
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm text-[#A9ADB1]">{formData.productLogoFile.name}</span>
                    <button type="button" onClick={handleRemoveProductLogo} className="text-red-400 hover:text-red-600">
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <FileUp size={24} className="text-[#A9ADB1]" />
                    <p className="text-[#A9ADB1] text-sm">
                      Drag & Drop files here or <span className="underline">Click to Upload</span>
                    </p>
                    <p className="text-[#A9ADB1] text-sm">
                      Accepted formats: PNG, JPG, SVG • Max 2MB
                    </p>
                  </>
                )}
              </div>
            </div>
          
            {/* Sector Dropdown with Multi-select functionality */}
            <div className="flex-1">
              <label htmlFor="sector-select" className="block text-[#E6E6E6] font-semibold text-sm mb-2">
                Sector <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-[#A9ADB1] mb-2">
                Select your start-up sector, you can choose up to 3 sectors
              </p>
              <div className="relative">
                <button
                  type="button"
                  id="sector-select"
                  onClick={() => setIsSectorDropdownOpen(!isSectorDropdownOpen)}
                  className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                >
                  <span className="text-[#A9ADB1]">
                    {formData.sectorPreference.length === 0 ? 'Select up to 3 sectors' : `Selected (${formData.sectorPreference.length})`}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#A9ADB1] transition-transform duration-200 ${isSectorDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSectorDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-[#1A1C28] rounded-lg border border-[#303030] shadow-xl max-h-48 overflow-y-auto">
                    {sectors.map(sector => (
                      <button
                        key={sector}
                        type="button"
                        onClick={() => handleSectorChange(sector)}
                        className={`w-full text-left px-4 py-2 hover:bg-[#3262FF] hover:text-white transition-colors flex items-center justify-between ${
                          formData.sectorPreference.includes(sector) ? 'bg-[#3262FF] text-white' : 'text-[#A9ADB1]'
                        } ${formData.sectorPreference.length >= 3 && !formData.sectorPreference.includes(sector) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={formData.sectorPreference.length >= 3 && !formData.sectorPreference.includes(sector)}
                      >
                        {sector}
                        {formData.sectorPreference.includes(sector) && <Check size={16} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.sectorPreference.map(sector => (
                  <div key={sector} className="flex items-center bg-[#3262FF] text-white text-xs px-3 py-1 rounded-full">
                    {sector}
                    <button
                      type="button"
                      onClick={() => handleSectorChange(sector)}
                      className="ml-2 text-white hover:text-gray-200"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* Stage */}
            <div className="flex-1">
              <label className="block text-[#E6E6E6] font-semibold text-sm mb-2">
                Stage <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-[#A9ADB1]">
                Select the stage that reflects where you are in your fundraising journey
              </p>
              <div className="relative mt-4">
                <select
                  name="stagePreference"
                  value={formData.stagePreference}
                  onChange={handleInputChange}
                  className="w-full h-[56px] px-4 bg-[#1a1a2e] text-[#E6E6E6] rounded-[4px] border border-[#A9ADB1] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                  required
                >
                  <option value="" className="bg-[#05060F]">Select your stage</option>
                  {stages.map(s => (
                    <option key={s} value={s} className="bg-[#05060F]">
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A9ADB1] pointer-events-none" />
              </div>
            </div>
            {/* Website URL */}
            <div className="flex-1">
              <label className="block text-[#E6E6E6] font-semibold text-sm mb-2">
                Website URL if any
              </label>
              <input
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl || ""}
                onChange={handleInputChange}
                placeholder="Enter your website URL"
                className={`w-full h-[48px] px-4 bg-transparent text-[#E6E6E6] rounded-[4px] border ${websiteUrlError ? 'border-red-500' : 'border-[#A9ADB1]'} focus:outline-none focus:ring-2 focus:ring-[#3262FF]`}
              />
              {websiteUrlError && (
                <p className="text-red-500 text-sm mt-1">{websiteUrlError}</p>
              )}
            </div>
          </div>
        );
     
      case 'startup-details-sub':
  return (
    <div className="animate-fade-in space-y-6">
      <h1 className="text-xl font-bold text-white text-left">Start-up Profile</h1>
      <h2 className="text-sm text-white text-left">Start-up Details</h2>

      <TextAreaField
        label="What does your start-up do, and what problem are you solving?"
        name="founderStory"
        value={formData.founderStory}
        onChange={handleInputChange}
        placeholder="Write here"
        wordLimit={400}
        required
      />

      <TextAreaField
        label="Briefly describe your product, target market, and what makes your approach unique"
        name="productOverview"
        value={formData.productOverview}
        onChange={handleInputChange}
        placeholder="Write here"
        wordLimit={400}
        required
      />

      <h4 className="text-sm text-white text-left">Founding Team</h4>

      <TextAreaField
        label="List the core team members, their roles, and relevant experience."
        name="coreTeam"
        value={formData.coreTeam}
        onChange={handleInputChange}
        placeholder="Write here"
        wordLimit={400}
        required
      />

      <TextAreaField
        label="How did the founders meet, and how long have you known each other?"
        name="founderHistory"
        value={formData.founderHistory}
        onChange={handleInputChange}
        placeholder="Write here"
        wordLimit={400}
        required
      />

      <h4 className="text-sm text-white text-left">Product & Technology</h4>

      <TextAreaField
        label="What stage is the product in (idea, prototype, MVP, live)?"
        name="productStage"
        value={formData.productStage}
        onChange={handleInputChange}
        placeholder="Write here"
        wordLimit={400}
        required
      />

      <TextAreaField
        label="What are the main features and what technologies are being used?"
        name="productFeatures"
        value={formData.productFeatures}
        onChange={handleInputChange}
        placeholder="Write here"
        wordLimit={400}
        required
      />
<h4 className="text-sm text-white text-left">Traction & User Validation</h4>

      <TextAreaField
        label="What traction do you have so far (e.g., user signups, pilots, waitlist)?"
        name="traction"
        value={formData.traction}
        onChange={handleInputChange}
        placeholder="Write here"
        wordLimit={400}
        required
      />

      <TextAreaField
        label="Include any measurable outcomes or feedback from users or partners."
        name="userFeedback"
        value={formData.userFeedback}
        onChange={handleInputChange}
        placeholder="Write here"
        wordLimit={400}
        required
      />

      <h4 className="text-sm text-white text-left">Market & Differentiation</h4>

      <TextAreaField
        label="How is your product different or better?"
        name="productDifferentiation"
        value={formData.productDifferentiation}
        onChange={handleInputChange}
        placeholder="Write here"
        wordLimit={400}
        required
      />

      <TextAreaField
        label="What insights or advantages do you have in this market?"
        name="marketInsights"
        value={formData.marketInsights}
        onChange={handleInputChange}
        placeholder="Write here"
        wordLimit={400}
        required
      />
      <TextAreaField
        label="What is your technology stack?"
        name="technologyStack"
        value={formData.technologyStack}
        onChange={handleInputChange}
        placeholder="write here"
        wordLimit={400}
      />
    </div>
  );

 case 'upload-document':
  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-xl font-bold text-white text-left">Upload Document</h2>

      {/* --- Pitch Deck Section --- */}
      <h3 className="text-xl text-white text-left">
        Pitch deck (PDF or Google drive link) <span className="text-red-500">*</span>
      </h3>
      <p className="text-sm text-[#A9ADB1]">
        Please attach a pitch deck that provides a clear overview of your business model, market potential, and founding team.
      </p>
      <div
        {...getPitchDeckRootProps()}
        className={`border-2 border-dashed rounded-md px-6 py-6 text-center flex flex-col items-center gap-3 cursor-pointer transition ${
          isPitchDeckDragActive ? "bg-[#1e1e1e] border-[#3262FF]" : "bg-transparent border-[#303030]"
        }`}
      >
        <input {...getPitchDeckInputProps()} />
        <FileUp size={24} className="text-[#A9ADB1]" />
        <p className="text-[#A9ADB1] text-sm">
          Drag & Drop files here or{" "}
          <span className="underline">Click to Upload</span> or{" "}
          <span
            className="underline cursor-pointer text-[#A9ADB1]"
            onClick={() => setShowPitchDeckLinkInput(true)}
          >
            Add a link
          </span>
        </p>
        <p className="text-[#A9ADB1] text-sm">
          Accepted formats: PDF, PPT, PPTX • Max 10MB
        </p>
      </div>

      {/* Pitch Deck Link Input  */}
      {showPitchDeckLinkInput && (
        <>
          <input
            type="text"
            name="pitchDeckLink"
            value={formData.pitchDeckLink}
            onChange={handleInputChange}
            placeholder="Paste a public Google Drive link"
            className={`w-full bg-[#1A1C28] border ${
              formData.pitchDeckLinkError ? "border-red-500" : "border-[#303030]"
            } rounded-md text-white px-4 py-2 mt-2 text-sm placeholder:text-[#A9ADB1]`}
          />
          {formData.pitchDeckLinkError && (
            <p className="text-red-500 text-sm mt-1">{formData.pitchDeckLinkError}</p>
          )}
        </>
      )}

      {/* Show uploaded pitch deck files */}
      {formData.pitchDeckFiles.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-[#A9ADB1]">
          {formData.pitchDeckFiles.map((file, index) => (
            <li key={index} className="flex justify-between items-center p-2 bg-[#1A1C28] rounded-md">
              <span>{file.name}</span>
              <button
                type="button"
                onClick={handleRemovePitchDeckFile}
                className="text-red-400 hover:text-red-600"
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* --- Other Documents Section --- */}
      <h3 className="text-xl text-white text-left mt-8">
        Other document (PDF or Google drive link)
      </h3>
      <p className="text-sm text-[#A9ADB1]">
        Include relevant documents such as valuation reports, incorporation certificates, cap table, previous term sheets, and proof of funds (if funds have already been raised).
      </p>
      <div
        {...getOtherDocsRootProps()}
        className={`border-2 border-dashed rounded-md px-6 py-6 text-center flex flex-col items-center gap-3 cursor-pointer transition ${
          isOtherDocsDragActive ? "bg-[#1e1e1e] border-[#3262FF]" : "bg-transparent border-[#303030]"
        }`}
      >
        <input {...getOtherDocsInputProps()} />
        <FileUp size={24} className="text-[#A9ADB1]" />
        <p className="text-[#A9ADB1] text-sm">
          Drag & Drop files here or{" "}
          <span className="underline">Click to Upload</span> or{" "}
          <span
            className="underline cursor-pointer text-[#A9ADB1]"
            onClick={() => setShowOtherDocLinkInput(true)}
          >
            Add a link
          </span>
        </p>
        <p className="text-[#A9ADB1] text-sm">
          Accepted formats: PDF, PPT, PPTX • Max 10MB
        </p>
      </div>

      {/* Other Docs Link Input */}
      {showOtherDocLinkInput && (
        <>
          <input
            type="text"
            name="otherDocLink"
            value={formData.otherDocLink}
            onChange={handleInputChange}
            placeholder="Paste a public Google Drive link"
            className={`w-full bg-[#1A1C28] border ${
              formData.otherDocLinkError ? "border-red-500" : "border-[#303030]"
            } rounded-md text-white px-4 py-2 mt-2 text-sm placeholder:text-[#A9ADB1]`}
          />
          {formData.otherDocLinkError && (
            <p className="text-red-500 text-sm mt-1">{formData.otherDocLinkError}</p>
          )}
        </>
      )}

      {/* Show uploaded other documents files */}
      {formData.otherDocuments.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-[#A9ADB1]">
          {formData.otherDocuments.map((file, index) => (
            <li key={index} className="flex justify-between items-center p-2 bg-[#1A1C28] rounded-md">
              <span>{file.name}</span>
              <button
                type="button"
                onClick={() => handleRemoveOtherDoc(index)}
                className="text-red-400 hover:text-red-600"
              >
                <X size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  

case 'add-team':
  return (
    <div className="p-8 bg-[#0F101A] rounded-xl shadow-lg w-full max-w-4xl mx-auto animate-fade-in">
      {/* Page Title */}
      <h2 className="text-3xl font-bold mb-8 text-white text-left">Add Team Members</h2>

      {/* All Team Member Sections */}
      <div className="space-y-10">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="space-y-6 border-b border-[#303030] pb-8 last:border-b-0"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-100">
                Team member {index + 1}
              </h3>
              {teamMembers.length > 1 && (
                <button
                  onClick={() => handleRemoveMember(member.id)}
                  className="text-red-400 hover:text-red-600 text-sm"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Name */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="teamMember-name"
                value={member.name}
                onChange={(e) => handleInputChange(e, member.id)}
                className={`w-full p-3 rounded-md bg-[#1A1C28] border text-white ${
                  teamErrors[member.id]?.name
                    ? 'border-red-500'
                    : 'border-[#303030]'
                }`}
                placeholder="Enter name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="teamMember-email"
                value={member.email}
                onChange={(e) => handleInputChange(e, member.id)}
                className={`w-full p-3 rounded-md bg-[#1A1C28] border text-white ${
                  teamErrors[member.id]?.email
                    ? 'border-red-500'
                    : 'border-[#303030]'
                }`}
                placeholder="Enter email"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Role <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="teamMember-role"
                value={member.role}
                onChange={(e) => handleInputChange(e, member.id)}
                className={`w-full p-3 rounded-md bg-[#1A1C28] border text-white ${
                  teamErrors[member.id]?.role
                    ? 'border-red-500'
                    : 'border-[#303030]'
                }`}
                placeholder="e.g., Founder, CTO"
              />
            </div>

            {/* LinkedIn */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                LinkedIn <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="teamMember-linkedin"
                value={member.linkedin}
                onChange={(e) => handleInputChange(e, member.id)}
                className={`w-full p-3 rounded-md bg-[#1A1C28] border text-white ${
                  teamErrors[member.id]?.linkedin
                    ? 'border-red-500'
                    : 'border-[#303030]'
                }`}
                placeholder="Enter LinkedIn profile URL"
              />
            </div>
          </div>
        ))}
      </div>

      {/* + Add More Member Button — Centered */}
      <div className="mt-10 text-center">
        <button
          onClick={handleAddMember}
          type="button"
          className="px-5 py-2 bg-[#1A1C28] border border-[#303030] text-white rounded-md hover:bg-[#222436]"
        >
          + Add more member
        </button>
      </div>

      {/* Flow Navigation: Back / Continue */}
      <div className="flex justify-between mt-12">
        <button
          type="button"
          onClick={handleBack}
          className="px-6 py-3 bg-transparent text-white rounded-md hover:bg-gray-800"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleTeamContinue}
          className="px-8 py-3 bg-[#3262FF] text-white rounded-md hover:bg-[#2852D9]"
        >
          Continue
        </button>
      </div>
    </div>
  );


      


      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#05060F] text-white flex flex-col lg:flex-row items-center lg:items-start justify-center p-6">
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Background Gradient Ellipse (Main Page Background) */}
      <div className="absolute top-0 left-0 w-[721px] h-[721px] transform -translate-x-1/2 -translate-y-1/4 pointer-events-none">
        <div className="w-full h-full bg-radial-gradient opacity-50 blur-[47px]"></div>
      </div>

      {/* Sidebar - Fixed positioning with full gradient background */}
      
      {!isOnboardingComplete && (
  <aside
    className="lg:fixed rounded-xl z-10 w-full lg:w-[352px] h-auto lg:h-[calc(100vh-2rem)] left-4 top-4 p-6 mb-8 lg:mb-0"
    style={{
      background: 'radial-gradient(195.32% 112.27% at 50% 80%, #000000 30.77%, #0C0C4A 44.28%, #0606A9 58.97%, #0000FF 75.08%, #9898FF 91.44%)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundSize: '100% 100%',
    }}
  >
    <h1 className="text-2xl font-bold mb-8">Onboarding step</h1>
    <OnboardingStepper steps={steps} currentStep={currentStepId} onStepClick={onStepClick} />
  </aside>
)}


     
{/* Main Content Area */}
  <main
           className={`p-8 transition-all duration-300 ${
        isOnboardingComplete
          ? 'w-full lg:ml-0' // full width, no margin when onboarding founder page
          : 'lg:w-[832px] lg:ml-[384px]' // reserve sidebar space otherwise
      }`}
    >
      <div className="p-8 bg-[#0F101A] rounded-xl shadow-lg border border-[#303030]">
        <form onSubmit={handleFinalSubmit} className="space-y-6">
          {message && (
            <div className={`p-4 rounded-md ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
              {message.text}
            </div>
          )}

          {isOnboardingComplete ? <OnboardingFounder /> : renderCurrentForm()}
{!isOnboardingComplete && currentStepId !== 'add-team' && (
  <div className={`flex mt-8 ${currentStepId !== 'basic-details-sub' ? 'justify-between' : 'justify-end'}`}>
              {currentStepId !== 'basic-details-sub' && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 rounded-md transition-colors bg-[#1A1C28] hover:bg-[#222436] text-white"
                >
                  Back
                </button>
              )}
              {currentStepIndex < flatSteps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-md transition-colors bg-[#3262FF] hover:bg-[#2852D9] text-white"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 rounded-md transition-colors bg-[#3262FF] hover:bg-[#2852D9] text-white"
                >
                  Continue
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </main>
    </div>
  );
}


