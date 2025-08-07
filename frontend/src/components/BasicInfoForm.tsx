

// import React, { useState } from 'react';
// import profileIllustration from '../assets/profileIllustration.png';

// const CompleteYourProfile = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneCode: '+91',
//     phoneNumber: '',
//     country: '',
//     linkedin: '',
//   });

//   // const handleChange = (field, value) => {
//     const handleChange = (field: string, value: string) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const isFormValid = Object.values(formData).every((val) => val.trim() !== '');

//   const inputStyle = {
//     width: '100%',
//     height: '48px',
//     background: '#1a1a2e',
//     border: '1px solid #303030',
//     borderRadius: '8px',
//     padding: '0 16px',
//     color: '#fff',
//     fontSize: '14px',
//   };

//   const labelStyle = {
//     color: '#E6E6E6',
//     fontSize: '16px',
//     fontWeight: 500,
//     display: 'flex',
//     gap: '4px',
//     alignItems: 'center',
//   };

//   const requiredMark = <span style={{ color: 'red' }}>*</span>;

//   return (
//     <div className="relative w-[1440px] h-[1024px] bg-[#05060F] mx-auto">
//       {/* Left Side */}
//       <div
//         className="absolute w-[352px] h-[992px] left-[16px] top-1/2"
//         style={{
//           transform: 'translateY(-50%)',
//           background:
//             'radial-gradient(195.32% 112.27% at 50% 100%, #000000 30.77%, #0C0C4A 44.28%, #0606A9 58.97%, #0000FF 75.08%, #9898FF 91.44%), #12131A',
//           borderRadius: '12px',
//         }}
//       >
//         <div
//           style={{
//             position: 'absolute',
//             width: '252px',
//             height: '32px',
//             left: '66px',
//             top: '120px',
//             fontFamily: 'Neulis Sans',
//             fontWeight: 600,
//             fontSize: '24px',
//             color: '#E6E6E6',
//           }}
//         >
//           Complete Your Profile
//         </div>
//         <img
//           src={profileIllustration}
//           alt="Complete Profile Illustration"
//           style={{
//             position: 'absolute',
//             width: '320px',
//             height: '320px',
//             left: '32px',
//             top: '192px',
//             objectFit: 'cover',
//             borderRadius: '8px',
//           }}
//         />
//       </div>

//       {/* Right Heading */}
//       <div
//         style={{
//           position: 'absolute',
//           width: '385px',
//           height: '32px',
//           left: '488px',
//           top: '120px',
//           fontFamily: 'Neulis Sans',
//           fontWeight: 600,
//           fontSize: '24px',
//           color: '#E6E6E6',
//         }}
//       >
//         Please, Fill in the Required Details
//       </div>

//       {/* Form */}
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           gap: '32px',
//           position: 'absolute',
//           width: '832px',
//           left: '488px',
//           top: '192px',
//         }}
//       >
//         {/* Full Name */}
//         <div style={{ display: 'flex', gap: '32px', width: '100%' }}>
//           <div style={{ flex: 1 }}>
//             <label style={labelStyle}>First Name {requiredMark}</label>
//             <input
//               type="text"
//               placeholder="Enter first name"
//               value={formData.firstName}
//               onChange={(e) => handleChange('firstName', e.target.value)}
//               style={inputStyle}
//               required
//             />
//           </div>
//           <div style={{ flex: 1 }}>
//             <label style={labelStyle}>Last Name {requiredMark}</label>
//             <input
//               type="text"
//               placeholder="Enter last name"
//               value={formData.lastName}
//               onChange={(e) => handleChange('lastName', e.target.value)}
//               style={inputStyle}
//               required
//             />
//           </div>
//         </div>

//         {/* Phone Number */}
//         <div style={{ width: '100%' }}>
//           <label style={labelStyle}>Phone Number {requiredMark}</label>
//           <div style={{ display: 'flex', gap: '16px' }}>
//             <div style={{ width: '100px' }}>
//               <select
//                 value={formData.phoneCode}
//                 onChange={(e) => handleChange('phoneCode', e.target.value)}
//                 style={{
//                   ...inputStyle,
//                   paddingLeft: '12px',
//                   appearance: 'none',
//                 }}
//               >
//                 <option value="+91">+91</option>
//                 <option value="+1">+1</option>
//                 <option value="+44">+44</option>
//               </select>
//             </div>
//             <div style={{ flex: 1 }}>
//               <input
//                 type="tel"
//                 placeholder="Enter phone number"
//                 value={formData.phoneNumber}
//                 onChange={(e) => handleChange('phoneNumber', e.target.value)}
//                 style={inputStyle}
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         {/* Country */}
//         <div style={{ width: '100%' }}>
//           <label style={labelStyle}>Country {requiredMark}</label>
//           <input
//             type="text"
//             placeholder="Enter your country"
//             value={formData.country}
//             onChange={(e) => handleChange('country', e.target.value)}
//             style={inputStyle}
//             required
//           />
//         </div>

