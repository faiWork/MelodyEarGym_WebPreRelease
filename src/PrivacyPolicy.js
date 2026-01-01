import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "./useLanguage";
import { translations } from "./translations";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
    const { t, language, setLanguage } = useLanguage();
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const handleLanguageChange = (langKey) => {
        setLanguage(langKey);
        setShowLanguageMenu(false);
        // Update URL to reflect language change
        searchParams.set("lang", langKey);
        navigate(`/privacy-policy?${searchParams.toString()}`, { replace: true });
    };

    return (
        <div className="privacy-policy-page">
            <div className="language-selector">
                <button
                    className="language-btn"
                    onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                    title="Select Language"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                </button>
                {showLanguageMenu && (
                    <div className="language-menu">
                        {Object.keys(translations).map((langKey) => (
                            <button
                                key={langKey}
                                className={`language-option ${language === langKey ? "active" : ""
                                    }`}
                                onClick={() => handleLanguageChange(langKey)}
                            >
                                {translations[langKey].name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="privacy-container">
                <Link to={`/?lang=${language}`} className="back-link">{t.privacyBackToHome}</Link>

                <h1>{t.privacyTitle}</h1>
                <p className="last-updated">{t.privacyLastUpdated} {new Date().toLocaleDateString()}</p>

                <section>
                    <h2>{t.privacySection1Title}</h2>
                    <p>{t.privacySection1Content}</p>
                </section>

                <section>
                    <h2>{t.privacySection2Title}</h2>
                    <p>{t.privacySection2Content}</p>
                </section>

                <section>
                    <h2>{t.privacySection3Title}</h2>
                    <p>{t.privacySection3Content}</p>
                </section>

                <section>
                    <h2>{t.privacySection4Title}</h2>
                    <p>{t.privacySection4Content}</p>
                </section>

                <section>
                    <h2>{t.privacySection5Title}</h2>
                    <p>
                        {t.privacySection5Content}{" "}
                        <a href={`mailto:${t.emailAddress}`}>
                            {t.emailAddress}
                        </a>
                    </p>
                </section>

                <section>
                    <h2>{t.privacySection6Title}</h2>
                    <p>{t.privacySection6Content}</p>
                </section>

                <section>
                    <h2>{t.privacySection7Title}</h2>
                    <p>{t.privacySection7Content}</p>
                </section>
            </div>
        </div>
    );
}

export default PrivacyPolicy;











