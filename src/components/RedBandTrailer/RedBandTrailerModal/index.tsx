import React from 'react';

interface RedBandTrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const RedBandTrailerModal: React.FC<RedBandTrailerModalProps> = ({ isOpen, onClose, videoUrl }) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-10 p-[40px]">
      <div className="p-8 rounded-lg w-full h-full bg-white bg-opacity-10 p-4 relative">
        <button className="absolute top-0 right-0 m-[-8px] p-4 cursor-pointer" onClick={handleClose}>
          ❌
        </button>
        <video
            controls
            width="98%"
            height="98%"
            >
            <source src={videoUrl} type="video/mp4" />
            {/* Add additional source elements for different video formats if needed */}
            Your browser does not support the video tag.
            </video>
      </div>
    </div>
  );
};

export default RedBandTrailerModal;