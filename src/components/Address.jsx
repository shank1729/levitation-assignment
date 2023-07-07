import React from "react";

function Address({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      
      <input
       className='rounded-md   p-2 focus:border-blue-500  focus:outline-none'
        type="text"
        placeholder="Address line 1"
        value={formData.address_1}
        onChange={(e) => {
          setFormData({ ...formData, address_1: e.target.value });
        }}
      />
      <input
       className='rounded-md  mt-2 p-2 focus:border-blue-500  focus:outline-none'
        type="text"
        placeholder="Address line 2"
        value={formData.address_2}
        onChange={(e) => {
          setFormData({ ...formData, address_2: e.target.value });
        }}
      />
      <input
       className='rounded-md  mt-2 p-2 focus:border-blue-500  focus:outline-none'
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => {
          setFormData({ ...formData, city: e.target.value });
        }}
      />
      <input
       className='rounded-md  mt-2 p-2 focus:border-blue-500  focus:outline-none'
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={(e) => {
          setFormData({ ...formData, state: e.target.value });
        }}
      />
      <input
       className='rounded-md  mt-2 p-2 focus:border-blue-500  focus:outline-none'
        type="number"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={(e) => {
          setFormData({ ...formData, pincode: e.target.value });
        }}
      />
      <input
       className='rounded-md  my-2 p-2 focus:border-blue-500  focus:outline-none'
        type="text"
        placeholder="Country"
        value={formData.country}
        onChange={(e) => {
          setFormData({ ...formData, country: e.target.value });
        }}
      />
    </div>
  );
}

export default Address;