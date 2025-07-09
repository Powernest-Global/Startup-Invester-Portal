import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { User, Building, Upload, FileText, Check, X, AlertCircle, Info } from 'lucide-react';

interface DocumentUploadData {
  pitchDeck: File | null;
  otherDocuments: File[];
}

interface DocumentUploadFormProps {
  onNext: (data: DocumentUploadData) => void;
  onBack: () => void;
}

interface UploadedFile {
  file: File;
  id: string;
  error?: string;
}

const DocumentUploadForm: React.FC<DocumentUploadFormProps> = ({ onNext, onBack }) => {
  const [pitchDeck, setPitchDeck] = useState<UploadedFile | null>(null);
  const [otherDocuments, setOtherDocuments] = useState<UploadedFile[]>([]);
  const [errors, setErrors] = useState<{ pitchDeck?: string; otherDocuments?: string }>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { handleSubmit } = useForm<DocumentUploadData>();

  const acceptedFileTypes = {
    'application/pdf': ['.pdf'],
    'image/jpeg': ['.jpg', '.jpeg'],
    'image/png': ['.png'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
  };

  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const validateFile = (file: File): string | null => {
    // Check file type
    const allowedTypes = Object.keys(acceptedFileTypes);
    if (!allowedTypes.includes(file.type)) {
      return 'Invalid file type. Please upload PDF, JPG, PNG, or DOCX files only.';
    }

    // Check file size
    if (file.size > maxFileSize) {
      return 'File size exceeds 10MB limit. Please choose a smaller file.';
    }

    return null;
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const generateFileId = () => Math.random().toString(36).substr(2, 9);

  // Pitch Deck Dropzone
  const onPitchDeckDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      const error = rejectedFiles[0].errors[0]?.message || 'File rejected';
      setErrors(prev => ({ ...prev, pitchDeck: error }));
      showToast(error);
      return;
    }

    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const validationError = validateFile(file);
      
      if (validationError) {
        setErrors(prev => ({ ...prev, pitchDeck: validationError }));
        showToast(validationError);
        return;
      }

      setPitchDeck({
        file,
        id: generateFileId(),
      });
      setErrors(prev => ({ ...prev, pitchDeck: undefined }));
    }
  }, []);

  const pitchDeckDropzone = useDropzone({
    onDrop: onPitchDeckDrop,
    accept: acceptedFileTypes,
    maxSize: maxFileSize,
    multiple: false,
  });

  // Other Documents Dropzone
  const onOtherDocumentsDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      const error = 'Some files were rejected. Please check file types and sizes.';
      setErrors(prev => ({ ...prev, otherDocuments: error }));
      showToast(error);
    }

    const validFiles: UploadedFile[] = [];
    const invalidFiles: string[] = [];

    acceptedFiles.forEach(file => {
      const validationError = validateFile(file);
      if (validationError) {
        invalidFiles.push(`${file.name}: ${validationError}`);
      } else {
        validFiles.push({
          file,
          id: generateFileId(),
        });
      }
    });

    if (invalidFiles.length > 0) {
      showToast(`Some files were invalid: ${invalidFiles.join(', ')}`);
    }

    if (validFiles.length > 0) {
      setOtherDocuments(prev => [...prev, ...validFiles]);
      setErrors(prev => ({ ...prev, otherDocuments: undefined }));
    }
  }, []);

  const otherDocumentsDropzone = useDropzone({
    onDrop: onOtherDocumentsDrop,
    accept: acceptedFileTypes,
    maxSize: maxFileSize,
    multiple: true,
  });

  const removePitchDeck = () => {
    setPitchDeck(null);
  };

  const removeOtherDocument = (id: string) => {
    setOtherDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const onSubmit = () => {
    const newErrors: { pitchDeck?: string; otherDocuments?: string } = {};

    if (!pitchDeck) {
      newErrors.pitchDeck = 'Pitch deck is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast('Please upload all required documents');
      return;
    }

    const formData: DocumentUploadData = {
      pitchDeck: pitchDeck?.file || null,
      otherDocuments: otherDocuments.map(doc => doc.file),
    };

    onNext(formData);
  };

  const sidebarSteps = [
    { id: 1, title: 'Basic Info', icon: User, active: false, completed: true },
    { id: 2, title: 'Startup Profile', icon: Building, active: false, completed: true },
    { id: 3, title: 'Upload Documents', icon: Upload, active: true, completed: false },
    { id: 4, title: 'Add your Team', icon: User, active: false, completed: false },
    { id: 5, title: 'Psychological Assessment', icon: User, active: false, completed: false },
  ];

  return (
    <div className="min-h-screen bg-black flex">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-4 text-white hover:text-gray-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div className="w-[528px] h-screen bg-gray-800/5 rounded-xl p-5 m-10 mr-0">
        <div className="flex items-center mb-12">
          <img src="/image.png" alt="Power Nest Logo" className="w-10 h-10 mr-4" />
          <h1 className="text-2xl font-bold text-white">Power Nest</h1>
        </div>

        <nav className="space-y-4">
          {sidebarSteps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className={`flex items-center p-4 rounded-lg transition-colors ${
                  step.active
                    ? 'bg-blue-600/20 border border-blue-500/30'
                    : step.completed
                    ? 'bg-green-600/20 border border-green-500/30'
                    : 'text-gray-500'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  step.active 
                    ? 'bg-blue-600' 
                    : step.completed 
                    ? 'bg-green-600' 
                    : 'bg-gray-700'
                }`}>
                  {step.completed ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <IconComponent className={`w-4 h-4 ${
                      step.active ? 'text-white' : 'text-gray-400'
                    }`} />
                  )}
                </div>
                <span className={`font-medium ${
                  step.active 
                    ? 'text-white' 
                    : step.completed 
                    ? 'text-green-400' 
                    : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 pl-8">
        <div className="max-w-[898px]">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Upload Documents</h2>
            <p className="text-gray-400">
              Upload your pitch deck and any supporting documents to help investors understand your business.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Pitch Deck Upload */}
            <div className="form-group">
              <div className="flex items-center mb-2">
                <label className="block text-lg font-medium text-white mr-2">
                  Pitch Deck
                </label>
                <span className="text-sm text-gray-400">(PDF or Google Drive Link)</span>
              </div>
              
              <div
                {...pitchDeckDropzone.getRootProps()}
                className={`w-full h-[120px] bg-gray-900 rounded-xl border-2 border-dashed transition-all cursor-pointer hover:border-gray-600 hover:bg-gray-800/50 flex items-center justify-center ${
                  pitchDeckDropzone.isDragActive 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : errors.pitchDeck 
                    ? 'border-red-500' 
                    : 'border-gray-700'
                }`}
              >
                <input {...pitchDeckDropzone.getInputProps()} />
                {pitchDeck ? (
                  <div className="flex items-center justify-between w-full px-6">
                    <div className="flex items-center">
                      <FileText className="w-8 h-8 text-blue-400 mr-3" />
                      <div>
                        <p className="text-white font-medium">{pitchDeck.file.name}</p>
                        <p className="text-gray-400 text-sm">{formatFileSize(pitchDeck.file.size)}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removePitchDeck();
                      }}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-300 text-sm mb-1">
                      {pitchDeckDropzone.isDragActive 
                        ? 'Drop your pitch deck here' 
                        : 'Drag and drop or browse'
                      }
                    </p>
                    <p className="text-gray-500 text-xs">PDF, JPG, PNG, or DOCX</p>
                    <button
                      type="button"
                      className="mt-3 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      Browse
                    </button>
                  </div>
                )}
              </div>
              
              {errors.pitchDeck && (
                <p className="mt-2 text-sm text-red-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.pitchDeck}
                </p>
              )}
              
              <div className="mt-3 flex items-start text-sm text-gray-400">
                <Info className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <p>
                  Recommended: Include a pitch deck that clearly outlines your business model, market opportunity, and team.
                </p>
              </div>
            </div>

            {/* Other Documents Upload */}
            <div className="form-group">
              <div className="flex items-center mb-2">
                <label className="block text-lg font-medium text-white mr-2">
                  Other documents
                </label>
                <span className="text-sm text-gray-400">(PDF or Google Drive Link)</span>
              </div>
              
              <div
                {...otherDocumentsDropzone.getRootProps()}
                className={`w-full h-[120px] bg-gray-900 rounded-xl border-2 border-dashed transition-all cursor-pointer hover:border-gray-600 hover:bg-gray-800/50 flex items-center justify-center ${
                  otherDocumentsDropzone.isDragActive 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : errors.otherDocuments 
                    ? 'border-red-500' 
                    : 'border-gray-700'
                }`}
              >
                <input {...otherDocumentsDropzone.getInputProps()} />
                <div className="text-center">
                  <Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-300 text-sm mb-1">
                    {otherDocumentsDropzone.isDragActive 
                      ? 'Drop your documents here' 
                      : 'Drag and drop or browse'
                    }
                  </p>
                  <p className="text-gray-500 text-xs mb-2">PDF, JPG, PNG, or DOCX (max 10MB)</p>
                  <button
                    type="button"
                    className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    Browse
                  </button>
                </div>
              </div>
              
              {errors.otherDocuments && (
                <p className="mt-2 text-sm text-red-500 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.otherDocuments}
                </p>
              )}

              {/* Uploaded Other Documents List */}
              {otherDocuments.length > 0 && (
                <div className="mt-4 space-y-2">
                  {otherDocuments.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 text-blue-400 mr-3" />
                        <div>
                          <p className="text-white text-sm font-medium">{doc.file.name}</p>
                          <p className="text-gray-400 text-xs">{formatFileSize(doc.file.size)}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeOtherDocument(doc.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-3 text-sm text-gray-400">
                <p>
                  Valuation reports, incorporation certificates, cap table, previous term sheets, proof of funds (if already raised funds) etc.
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8">
              <button
                type="button"
                onClick={onBack}
                className="w-[180px] h-[52px] bg-transparent border border-gray-600 text-white rounded-xl font-medium hover:border-gray-500 hover:bg-gray-900/50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-[180px] h-[52px] bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadForm;