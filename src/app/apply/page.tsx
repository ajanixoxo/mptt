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

    const originalBodyStyle = document.body.style.overflow; // Save original body style

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
      // Remove Typeform script if it exists
      document.querySelectorAll('script[src="//embed.typeform.com/next/embed.js"]').forEach((script) => {
        script.remove();
      });

      // Restore body styles to prevent scrolling issues
      document.body.style.overflow = originalBodyStyle;

      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && <LoadingScreen />}

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div ref={formRef} data-tf-live="01JQ5GSABRY0SKWCX7Q0TNJBM0"></div>
      </div>
    </div>
  );
}

export default Apply;
