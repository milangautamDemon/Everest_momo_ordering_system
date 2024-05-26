/* eslint-disable react/prop-types */

import PhoneInput from 'react-phone-input-2'
import { useState } from "react";
import PrimaryButton from './PrimaryButton';

const UserInputForm = ({btnColor}) => {
const [phone, setPhone] = useState('');

  return (
    <>
    <div className="customer-form px-4 w-full">
                        <form action="#" className="flex flex-col gap-4">
                            <div className="flex flex-row">
                                <div className="w-1/2 pr-2 ">
                                    <label htmlFor="firstName"
                                        className="block my-2 text-left  
                                                text-sm font-medium text-black-dark">
                                        First Name
                                    </label>
                                    <input type="text"
                                        className="shadow-sm text-black-dark border outline-none border-black-light 
                                                text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Enter First Name"
                                        required />
                                </div>
                                <div className="w-1/2 pl-2">
                                    <label htmlFor="firstName"
                                        className="block my-2 text-left text-sm  
                                                font-medium text-black-dark">
                                        Last Name
                                    </label>
                                    <input type="text"
                                        className="shadow-sm text-black-dark border outline-none border-black-light 
                                                text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Enter Last Name" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email"
                                    className="block my-2 text-left text-sm  
                                            font-medium text-black-dark capitalize">
                                    email
                                </label>
                                <input type="email"
                                    className="shadow-sm text-black-dark border outline-none border-black-light 
                                            text-sm rounded-lg block w-full p-2.5"
                                    placeholder="abc@geeksforgeeks.org"
                                    required />
                            </div>
                            <div>
                                <label htmlFor="helps"
                                    className="block my-2 text-left  
                                            text-sm font-medium text-black-dark">
                                    What can we do for you
                                </label>
                                <select name="helps" id="helps"
                                    className="block p-2.5 w-full text-sm  
                                             rounded-lg  
                                            border border-black-light shadow-sm "
                                    required >
                                        <option value="" className="text-black-light">Choose</option>
                                        <option value="momo">About momo</option>
                                        <option value="contact">Our contact</option>
                                        <option value="price">Price</option>
                                    </select>
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
                            </div>
                            <div >
                                <label htmlFor="message"
                                    className="block my-2 text-left  
                                            text-sm font-medium text-black-dark ">
                                    Your message
                                </label>
                                <textarea rows="4"
                                    className="block p-2.5 w-full outline-none text-sm  
                                                text-black-dark rounded-lg  
                                                shadow-sm border border-black-light "
                                    placeholder="Query/Suggestion..." />
                            </div>

                            <div className="btn">
                                <PrimaryButton buttonName="send message" classFeature={`${btnColor} px-10`}  />
                            </div>
                        </form>
                    </div>
    </>
  )
}

export default UserInputForm