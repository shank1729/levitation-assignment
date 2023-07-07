import React, { useState } from 'react'

export default function MultiFileUpload({ formData, setFormData}) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileChange = (e) => {
     setSelectedFiles([...e.target.files]);

     setFormData({...formData,multi_file: e.target.files})
  };

  // const fd = new FormData();
  // selectedFiles.forEach((file) => {
  //    fd.append('files', file);
  // });
  
  return (
    <div className='flex justify-center'><input type="file" multiple onChange={handleFileChange} /></div>
  )
}
