import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./useLanguage";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
    const { t } = useLanguage();

    return (
        <div className="privacy-policy-page">
            <div className="privacy-container">
                <Link to="/" className="back-link">{t.privacyBackToHome}</Link>

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