//         {/* LinkedIn */}
//         <div style={{ width: '100%' }}>
//           <label style={labelStyle}>LinkedIn Profile {requiredMark}</label>
//           <input
//             type="text"
//             placeholder="Enter LinkedIn profile url"
//             value={formData.linkedin}
//             onChange={(e) => handleChange('linkedin', e.target.value)}
//             style={inputStyle}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div
//   style={{
//     display: 'flex',
//     justifyContent: 'flex-end', // pushes button to the right
//     width: '100%', // or set fixed width if needed
//     marginTop: '16px',
//   }}
// >
//         <button
//            disabled={!isFormValid}
//           style={{
//             marginTop: '16px',
//             backgroundColor:  '#3B82F6',
//             color: '#fff',
//             padding: '12px 24px',
//             borderRadius: '8px',
//             border: 'none',
//             fontWeight: 600,
//             cursor: isFormValid ? 'pointer' : 'not-allowed',
          
//           }}
//         >
//           Complete profile setup
//         </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompleteYourProfile;
// import React, { useState } from 'react';
// // Removed ChevronDown, Globe, Phone, Link as LinkIcon from lucide-react
// // import { ChevronDown, Globe, Phone, Link as LinkIcon } from 'lucide-react'; 
// import profileIllustration from '../assets/profileIllustration.png'; // Please ensure this file exists at src/assets/profileIllustration.png

// interface BasicInfoFormProps {
//   onNext: (data?: any) => void;
//   onBack: () => void; // Added onBack prop for consistency, though not directly used in this snippet's buttons
// }

// const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ onNext, onBack }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneCode: '+91',
//     phoneNumber: '',
//     country: '',
//     otherCountry: '', // For when 'Other' is selected in country dropdown
//     linkedin: '', // Renamed from websiteUrl to linkedin as per user's code
//   });

//   const [errors, setErrors] = useState({
//     phoneNumber: '',
//     linkedin: '', // Error for linkedin URL
//   });

//   // Comprehensive list of countries for the dropdown
//   const countries = [
//     '', // Default empty option
//     'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
//     'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
//     'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
//     'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Brazzaville)', 'Congo (Kinshasa)',
//     'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador',
//     'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
//     'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
//     'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
//     'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea (North)', 'Korea (South)',
//     'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
//     'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
//     'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
//     'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway',
//     'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
//     'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
//     'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
//     'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
//     'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
//     'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
//     'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe',
//     'Other' // Added 'Other' option
//   ];


//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));

//     // Clear errors on input change
//     setErrors(prev => ({ ...prev, [name]: '' }));
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { phoneNumber: '', linkedin: '' };

//     // Basic required field validation
//     if (!formData.firstName.trim()) isValid = false;
//     if (!formData.lastName.trim()) isValid = false;
//     if (!formData.phoneNumber.trim()) isValid = false;
//     if (!formData.country.trim()) isValid = false;
//     if (formData.country === 'Other' && !formData.otherCountry.trim()) isValid = false;
//     if (!formData.linkedin.trim()) isValid = false;


//     // Phone number validation (digits only)
//     if (formData.phoneNumber && !/^\d+$/.test(formData.phoneNumber)) {
//       newErrors.phoneNumber = 'Phone number must contain only digits.';
//       isValid = false;
//     }

