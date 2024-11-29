import React from "react";

function SignUp() {
    return (
    <div className="bg-black h-[38px] text-white relative flex flex-row justify-center items-center">
        <p className="">Sign up and get 20% off to your first order. </p>
        <a href="#" className="underline ml-1">Sign Up Now</a>
        <a href="" className="hidden md:block right-[100px] absolute">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[20px]" >
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
        </a>
    </div>
    )
}

export default SignUp