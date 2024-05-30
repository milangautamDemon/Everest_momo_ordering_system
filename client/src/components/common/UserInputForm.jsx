/* eslint-disable react/prop-types */

import PhoneInput from 'react-phone-input-2'
import { useRef, useState } from "react";
import PrimaryButton from './PrimaryButton';
import axios from "axios";
import toast from "react-hot-toast";

const UserInputForm = ({btnColor}) => {


    //uses when re-render or immediate feedback is not required
    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");
    const helpsRef = useRef("");
    const messageRef = useRef("");
    const [phone, setPhone] = useState("")

    const [errors, setErrors] = useState({});


    const formValidate = () => {
        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const trimFirstName = firstNameRef.current?.value?.trim();
        const trimLastName = lastNameRef.current?.value?.trim();
        const trimEmail = emailRef.current?.value?.trim();
        const trimHelps = helpsRef.current?.value?.trim();
        const trimPhone = phone.trim();
        const trimMessage = messageRef.current?.value?.trim();

        if(!trimFirstName) newErrors.firstName = "User First Name is Required !!!";
        if(!trimLastName) newErrors.lastName = "User Last Name is Required !!!";
        if (!trimEmail) {
            newErrors.email = "Email is Required!!!";
        } else if (!emailPattern.test(trimEmail)) {
            newErrors.email = "Please Enter Valid Email!!!";
        }
        if(!trimHelps) newErrors.helps = "Please Select Option !!!"
        if(!trimPhone) newErrors.phone = "Phone Number is Required !!!";
        if(!trimMessage) newErrors.message = "Please Enter Some Message !!!";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmitForm = async(e) => {
        e.preventDefault();
        if(formValidate()){
            const formData = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                helps: helpsRef.current.value,
                phone: phone,
                message: messageRef.current.value
            }
            if (formData) {
                try {
                    const response = await axios.post("http://localhost:3000/api/add-contact", formData, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    toast.success(response.data.msg, {position: "top-right"});
                } catch (error) {
                    console.error('Error response:', error.response); // Log the full error response
                    toast.error(error.response.data.err_code, {position: "top-right"});
                }
            }

    }else{
        console.error("validation failed !!!")
        toast.error("Form Validation Failed !!!", {position: "top-left"});

    }
    }


  return (
    <>
    <div className="customer-form p-3 w-full md:w-1/2">
        <form className="flex flex-col gap-4">
            <div className="flex flex-row">
                <div className="w-1/2 pr-2 ">
                    <label htmlFor="firstName"
                        className="block my-2 text-left  
                                text-sm font-medium text-black-dark">
                        First Name
                    </label>
                    <input ref={firstNameRef} id='firstName' name='firstName' type="text"
                        className="shadow-sm text-black-dark border outline-none border-black-light 
                                text-sm rounded-lg block w-full p-2.5"
                        placeholder="Enter First Name"
                        required />
                        {errors.firstName && (
                            <span className="text-danger-light text-xs">{errors.firstName}</span>
                        )}
                </div>
                <div className="w-1/2 pl-2">
                    <label htmlFor="lastName"
                        className="block my-2 text-left text-sm  
                                font-medium text-black-dark">
                        Last Name
                    </label>
                    <input ref={lastNameRef} type="text"  id='lastName' name='lastName'
                        className="shadow-sm text-black-dark border outline-none border-black-light 
                                text-sm rounded-lg block w-full p-2.5"
                        placeholder="Enter Last Name" />
                        {errors.lastName && (
                            <span className="text-danger-light text-xs">{errors.lastName}</span>
                        )}
                </div>
            </div>
            <div>
                <label htmlFor="email"
                    className="block my-2 text-left text-sm  
                            font-medium text-black-dark capitalize">
                    email
                </label>
                <input ref={emailRef} type="email" id='email' name='email'
                    className="shadow-sm text-black-dark border outline-none border-black-light 
                            text-sm rounded-lg block w-full p-2.5"
                    placeholder="abc@geeksforgeeks.org"
                    required />
                    {errors.email && (
                        <span className="text-danger-light text-xs">{errors.email}</span>
                    )}
            </div>
            <div>
                <label htmlFor="helps"
                    className="block my-2 text-left  
                            text-sm font-medium text-black-dark">
                    What can we do for you
                </label>
                <select ref={helpsRef} name="helps" id="helps"
                    className="block p-2.5 w-full text-sm  
                                rounded-lg  
                            border border-black-light shadow-sm "
                    required >
                    <option value="" className="text-black-light">Choose</option>
                    <option value="momo">About momo</option>
                    <option value="contact">Our contact</option>
                    <option value="price">Price</option>
                </select>
                {errors.helps && (
                    <span className="text-danger-light text-xs">{errors.helps}</span>
                )}
            </div>
            <div>
                <label htmlFor="phone" className="block my-2 text-left  
                            text-sm font-medium text-black-dark">
                    Phone No
                </label>
                <PhoneInput 
                inputStyle={{
                    width: "100%",
                    height: "44px"
                }}
                    country={'np'}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                />
                    {errors.phone && (
                        <span className="text-danger-light text-xs">{errors.phone}</span>
                    )}
            </div>
            <div >
                <label htmlFor="message"
                    className="block my-2 text-left  
                            text-sm font-medium text-black-dark ">
                    Your message
                </label>
                <textarea ref={messageRef} id='message' type="text" name='message' rows="4"
                    className="block p-2.5 w-full outline-none text-sm  
                                text-black-dark rounded-lg  
                                shadow-sm border border-black-light "
                    placeholder="Query/Suggestion..." />
                {errors.message && (
                    <span className="text-danger-light text-xs">{errors.message}</span>
                )}
            </div>

            <div className="btn">
                <PrimaryButton  onClick={handleSubmitForm} buttonName="send message" classFeature={`${btnColor} px-10`}  />
            </div>
        </form>
    </div>
    </>
  )
}

export default UserInputForm