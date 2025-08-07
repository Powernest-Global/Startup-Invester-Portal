
import React, { useCallback, useState, useRef } from 'react';
import { useDropzone } from "react-dropzone";
import { ChevronDown, DollarSign, Check, FileUp } from 'lucide-react';

// --- Interfaces ---
interface Step { id: string; title: string; }
interface InvestorProfileData { investorType: string; geography: string; investmentFundSize: string; sectorPreference: string; stagePreference: string; }
interface InvestmentProfileData { dealPreferences: string; averageDealsPerYear: string; founderBackgroundPreference: string; }

// Updated FormProps for consistency
interface FormProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

// UploadDocumentForm specific props
interface UploadDocumentFormProps extends FormProps {
  onUpload: (files: File[]) => void;
  onLinkUpload: (type: "proof" | "additional", link: string) => void;
  handleFinishOnboarding: () => void; // This seems to be the final step action
}

// --- Stepper Component ---
// Refactored OnboardingStepper to match the specified flex-direction and gaps
const OnboardingStepper = ({ steps, currentStep }: { steps: Step[], currentStep: string }) => {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  return (
    // This div represents 'Frame 39440' (the outer container for the stepper content)
    // Its styles are applied by the parent div in StartupProfileForm, so this div
    // primarily defines the internal flex layout for the stepper circles and titles.
    <div className="flex flex-row items-start p-0 gap-[12px]">
      {/* Left Column: Stepper Circles and Lines ('Stage stepper') */}
      <div className="flex flex-col items-start p-0" style={{ width: '24px', height: '225px' }}>
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isActive = index === currentStepIndex;
          return (
            <React.Fragment key={step.id}>
              {/* Stepper Circle */}
              <div className={`flex items-center justify-center w-6 h-6 rounded-full ${isActive ? 'bg-white' : isCompleted ? 'bg-[#3262FF]' : 'border border-[#303030]'}`}>
                {isActive && <div className="w-3 h-3 bg-[#3262FF] rounded-full"></div>}
                {isCompleted && <Check className="w-4 h-4 text-white" />}
              </div>
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className={`w-1 h-[60px] ${isCompleted || isActive ? 'bg-gradient-to-b from-[#8282FF] to-[#00003F]' : 'bg-gradient-to-b from-[#4C4C4C] to-[#222222]'}`}></div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Right Column: Step Titles ('Frame 39437') */}
      <div className="flex flex-col items-start p-0" style={{ gap: '49px', width: '220px', height: '176px' }}> {/* Changed width to 220px */}
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isActive = index === currentStepIndex;
          return (
            <div key={step.id} className="pt-0.5"> {/* pt-0.5 to align text with circle */}
              <p className={`text-lg font-semibold ${isActive || isCompleted ? 'text-white' : 'text-[#A9ADB1]'}`}>
                {step.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- FORM COMPONENTS (Defined within StartupProfileForm.tsx for simplicity) ---

// Step 1: Investor Profile Form
const InvestorProfileForm: React.FC<FormProps> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState<InvestorProfileData>({
    investorType: '', geography: '', investmentFundSize: '', sectorPreference: '', stagePreference: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const investorTypes = ['Angel Investor', 'Venture Capital', 'Private Equity', 'Corporate Venture', 'Family Office'];
  const geographies = ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Global'];
  const sectors = ['Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education', 'Real Estate'];
  const stages = ['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Series C+', 'Growth Stage'];

  return (
    // Removed max-w-[832px] and mx-auto to allow it to take more space
    <div className="w-full px-4 py-16 sm:py-24 lg:py-32 text-white">
      <h1 className="text-4xl font-bold mb-12 text-[#E6E6E6]">Investor Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-8 w-full">
        <div>
          <label className="block text-[#E6E6E6] font-semibold text-sm mb-2">Investor type <span className="text-red-500">*</span></label>
          <p className="text-[#A9ADB1] text-sm mb-4">Tell us how you typically invest</p>
          <div className="relative">
            <select name="investorType" value={formData.investorType} onChange={handleInputChange} className="w-full h-[56px] px-4 bg-transparent text-[#E6E6E6] rounded-[4px] border border-[#A9ADB1] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]" required>
              <option value="" className="bg-[#05060F]">Select your investment type</option>
              {investorTypes.map(type => <option key={type} value={type} className="bg-[#05060F]">{type}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A9ADB1] pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-[#E6E6E6] font-semibold text-sm mb-2">Geography focused <span className="text-red-500">*</span></label>
          <p className="text-[#A9ADB1] text-sm mb-4">Select countries where you typically invest</p>
          <div className="relative">
            <select name="geography" value={formData.geography} onChange={handleInputChange} className="w-full h-[56px] px-4 bg-transparent text-[#E6E6E6] rounded-[4px] border border-[#A9ADB1] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]" required>
              <option value="" className="bg-[#05060F]">Select your geography</option>
              {geographies.map(geo => <option key={geo} value={geo} className="bg-[#05060F]">{geo}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A9ADB1] pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-[#E6E6E6] font-semibold text-sm mb-2">Investment fund Size <span className="text-red-500">*</span></label>
          <div className="relative mt-4">
            <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A9ADB1]" />
            <input type="text" name="investmentFundSize" value={formData.investmentFundSize} onChange={handleInputChange} placeholder="e.g., $20K to $100K" className="w-full h-[56px] pl-12 pr-4 bg-transparent text-[#E6E6E6] rounded-[4px] border border-[#A9ADB1] focus:outline-none focus:ring-2 focus:ring-[#3262FF]" required />
          </div>
        </div>
        <div className="flex space-x-8">
            <div className="flex-1">
                <label className="block text-[#E6E6E6] font-semibold text-sm mb-2">Sector preference</label>
                <div className="relative mt-4">
                    <select name="sectorPreference" value={formData.sectorPreference} onChange={handleInputChange} className="w-full h-[56px] px-4 bg-transparent text-[#E6E6E6] rounded-[4px] border border-[#A9ADB1] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]">
                        <option value="" className="bg-[#05060F]">Select preference</option>
                        {sectors.map(s => <option key={s} value={s} className="bg-[#05060F]">{s}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A9ADB1] pointer-events-none" />
                </div>
            </div>
            <div className="flex-1">
                <label className="block text-[#E6E6E6] font-semibold text-sm mb-2">Stage preference <span className="text-red-500">*</span></label>
                <div className="relative mt-4">
                    <select name="stagePreference" value={formData.stagePreference} onChange={handleInputChange} className="w-full h-[56px] px-4 bg-transparent text-[#E6E6E6] rounded-[4px] border border-[#A9ADB1] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]" required>
                        <option value="" className="bg-[#05060F]">Select preference</option>
                        {stages.map(s => <option key={s} value={s} className="bg-[#05060F]">{s}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A9ADB1] pointer-events-none" />
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center pt-8">
          <button type="button" onClick={onBack} className="text-[#A9ADB1] font-semibold hover:text-white transition-colors">Back</button>
          <button type="submit" className="w-[200px] h-[48px] bg-[#3262FF] hover:bg-blue-600 text-white font-semibold rounded-[12px] transition-colors">Continue</button>
        </div>
      </form>
    </div>
  );
};

// Step 2: Investment Profile Form
const InvestmentProfileForm: React.FC<FormProps> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState<InvestmentProfileData>({
    dealPreferences: '', averageDealsPerYear: '', founderBackgroundPreference: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const dealPreferences = ['Equity Investment', 'Convertible Notes', 'SAFE', 'Revenue-Based Financing'];
  const dealsPerYear = ['1-3 deals', '4-6 deals', '7-10 deals', '11-15 deals', '16+ deals'];
  const founderBackgrounds = ['First-time founders', 'Serial entrepreneurs', 'Technical founders', 'No preference'];

  return (
    // Removed max-w-[832px] and mx-auto to allow it to take more space
    <div className="w-full px-4 py-16 sm:py-24 lg:py-32 text-white">
      <h1 className="text-4xl font-bold mb-12 text-[#E6E6E6]">Investment Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-8 w-full">
        <div>
          <label className="block text-[#E6E6E6] font-semibold text-sm mb-2">Deal preferences</label>
          <p className="text-[#A9ADB1] text-sm mb-4">Select how you prefer to structure your investments</p>
          <div className="relative">
            <select name="dealPreferences" value={formData.dealPreferences} onChange={handleInputChange} className="w-full h-[56px] px-4 bg-transparent text-[#E6E6E6] rounded-[4px] border border-[#A9ADB1] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]" required>
              <option value="" className="bg-[#05060F]">Select your deal preference</option>
              {dealPreferences.map(pref => <option key={pref} value={pref} className="bg-[#05060F]">{pref}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A9ADB1] pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-[#E6E6E6] font-semibold text-sm mb-2">Average deals per year <span className="text-red-500">*</span></label>
          <p className="text-[#A9ADB1] text-sm mb-4">This helps us understand your investment frequency</p>
          <div className="relative">
            <select name="averageDealsPerYear" value={formData.averageDealsPerYear} onChange={handleInputChange} className="w-full h-[56px] px-4 bg-transparent text-[#E6E6E6] rounded-[4px] border border-[#A9ADB1] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]" required>
              <option value="" className="bg-[#05060F]">e.g., 1-3 deals</option>
              {dealsPerYear.map(deals => <option key={deals} value={deals} className="bg-[#05060F]">{deals}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A9ADB1] pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-[#E6E6E6] font-semibold text-sm mb-2">Founder Background Preference <span className="text-red-500">*</span></label>
          <p className="text-[#A9ADB1] text-sm mb-4">Select preferred founder profile</p>
          <div className="relative">
            <select name="founderBackgroundPreference" value={formData.founderBackgroundPreference} onChange={handleInputChange} className="w-full h-[56px] px-4 bg-transparent text-[#E6E6E6] rounded-[4px] border border-[#A9ADB1] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]" required>
              <option value="" className="bg-[#05060F]">Select your preference</option>
              {founderBackgrounds.map(bg => <option key={bg} value={bg} className="bg-[#05060F]">{bg}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A9ADB1] pointer-events-none" />
          </div>
        </div>
        <div className="flex justify-between items-center pt-8">
          <button type="button" onClick={onBack} className="text-[#A9ADB1] font-semibold hover:text-white transition-colors">Back</button>
          <button type="submit" className="w-[200px] h-[48px] bg-[#3262FF] hover:bg-blue-600 text-white font-semibold rounded-[12px] transition-colors">Continue</button>
        </div>
      </form>
    </div>
  );
};

// Step 3: Upload Document Form
const UploadDocumentForm: React.FC<UploadDocumentFormProps> = ({
  onUpload,
  onLinkUpload,
  onBack,
  handleFinishOnboarding, // This prop is now used to trigger the final step
}) => {
  const [proofFiles, setProofFiles] = useState<File[]>([]);
  const [additionalFiles, setAdditionalFiles] = useState<File[]>([]);
  const [proofLink, setProofLink] = useState<string>("");
  const [additionalLink, setAdditionalLink] = useState<string>("");
  const [linkError, setLinkError] = useState<string>("");
  const [proofLinkError, setProofLinkError] = useState<string>("");
  const [additionalLinkError, setAdditionalLinkError] = useState<string>("");

  const [showProofLinkInput, setShowProofLinkInput] = useState(false);
  const [showAdditionalLinkInput, setShowAdditionalLinkInput] = useState(false);
  const [proofError, setProofError] = useState<string>("");
  const [additionalError, setAdditionalError] = useState<string>("");

  const validateDriveLink = (link: string): boolean => {
    const isGoogleDrive = /https?:\/\/(drive\.google\.com\/file\/d\/|drive\.google\.com\/open\?id=)/.test(link);
    const isPublic = /usp=sharing|export=download/.test(link);
    return isGoogleDrive && isPublic;
  };

  const validateAndSubmitLink = (link: string, type: "proof" | "additional") => {
    const isValid = validateDriveLink(link);
    if (!isValid) {
      if (type === "proof") {
        setProofLinkError("Please paste a public Google Drive link (ends with 'sharing' or has 'export=download').");
      } else {
        setAdditionalLinkError("Please paste a public Google Drive link (ends with 'sharing' or has 'export=download').");
      }
      return;
    }

    if (type === "proof") {
      setProofLinkError("");
    } else {
      setAdditionalLinkError("");
    }

    if (typeof onLinkUpload === 'function') {
      onLinkUpload(type, link);
    } else {
      console.error("Error: onLinkUpload prop is not a function. Please ensure it's passed from the parent component.");
    }
  };

  const {
    getRootProps: getProofRootProps,
    getInputProps: getProofInputProps,
    isDragActive: isProofActive,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (proofFiles.length + acceptedFiles.length > 5) {
        setProofError("Maximum 5 files allowed. Use Drive link for more.");
        return;
      }
      const updated = [...proofFiles, ...acceptedFiles];
      setProofFiles(updated);
      onUpload(updated);
      setProofError("");
    },
    accept: {
      "application/pdf": [],
      "application/vnd.ms-powerpoint": [],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": [],
    },
    maxSize: 10 * 1024 * 1024,
  });

  const {
    getRootProps: getAdditionalRootProps,
    getInputProps: getAdditionalInputProps,
    isDragActive: isAdditionalActive,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (additionalFiles.length + acceptedFiles.length > 5) {
        setAdditionalError("Maximum 5 files allowed. Use Drive link for more.");
        return;
      }
      const updated = [...additionalFiles, ...acceptedFiles];
      setAdditionalFiles(updated);
      onUpload(updated);
      setAdditionalError("");
    },
    accept: {
      "application/pdf": [],
      "application/vnd.ms-powerpoint": [],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": [],
    },
    maxSize: 10 * 1024 * 1024,
  });

  // Changed handleSubmit to call handleFinishOnboarding
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    let anyLinkInvalid = false;

    if (proofLink) {
      const isValid = validateDriveLink(proofLink);
      if (!isValid) {
        setProofLinkError("Please paste a public Google Drive link (ends with 'sharing' or has 'export=download').");
        anyLinkInvalid = true;
      } else {
        setProofLinkError("");
      }
    }

    if (additionalLink) {
      const isValid = validateDriveLink(additionalLink);
      if (!isValid) {
        setAdditionalLinkError("Please paste a public Google Drive link (ends with 'sharing' or has 'export=download').");
        anyLinkInvalid = true;
      } else {
        setAdditionalLinkError("");
      }
    }

    if (anyLinkInvalid) {
      setLinkError("Please correct the invalid link(s) before continuing.");
      return;
    }

    setLinkError("");
    // Call the prop to signal completion to the parent App component
    if (handleFinishOnboarding) {
      handleFinishOnboarding();
    }
  };

  return (
    // Removed max-w-[832px] and mx-auto to allow it to take more space
    <div className="w-full px-4 py-16 sm:py-24 lg:py-32 text-white">
      <h1 className="text-4xl font-bold mb-12 text-[#E6E6E6]">Upload Document</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[64px] w-full"> {/* Added form tag here */}
        {/* Proof Section */}
        
        <div>
          <h2 className="text-sm font-semibold text-[#E6E6E6]">
            Proof of funds <span className="text-red-500">*</span>
          </h2>
          <p className="text-sm text-[#A9ADB1] mb-4">
          Upload recent financial documents to verify investment capacity
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
              Drag & Drop files here |{" "}
              
              <span
                  className="underline cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    document.querySelector<HTMLInputElement>("#proofInput")?.click();
                  }}
              >
                  Click to Upload
              </span>
              {" | "}
              <span
                  className="underline cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowProofLinkInput(!showProofLinkInput);
                  }}
              >
                  Add Link
              </span>

            </p>
            <p className="text-[#A9ADB1] text-sm">
              Accepted formats: PDF, PPT, PPTX • Max 10MB
            </p>
          </div>

          {showProofLinkInput && (
            <div className="mt-4 w-full">
              <input
                type="url"
                placeholder="Paste your public Google Drive link"
                className="w-full bg-transparent border border-[#303030] rounded-md p-3 text-sm text-[#E6E6E6] placeholder-[#555]"
                value={proofLink}
                onChange={(e) => setProofLink(e.target.value)}
                onBlur={() => validateAndSubmitLink(proofLink, "proof")}
              />
              
              {proofLinkError && (
                  <p className="text-red-500 text-xs mt-1">{proofLinkError}</p>
              )}

            </div>
          )}

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

        {/* Additional Documents */}
        <div className="mt-16">
          <h2 className="text-sm font-semibold text-[#E6E6E6]">
            Additional documents
          </h2>
          <p className="text-sm text-[#A9ADB1] mb-4">
            Upload additional documents to strengthen your profile
          </p>

          <div
            {...getAdditionalRootProps()}
            className={`border-2 border-dashed border-[#303030] rounded-md px-6 py-6 text-center flex flex-col items-center gap-3 cursor-pointer transition ${
              isAdditionalActive ? "bg-[#1e1e1e]" : "bg-transparent"
            }`}
          >
            <input {...getAdditionalInputProps()} />
            <FileUp size={24} className="text-[#A9ADB1]" />
            <p className="text-[#A9ADB1] text-sm">
              Drag & Drop files here |{" "}
              
              <span
                  className="underline cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    getAdditionalInputProps().ref?.current?.click();
                  }}
              >
                  Click to Upload
              </span>
              {" | "}
              <span
                  className="underline cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAdditionalLinkInput(!showAdditionalLinkInput);
                  }}
              >
                  Add Link
              </span>

            </p>
            <p className="text-[#A9ADB1] text-sm">
              Accepted formats: PDF, PPT, PPTX • Max 10MB
            </p>
          </div>

          {showAdditionalLinkInput && (
            <div className="mt-4 w-full">
              <input
                type="url"
                placeholder="Paste your public Google Drive link"
                className="w-full bg-transparent border border-[#303030] rounded-md p-3 text-sm text-[#E6E6E6] placeholder-[#555]"
                value={additionalLink}
                onChange={(e) => setAdditionalLink(e.target.value)}
                onBlur={() => validateAndSubmitLink(additionalLink, "additional")}
              />
              
              {additionalLinkError && (
                  <p className="text-red-500 text-xs mt-1">{additionalLinkError}</p>
              )}

            </div>
          )}

          {additionalFiles.length > 0 && (
            <ul className="mt-4 space-y-2 text-sm text-[#A9ADB1]">
              {additionalFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center"
                >
                  {file.name}
                  <button
                    onClick={() => {
                      const updated = additionalFiles.filter((_, i) => i !== index);
                      setAdditionalFiles(updated);
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
        {proofError && <p className="text-red-500 text-xs mt-1">{proofError}</p>}
        {additionalError && <p className="text-red-500 text-xs mt-1">{additionalError}</p>}
        {linkError && <p className="text-red-500 text-xs mt-1">{linkError}</p>}

        {/* Buttons */}
        <div className="flex justify-between items-center pt-12">
          <button
            type="button"
            onClick={onBack}
            className="text-[#A9ADB1] font-semibold hover:text-white transition-colors"
          >
            Back
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <button
              type="submit"
              onClick={handleSubmit} // This button will now trigger the form's onSubmit
              className="w-[200px] h-[48px] bg-[#3262FF] hover:bg-blue-600 text-white font-semibold rounded-[12px] transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// --- Main StartupProfileForm Component ---
interface StartupProfileFormProps {
  onCompleteInvestorFlow: () => void; // Prop to signal completion to App.tsx
  onBackInvestorFlow: () => void; // Prop to go back to UserConfirmation from App.tsx
}

const StartupProfileForm: React.FC<StartupProfileFormProps> = ({ onCompleteInvestorFlow, onBackInvestorFlow }) => {
  // Define the steps for the onboarding process within StartupProfileForm
  const onboardingSteps = [
    { id: 'investorProfile', title: 'Investor Profile' },
    { id: 'investmentProfile', title: 'Investment Profile' },
    { id: 'uploadDocument', title: 'Upload Document' },
  ];

  // State to track the current step and store all form data
  const [currentStep, setCurrentStep] = useState(onboardingSteps[0].id);
  const [allData, setAllData] = useState({});

  // Function to handle moving to the next step within StartupProfileForm
  const handleNextInternal = (data: any) => {
    const updatedData = { ...allData, [currentStep]: data };
    setAllData(updatedData);

    const currentIndex = onboardingSteps.findIndex(step => step.id === currentStep);
    if (currentIndex < onboardingSteps.length - 1) {
      setCurrentStep(onboardingSteps[currentIndex + 1].id);
    } else {
      // On the last step (uploadDocument), call the prop to signal completion to App.tsx
      console.log("StartupProfileForm: All investor steps complete. Attempting to call onCompleteInvestorFlow. Type:", typeof onCompleteInvestorFlow);
      if (typeof onCompleteInvestorFlow === 'function') {
        onCompleteInvestorFlow();
      } else {
        console.error("Error: onCompleteInvestorFlow is not a function or is undefined. Please check App.tsx props.");
      }
    }
  };

  // Function to handle moving to the previous step within StartupProfileForm
  const handleBackInternal = () => {
    const currentIndex = onboardingSteps.findIndex(step => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(onboardingSteps[currentIndex - 1].id);
    } else {
      // If on the first step, go back to UserConfirmation
      console.log("StartupProfileForm: Going back from first step. Attempting to call onBackInvestorFlow. Type:", typeof onBackInvestorFlow);
      if (typeof onBackInvestorFlow === 'function') {
        onBackInvestorFlow();
      } else {
        console.error("Error: onBackInvestorFlow is not a function or is undefined. Please check App.tsx props.");
      }
    }
  };

  // Renders the correct form component based on the current step
  const renderCurrentStep = () => { // Moved this function definition here
    switch (currentStep) {
      case 'investorProfile':
        return <InvestorProfileForm onNext={handleNextInternal} onBack={handleBackInternal} />;
      case 'investmentProfile':
        return <InvestmentProfileForm onNext={handleNextInternal} onBack={handleBackInternal} />;
      case 'uploadDocument':
        const handleUpload = (files: File[]) => {
            console.log("Files uploaded from UploadDocumentForm:", files);
            // Implement your file upload logic here (e.g., send to backend)
        };
        const handleLinkUpload = (type: "proof" | "additional", link: string) => {
            console.log(`Link (${type}) uploaded from UploadDocumentForm:`, link);
            // Implement your link upload logic here (e.g., send to backend)
        };
        // This handleFinishOnboarding will trigger handleNextInternal for the final step
        const handleFinishOnboarding = () => {
            console.log("UploadDocumentForm: Finishing onboarding within StartupProfileForm.");
            handleNextInternal({ status: 'completed' });
        };
        return (
            <UploadDocumentForm
                onNext={handleNextInternal} // This onNext is for moving to the *next* step in the App's flow
                onBack={handleBackInternal}
                onUpload={handleUpload}
                onLinkUpload={handleLinkUpload}
                handleFinishOnboarding={handleFinishOnboarding} // This is the final action for this form
            />
        );
      default:
        return <InvestorProfileForm onNext={handleNextInternal} onBack={handleBackInternal} />;
    }
  };

  return (
     <div className="min-h-screen bg-[#05060F] text-white flex font-sans">
    
      {/* Background Gradient Ellipse (Main Page Background) */}
      <div className="absolute top-0 left-0 w-[721px] h-[721px] transform -translate-x-1/2 -translate-y-1/4 pointer-events-none">
        <div className="w-full h-full bg-radial-gradient opacity-50 blur-[47px]"></div>
      </div>

      {/* Sidebar - Fixed positioning with full gradient background */}
      <aside
        className="fixed rounded-xl z-10 w-[352px] h-screen left-4 top-4 overflow-y-auto p-6" // Added p-6 for padding
        style={{
           background: 'radial-gradient(195.32% 112.27% at 50% 80%, #000000 30.77%, #0C0C4A 44.28%, #0606A9 58.97%, #0000FF 75.08%, #9898FF 91.44%)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: '100% 100%', // Make the gradient cover the entire height
        }}
      >
        {/* Onboarding Steps Title */}
        <div className="mb-8 mt-16"> {/* Adjusted margin for spacing within p-6 */}
          <h2
            className="font-neulis-sans font-semibold text-2xl leading-8 tracking-tightest text-[#E6E6E6]"
            style={{
              fontFamily: 'Neulis Sans',
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

        {/* Stepper Container (Frame 39440) - No background here, it will inherit from aside */}
        <div
          style={{
            width: '250px', // Increased width to accommodate longer titles
            height: '225px', // Original height for stepper content
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '12px',
          }}
        >
          <OnboardingStepper steps={onboardingSteps} currentStep={currentStep} />
        </div>
      </aside>

      {/* Main Content - Now uses flex to allow forms to expand */}
      {/* Removed items-center to allow forms to take full width within their container */}
      <main className="flex-1 overflow-y-auto pl-[424px] flex flex-col min-h-screen"> {/* Increased pl for more gap */}
        {renderCurrentStep()}
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
      `}</style>
    </div>
  );
};

export default StartupProfileForm;

