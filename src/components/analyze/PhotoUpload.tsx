import { Camera, Upload } from "lucide-react";

interface PhotoUploadProps {
  onFileSelected: (file: File) => void;
}

const PhotoUpload = ({ onFileSelected }: PhotoUploadProps) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) onFileSelected(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileSelected(file);
  };

  return (
    <label
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="block cursor-pointer"
    >
      <div className="border-2 border-dashed border-stone-300 rounded-2xl p-12 md:p-16 text-center hover:border-[#5B4FD6] hover:bg-[#EDEAFC]/30 transition-all duration-200">
        <div className="w-12 h-12 rounded-full bg-[#EDEAFC] flex items-center justify-center mx-auto">
          <Camera size={24} className="text-[#5B4FD6]" />
        </div>
        <p className="text-stone-700 font-medium text-lg mt-4">Drop your item photo here or click to upload</p>
        <p className="text-stone-400 text-sm mt-2 flex items-center justify-center gap-1">
          <Upload size={14} /> JPG, PNG up to 10MB
        </p>
      </div>
      <input type="file" accept="image/*" className="hidden" onChange={handleChange} />
    </label>
  );
};

export default PhotoUpload;
