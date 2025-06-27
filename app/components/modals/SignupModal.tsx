'use client';

import Modal from "./Modal";

import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";

const SignupModal = () => {
    const signupModal = useSignupModal()

    const content = (
        <>
            <form className="space-y-4">
                <input type="email" placeholder="Your e-mail address" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                <input type="password" placeholder="Your password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                <input type="password" placeholder="Confirm password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                <div className="p-5 bg-red-500 text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton
                    label="Submit"
                    onClick={() => console.log('test')}
                />
            </form>
        </>
    )

    return (
        <Modal 
            isOpen= {signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal;