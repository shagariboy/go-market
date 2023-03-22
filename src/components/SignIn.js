import React from "react";
import { Form } from "react-router-dom";

export default function SignIn() {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-start mt-[30px]">
        <div className="animate-[hideLayer_0.3s_ease-out_forwards] active:animate-[showLayer_0.3s_ease-in_forwards]">
          <button className="relative cursor-pointer block uppercase text-base tracking-[0.5px] text-[#999] bg-transparent translate-x-0 transition-all duration-[0.3s] ease-[ease-out] mx-auto p-0 border-[none] outline-none active:text-white active:translate-x-[-90px];">
          Login
          <span className="absolute bottom-[-5px] overflow-hidden pointer-events-none w-full h-0.5 left-0"></span>
          </button>
          <Form className="overflow-hidden min-w-[260px] origin-top mt-[50px] px-[25px] py-[30px] rounded-[5px]">
      <fieldset>
        <legend></legend>
      </fieldset>
          </Form>
        </div>
      </div>
      </div>
    </>
  );
}
