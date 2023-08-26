// src/components/TrackList.tsx
import React, { useState, ChangeEvent } from 'react'; // Import ChangeEvent type

const TrackList = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // Specify the type

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => { // Add type annotation
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }
  
    const formData = new FormData();
    formData.append('file', selectedFile);
  
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        // Handle successful upload response
        const responseData = await response.json();
        console.log('File uploaded:', responseData);
      } else {
        // Handle error
        console.error('Error uploading file');
      }
    } catch (error) {
      // Handle error
      console.error('Error uploading file:', error);
    }
  };
  

  return (
    <div>
      <input type="file" accept=".mp3,.ogg,.wav" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};


export default TrackList;
