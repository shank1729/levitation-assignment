import React, { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function BasicDetails({ formData, setFormData, value, setValue }) {
    return (
        <div className="sign-up-container">
            <div className='flex flex-col py-2'>
                <label>Name</label>
                <input className='rounded-md  mt-2 p-2 focus:border-blue-500  focus:outline-none' type="text" value={formData.name}
                    onChange={(event) =>
                        setFormData({ ...formData, name: event.target.value })
                    } />
            </div>
            <div className='flex flex-col py-2'>
                <label>Email</label>
                <input className='rounded-md  mt-2 p-2 focus:border-blue-500  focus:outline-none' type="email" value={formData.email}
                onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                } />
            </div>
           
            <PhoneInput
            className='rounded-sm  mt-2 mb-4 p-2 focus:border-blue-500  focus:outline-none'
                defaultCountry="IN"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
            // value={formData.phone_number}
            />
        </div>
    );
}

export default BasicDetails;