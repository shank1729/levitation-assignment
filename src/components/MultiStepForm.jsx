import React, { useState } from "react";
import Address from "./Address";
import BasicDetails from "./BasicDetails";
import FileUpload from "./FileUpload";
import MultiFileUpload from "./MultiFileUpload";
import GeolocationStatus from "./GeolocationStatus";
import axios from 'axios';
import Swal from "sweetalert2";

function MultiStepForm() {
  // const [loc, setLoc] = useState();
  const [value, setValue] = useState()
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
  email: "",
  phone_number: "",
  address_1: "",
  address_2: "",
  city: "",
  state: "",
  pincode: 0,
  country: "",
  geolocation: "",
  single_file: {
    // path: "",
    // name: "",
    // type: "",
    // size: 0,
    // mime: "",
    // meta: {},
    // url: ""
  },
  multi_file: [
    {
      // path: "",
      // name: "",
      // type: "",
      // size: 0,
      // mime: "",
      // meta: {},
      // url: ""
    }
  ]
  });

  const FormTitles = ["Basic Details", "Address", "File Upload","Multi File Upload","Geolocation status"];

  const PageDisplay = () => {
    if (page === 0) {

      return <BasicDetails formData={formData} setFormData={setFormData} value={value} setValue={setValue}/>;
    } else if (page === 1) {
      return <Address formData={formData} setFormData={setFormData} />;
    } else if(page === 2){
      return <FileUpload formData={formData} setFormData={setFormData} />;
    }
    else if(page === 3){
      return <MultiFileUpload formData={formData} setFormData={setFormData}/>
    }
    else{
      return <GeolocationStatus formData={formData} setFormData={setFormData} />
    }
  };
  let sendForm = async () => {
      
      try {
        
        let token=localStorage.getItem("auth_token");
        const config = {
          headers: { Authorization: `Bearer ${token}` }
      };
      console.log(config);
        let { data } = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form',
          formData,config);
          console.log(data);
        if (data.status) {
          console.log("success");
        
            Swal.fire({
                icon: "success",
                title: "Submitted successfully",
                timer :5000
            }).then(() => {
                // window.location.assign("/");
                window.location.reload();
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Not submitted",
            })
        }

    }
    catch (error) {
        // alert("error");
        // console.log(error);
        Swal.fire({
          icon: "error",
          title: "Not submitted",
      })
    }
  }
  return (
    <div className="bg-gray-800  h-screen w-full">
      <div className="form ">
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? "20%" : page == 1 ? "40%" : page == 2 ? "60%" : page == 3 ? "80%" : "100%" }}
          ></div>
        </div>
        <div className="form-container ">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  setFormData({...formData,phone_number: ""+value})
                  sendForm()
                  // alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
//   return (
//     <div className='bg-gray-800  h-screen w-full'>
//          <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-gray-900">
//       <div className='container horizontal '>
      
//       </div>
      
//     </div>
//     </div>
   
//   )
// }
