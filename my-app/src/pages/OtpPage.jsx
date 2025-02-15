import React, { useState, useRef } from "react";

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (/^\d?$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    alert(`Entered OTP: ${otp.join("")}`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section (Image & Text) */}
      <div className="hidden md:flex w-1/2 bg-blue-500 text-white flex-col items-center justify-center ">
        {/* <h1 className="text-4xl font-bold">Verify Your Account</h1>
        <p className="mt-2 text-lg text-center">
          Enter the OTP sent to your registered mobile number.
        </p> */}
        <img
          src="/otp.webp"
          alt="OTP Verification"
          className=" rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section (OTP Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Enter OTP</h2>
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center border rounded-lg text-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