//     // LinkedIn URL validation (basic check for http/https and linkedin.com)
//     if (formData.linkedin) {
//       const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/i;
//       if (!linkedinRegex.test(formData.linkedin)) {
//         newErrors.linkedin = 'Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/yourprofile).';
//         isValid = false;
//       }
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent default form submission
//     if (validateForm()) {
//       console.log("Basic Info Form submitted!", formData);
//       onNext(formData); // Call onNext to proceed to the next step
//     } else {
//       console.log("Form has validation errors.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#05060F] text-white flex flex-col lg:flex-row font-sans">
//       {/* Left Side - Illustration and Title */}
//       <div className="w-full lg:w-[352px] lg:min-h-screen p-4 lg:p-0 flex flex-col items-center lg:items-start lg:justify-center relative
//                     bg-[radial-gradient(195.32%_112.27%_at_50%_100%,_#000000_30.77%,_#0C0C4A_44.28%,_#0606A9_58.97%,_#0000FF_75.08%,_#9898FF_91.44%)]
//                     lg:rounded-r-xl lg:rounded-l-none rounded-xl mx-auto lg:mx-0 lg:my-0 my-4">
//         <div className="lg:absolute lg:left-[66px] lg:top-[120px] mt-8 lg:mt-0 text-center lg:text-left">
//           <h2 className="font-neulis-sans font-semibold text-2xl text-[#E6E6E6]">
//             Complete Your Profile
//           </h2>
//         </div>
//         <img
//           src={profileIllustration} // Using the imported image
//           alt="Complete Profile Illustration"
//           className="w-40 h-40 object-cover rounded-lg mt-8 lg:mt-0 lg:absolute lg:left-[32px] lg:top-[192px]" // Changed size to w-40 h-40
//         />
//       </div>

//       {/* Right Side - Form */}
//       <div className="flex-1 p-4 lg:p-16 flex flex-col items-center lg:items-start">
//         <h1 className="font-neulis-sans font-semibold text-2xl text-[#E6E6E6] mb-8 lg:mb-12 text-center lg:text-left">
//           Please, Fill in the Required Details
//         </h1>

//         <form onSubmit={handleSubmit} className="w-full max-w-[832px] space-y-8">
//           {/* Full Name */}
//           <div className="flex flex-col sm:flex-row gap-8 w-full">
//             <div className="flex-1">
//               <label htmlFor="firstName" className="block text-[#E6E6E6] font-semibold text-sm mb-2">First Name <span className="text-red-500">*</span></label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 placeholder="Enter first name"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label htmlFor="lastName" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Last Name <span className="text-red-500">*</span></label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Enter last name"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
//                 required
//               />
//             </div>
//           </div>

//           {/* Phone Number */}
//           <div className="w-full">
//             <label htmlFor="phoneNumber" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Phone Number <span className="text-red-500">*</span></label>
//             <div className="flex gap-4">
//               <div className="w-24 relative"> {/* Fixed width for country code dropdown */}
//                 <select
//                   id="phoneCode"
//                   name="phoneCode"
//                   value={formData.phoneCode}
//                   onChange={handleInputChange}
//                   className="w-full h-[48px] pl-3 pr-8 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
//                 >
//                   <option value="+91" className="bg-[#05060F]">+91</option>
//                   <option value="+1" className="bg-[#05060F]">+1</option>
//                   <option value="+44" className="bg-[#05060F]">+44</option>
//                   {/* Add more phone codes as needed */}
//                 </select>
//                 {/* Removed ChevronDown icon */}
//               </div>
//               <div className="flex-1 relative">
//                 {/* Removed Phone icon */}
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   placeholder="Enter phone number"
//                   value={formData.phoneNumber}
//                   onChange={handleInputChange}
//                   pattern="[0-9]*" // HTML5 pattern for digits only
//                   inputMode="numeric" // Suggests numeric keyboard on mobile
//                   className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]" // Adjusted padding
//                   required
//                 />
//               </div>
//             </div>
//             {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
//           </div>

//           {/* Country */}
//           <div className="w-full">
//             <label htmlFor="country" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Country <span className="text-red-500">*</span></label>
//             <div className="relative">
//               {/* Removed Globe icon */}
//               <select
//                 id="country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]" // Adjusted padding
//                 required
//               >
//                 {countries.map(country => (
//                   <option key={country || 'select'} value={country} className="bg-[#05060F]">
//                     {country || 'Select your country'}
//                   </option>
//                 ))}
//               </select>
//               {/* Removed ChevronDown icon */}
//             </div>
//             {formData.country === 'Other' && (
//               <div className="mt-4">
//                 <label htmlFor="otherCountry" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Please specify country:</label>
//                 <input
//                   type="text"
//                   id="otherCountry"
//                   name="otherCountry"
//                   value={formData.otherCountry}
//                   onChange={handleInputChange}
//                   placeholder="Enter country name"
//                   className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
//                   required
//                 />
//               </div>
//             )}
//           </div>

