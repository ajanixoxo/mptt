"use client";

import { useEffect, useState, useRef } from "react";
import LoadingScreen from "@/components/LoadingScreen";

function Apply() {
  const [isLoading, setIsLoading] = useState(true);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Function to check when Typeform is fully loaded
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          (mutation.target as HTMLElement).getAttribute("data-tf-loaded") === "true"
        ) {
          setIsLoading(false); // Hide loading screen once Typeform is loaded
        }
      });
    });

    // Start observing changes in the Typeform container
    if (formRef.current) {
      observer.observe(formRef.current, { attributes: true });
    }

    return () => {
      document.body.removeChild(script);
      observer.disconnect(); // Clean up observer when component unmounts
    };
  }, []);

  return (
    <div>
      {isLoading && <LoadingScreen />}
      <div ref={formRef} data-tf-live="01JQ5GSABRY0SKWCX7Q0TNJBM0" />
    </div>
  );
}

export default Apply;
