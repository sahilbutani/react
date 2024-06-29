import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OtpInput from "react-otp-input";
import { CgSpinner } from "react-icons/cg";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";
const LoginWithOTP = () => {
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showotp, setShowotp] = useState(true);
  const [user, setUser] = useState(null);

  const auth = getAuth();

  const onCaptaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignUp();
          },
          "expired-callback": () => {},
        }
      );
    }
  };

  const onSignUp = () => {
    setLoading(true);
    onCaptaVerify();

    const appVerifier = window.recaptchaVerifier;
    const formatPhone = "+" + phone;

    signInWithPhoneNumber(auth, formatPhone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowotp(true);
        toast.success("OTP Sended Successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const onOtpVerify = () => {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .className((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div>
        <toast toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2>Login Successfully...</h2>
        ) : (
          <div className="bg-emerald-500 h-screen flex flex-col justify-center align-center">
            <div className="mt-12 text-white text-3xl rounded-lg">
              Login With OTP
            </div>
            {showotp ? (
              <>
                <div className="bg-white w-fit mx-auto text-emerald-500 p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label htmlFor="ph" className="text-xl text-white align-center">
                  Verify Your Phone No.{" "}
                </label>
                <PhoneInput country={"us"} value={phone} onChange={setPhone} />
                <button
                  onClick={onSignUp}
                  className="bg-emerald-600 text-white mt-8 w-full flex justify-center align-center py-2 gap-1 rounded "
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            ) : (
              <>
                <div className="bg-white w-fit mx-auto text-emerald-500 p-4 rounded-full">
                  <RiLockPasswordFill size={30} />
                </div>
                <label
                  htmlFor="ph"
                  className="text-2xl text-white align-center"
                >
                  Enter Your Phone No.{" "}
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  otpType="number"
                  renderSeparator={<span>&nbsp;</span>}
                  renderInput={(props) => <input {...props} />}
                />
                <button
                  onClick={onOtpVerify}
                  className="bg-emerald-600 text-white mt-8 w-full flex justify-center align-center py-2 gap-1 rounded "
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify Your OTP</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default LoginWithOTP;