//           {/* LinkedIn Profile */}
//           <div className="w-full">
//             <label htmlFor="linkedin" className="block text-[#E6E6E6] font-semibold text-sm mb-2">LinkedIn Profile <span className="text-red-500">*</span></label>
//             <div className="relative">
//               {/* Removed LinkIcon icon */}
//               <input
//                 type="url" // Use 'url' type for website links
//                 id="linkedin"
//                 name="linkedin"
//                 value={formData.linkedin}
//                 onChange={handleInputChange}
//                 placeholder="Enter LinkedIn profile URL (e.g., https://linkedin.com/in/yourprofile)"
//                 className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]" // Adjusted padding
//                 required
//               />
//             </div>
//             {errors.linkedin && <p className="text-red-500 text-sm mt-1">{errors.linkedin}</p>}
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end w-full pt-4">
//             <button
//               type="submit"
//               // The button is enabled only if all required fields are filled and validation passes
//               disabled={
//                 !formData.firstName.trim() ||
//                 !formData.lastName.trim() ||
//                 !formData.phoneNumber.trim() ||
//                 !formData.country.trim() ||
//                 (formData.country === 'Other' && !formData.otherCountry.trim()) ||
//                 !formData.linkedin.trim() ||
//                 !!errors.phoneNumber || // Check if there's an error message
//                 !!errors.linkedin
//               }
//               className={`w-[200px] h-[48px] bg-[#3B82F6] text-white font-semibold rounded-lg transition-colors
//                          ${
//                            (
//                              formData.firstName.trim() &&
//                              formData.lastName.trim() &&
//                              formData.phoneNumber.trim() &&
//                              formData.country.trim() &&
//                              (formData.country !== 'Other' || formData.otherCountry.trim()) &&
//                              formData.linkedin.trim() &&
//                              !errors.phoneNumber &&
//                              !errors.linkedin
//                            )
//                              ? 'hover:bg-blue-700 cursor-pointer'
//                              : 'opacity-50 cursor-not-allowed'
//                          }`}
//             >
//               Complete profile setup
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BasicInfoForm;
import React, { useState } from 'react';
// Removed ChevronDown, Globe, Phone, Link as LinkIcon from lucide-react
// import { ChevronDown, Globe, Phone, Link as LinkIcon } from 'lucide-react'; 
import profileIllustration from '../assets/profileIllustration.png'; // Please ensure this file exists at src/assets/profileIllustration.png

