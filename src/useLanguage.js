import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { translations } from "./translations";

const LANGUAGE_KEY = "melodyEarGym_language";

function getInitialLanguage(searchParams) {
  // First, try to get from URL query parameter
  const urlLang = searchParams.get("lang");
  if (urlLang && translations[urlLang]) {
    return urlLang;
  }

  // Then, try to get from localStorage
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }

  // Otherwise, detect from browser
  const browserLang = navigator.language;
  if (
    browserLang.toLowerCase().includes("zh-tw") ||
    browserLang.toLowerCase().includes("zh-hk")
  ) {
    return "zh-TW";
  } else if (browserLang.toLowerCase().includes("zh")) {
    return "zh-CN";
  } else {
    return "en";
  }
}

export function useLanguage() {
  const [searchParams] = useSearchParams();
  const [language, setLanguage] = useState(() => getInitialLanguage(searchParams));

  // Update localStorage whenever language changes
  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  // Listen for storage changes (in case user changes language in another tab/window)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === LANGUAGE_KEY && e.newValue && translations[e.newValue]) {
        setLanguage(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Update language if URL param changes
  useEffect(() => {
    const urlLang = searchParams.get("lang");
    if (urlLang && translations[urlLang] && urlLang !== language) {
      setLanguage(urlLang);
    }
  }, [searchParams, language]);

  const updateLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
    }
  };

  return {
    t: translations[language] || translations.en,
    language,
    setLanguage: updateLanguage,
  };
}
