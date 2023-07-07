import React, { useState } from 'react'

export default function FileUpload({formData, setFormData}) {
  const [file, setFile] = useState()
  const handleChange = (event) => {
    console.log(event.target.files[0])
    setFile(event.target.files[0])
    // setFormData({...formData, single_file: event.target.files[0] })
    // const fd = new FormData();
    // fd.append("single_file",file);
    setFormData({...formData,single_file: event.target.files})
    // console.log(file);
  }
  return (
    <div className='flex justify-center'><input type="file" onChange={handleChange}
    /></div>
  )
}