interface BasicInfoFormProps {
  onNext: (data?: any) => void;
  onBack: () => void; // Added onBack prop for consistency, though not directly used in this snippet's buttons
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneCode: '+91',
    phoneNumber: '',
    country: '',
    otherCountry: '', // For when 'Other' is selected in country dropdown
    city: '', // New: City field
    state: '', // New: State field
    linkedin: '', // Renamed from websiteUrl to linkedin as per user's code
  });

  const [errors, setErrors] = useState({
    phoneNumber: '',
    linkedin: '', // Error for linkedin URL
  });

  // Comprehensive list of countries for the dropdown
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


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear errors on input change
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { phoneNumber: '', linkedin: '' };

    // Basic required field validation
    if (!formData.firstName.trim()) isValid = false;
    if (!formData.lastName.trim()) isValid = false;
    if (!formData.phoneNumber.trim()) isValid = false;
    if (!formData.country.trim()) isValid = false;
    if (formData.country === 'Other' && !formData.otherCountry.trim()) isValid = false;
    if (!formData.city.trim()) isValid = false; // New: Validate city
    if (!formData.state.trim()) isValid = false; // New: Validate state
    if (!formData.linkedin.trim()) isValid = false;


    // Phone number validation (digits only)
    if (formData.phoneNumber && !/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must contain only digits.';
      isValid = false;
    }

    // LinkedIn URL validation (basic check for http/https and linkedin.com)
    if (formData.linkedin) {
      const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/i;
      if (!linkedinRegex.test(formData.linkedin)) {
        newErrors.linkedin = 'Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/yourprofile).';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      console.log("Basic Info Form submitted!", formData);
      onNext(formData); // Call onNext to proceed to the next step
    } else {
      console.log("Form has validation errors.");
    }
  };

  return (
    <div className="min-h-screen bg-[#05060F] text-white flex flex-col lg:flex-row font-sans">
      {/* Left Side - Illustration and Title */}
      <div className="w-full lg:w-[352px] lg:min-h-screen p-4 lg:p-0 flex flex-col items-center lg:items-start lg:justify-center relative
                    bg-[radial-gradient(195.32%_112.27%_at_50%_100%,_#000000_30.77%,_#0C0C4A_44.28%,_#0606A9_58.97%,_#0000FF_75.08%,_#9898FF_91.44%)]
                    lg:rounded-r-xl lg:rounded-l-none rounded-xl mx-auto lg:mx-0 lg:my-0 my-4">
        <div className="lg:absolute lg:left-[66px] lg:top-[120px] mt-8 lg:mt-0 text-center lg:text-left">
          <h2 className="font-neulis-sans font-semibold text-2xl text-[#E6E6E6]">
            Complete Your Profile
          </h2>
        </div>
        <img
          src={profileIllustration} // Using the imported image
          alt="Complete Profile Illustration"
          className="w-64 h-64 object-cover rounded-lg mt-8 lg:mt-0 lg:absolute lg:left-[32px] lg:top-[192px]" // Changed size to w-64 h-64
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 p-4 lg:p-16 flex flex-col items-center lg:items-start">
        <h1 className="font-neulis-sans font-semibold text-2xl text-[#E6E6E6] mb-8 lg:mb-12 text-center lg:text-left">
          Please, Fill in the Required Details
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-[832px] space-y-8">
          {/* Full Name */}
          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-[#E6E6E6] font-semibold text-sm mb-2">First Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Last Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="w-full">
            <label htmlFor="phoneNumber" className="block text-[#E6E6E6] font-semibold text-sm mb-2">Phone Number <span className="text-red-500">*</span></label>
            <div className="flex gap-4">
              <div className="w-24 relative"> {/* Fixed width for country code dropdown */}
                <select
                  id="phoneCode"
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleInputChange}
                  className="w-full h-[48px] pl-3 pr-8 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#3262FF]"
                >
                  <option value="+91" className="bg-[#05060F]">+91</option>
                  <option value="+1" className="bg-[#05060F]">+1</option>
                  <option value="+44" className="bg-[#05060F]">+44</option>
                  {/* Add more phone codes as needed */}
                </select>
              </div>
              <div className="flex-1 relative">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  pattern="[0-9]*" // HTML5 pattern for digits only
                  inputMode="numeric" // Suggests numeric keyboard on mobile
                  className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]" // Adjusted padding
                  required
                />
              </div>
            </div>
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>

          {/* Country */}
          <div className="w-full">
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

          {/* LinkedIn Profile */}
          <div className="w-full">
            <label htmlFor="linkedin" className="block text-[#E6E6E6] font-semibold text-sm mb-2">LinkedIn Profile <span className="text-red-500">*</span></label>
            <div className="relative">
              <input
                type="url" // Use 'url' type for website links
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                placeholder="Enter LinkedIn profile URL (e.g., https://linkedin.com/in/yourprofile)"
                className="w-full h-[48px] px-4 bg-[#1a1a2e] border border-[#303030] rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3262FF]" // Adjusted padding
                required
              />
            </div>
            {errors.linkedin && <p className="text-red-500 text-sm mt-1">{errors.linkedin}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end w-full pt-4">
            <button
              type="submit"
              // The button is enabled only if all required fields are filled and validation passes
              disabled={
                !formData.firstName.trim() ||
                !formData.lastName.trim() ||
                !formData.phoneNumber.trim() ||
                !formData.country.trim() ||
                (formData.country === 'Other' && !formData.otherCountry.trim()) ||
                !formData.city.trim() || // New: Check city
                !formData.state.trim() || // New: Check state
                !formData.linkedin.trim() ||
                !!errors.phoneNumber || // Check if there's an error message
                !!errors.linkedin
              }
              className={`w-[200px] h-[48px] bg-[#3B82F6] text-white font-semibold rounded-lg transition-colors
                         ${
                           (
                             formData.firstName.trim() &&
                             formData.lastName.trim() &&
                             formData.phoneNumber.trim() &&
                             formData.country.trim() &&
                             (formData.country !== 'Other' || formData.otherCountry.trim()) &&
                             formData.city.trim() && // New: Check city
                             formData.state.trim() && // New: Check state
                             formData.linkedin.trim() &&
                             !errors.phoneNumber &&
                             !errors.linkedin
                           )
                             ? 'hover:bg-blue-700 cursor-pointer'
                             : 'opacity-50 cursor-not-allowed'
                         }`}
            >
              Complete profile setup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicInfoForm;
