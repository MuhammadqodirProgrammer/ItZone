"use client";
import { useEffect, useState } from "react";
import "./page.css";
import { useRouter } from "next/navigation";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import VerificationInput, {
  VerificationInputProps,
} from "react-verification-input";
const notify = () => toast.success("Successfully registered");
const notify2 = () =>
  toast.error("Verification code is not correct or expired!");

export default function Verify() {
  const [inputcode, setCode] = useState<any>(0);
  const router = useRouter();
  async function getCode() {
    try {
      const response = await axios.post(
        `http://165.227.164.31:4040/api/StudentAuth/register/send-code?mail=${localStorage.getItem(
          "verifyEmail"
        )}`
      );
      console.log(response);
    } catch {
      console.log;
    }
  }
  let verifyEmail: any;
  if (typeof window !== "undefined") {
    verifyEmail = localStorage?.getItem("verifyEmail");
  }
  // console.log(inputcode ,"inputcode");

  useEffect(() => {
    getCode();
  }, []);

  async function handleSubmit(evt: any) {
    evt.preventDefault();
    let datas: any;
    if (typeof window !== "undefined") {
      datas = localStorage.getItem("verifyEmail");
    }
    const data = {
      email: datas,
      code: inputcode,
    };
    try {
      let response = await axios.post(
        "http://165.227.164.31:4040/api/StudentAuth/register/verify",
        data
      );
      console.log(response);

      if (response.status == 200 && response.data.result == true) {
        notify();
        if (typeof window !== "undefined") {
          localStorage.setItem("token", response.data.token);
        }
        router.push("/");
      } else {
        notify2();
      }
    } catch {
      notify2();
    }
  }
  const verificationInputProps: any = {
    onChange: setCode,
    length: 5,
    validChars: "0-9",
    character: {
      className: "character",
      classNameInactive: "character--inactive",
      classNameSelected: "character--selected",
    },
  };
  return (
    <main className="max-w-[1010px] w-[100%] m-auto pt-3">
      <div className="w-full flex items-start gap-0 md:gap-5">
        <div className="w-0 md:w-[50%]">
          <svg
            viewBox="0 0 528 560"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            className="blur-3xl"
          >
            <circle cx="71" cy="61" r="111" fill="#F56565"></circle>
            <circle cx="244" cy="106" r="139" fill="#ED64A6"></circle>
            <circle cy="291" r="139" fill="#ED64A6"></circle>
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936"></circle>
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B"></circle>
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78"></circle>
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1"></circle>
          </svg>
        </div>
        <div className="w-full md:w-[50%] p-5 rounded-lg bg-[#f7fafc] dark:bg-[#171923] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <h2 className="text-[2.25rem] text-black dark:text-white font-bold">
            Emailni tasdiqlang <span className="text-[#1a7745]">!</span>
          </h2>
          <p className="text-black dark:text-white">
            Elektron pochtaga tasdiqlash kodini yubordik, elektron pochtangizni
            tekshiring va profilingizni tasdiqlang. {"  "}
          </p>
          <p className="text-center font-bold opacity-50 pt-1 pb-3">
            {verifyEmail}
          </p>
          <form className="pt-2" onSubmit={handleSubmit}>
            {/* <VerificationInput
              onChange={setCode}
              length={5}
              validChars="0-9"
              character={{
                className: "character",
                classNameInactive: "character--inactive",
                classNameSelected: "character--selected",
              }}
            /> */}
            <VerificationInput {...verificationInputProps} />

            <button
              type="submit"
              className="w-[100%] mt-3 py-4 font-medium bg text-[17px] bg-ContactButton cursor-pointer border-none rounded-md transition ease-in-out hover:bg-ContactButtonHover"
            >
              Tasdiqlash
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </main>
  );
}
