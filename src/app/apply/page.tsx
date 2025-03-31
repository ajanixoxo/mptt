"use client";

import { useEffect, useState, useRef } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";

function Apply() {
  const [isLoading, setIsLoading] = useState(true);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          (mutation.target as HTMLElement).getAttribute("data-tf-loaded") === "true"
        ) {
          setIsLoading(false);
        }
      });
    });

    if (formRef.current) {
      observer.observe(formRef.current, { attributes: true });
    }

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="">
      {isLoading && <LoadingScreen />}
      
      

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div ref={formRef} data-tf-live="01JQ5GSABRY0SKWCX7Q0TNJBM0" className="w-full max-w-4xl p-4" />
      </div>
    </div>
  );
}

export default Apply;
