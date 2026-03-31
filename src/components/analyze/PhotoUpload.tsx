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
      <div className="border-2 border-dashed border-border rounded-xl p-12 md:p-16 text-center hover:border-primary/50 transition-colors">
        <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
          <Camera size={24} className="text-primary" />
        </div>
        <p className="text-foreground font-medium mb-1">Drop your item photo here or click to upload</p>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          <Upload size={14} /> JPG, PNG up to 10MB
        </p>
      </div>
      <input type="file" accept="image/*" className="hidden" onChange={handleChange} />
    </label>
  );
};

export default PhotoUpload;
