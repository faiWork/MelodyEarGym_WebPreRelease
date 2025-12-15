import { useState, useEffect } from "react";
import { translations } from "./translations";

export function useLanguage() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const browserLang = navigator.language;
    if (
      browserLang.toLowerCase().includes("zh-tw") ||
      browserLang.toLowerCase().includes("zh-hk")
    ) {
      setLanguage("zh-TW");
    } else if (browserLang.toLowerCase().includes("zh")) {
      setLanguage("zh-CN");
    } else {
      setLanguage("en");
    }
  }, []);

  return {
    t: translations[language],
    language,
    setLanguage,
  };
}
