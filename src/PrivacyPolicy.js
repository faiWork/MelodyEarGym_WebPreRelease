import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./useLanguage";
import { translations } from "./translations";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;

    return (
        <div className="privacy-policy-page">
            <div className="privacy-container">
                <Link to="/" className="back-link">← Back to Home</Link>

                <h1>Privacy Policy</h1>
                <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2>1. Information We Collect</h2>
                    <p>
                        Melody Ear Gym does not collect, store, or transmit any personal information.
                        The app operates entirely on your device. We do not access your contacts,
                        photos, location, or any other personal data stored on your device.
                    </p>
                </section>

                <section>
                    <h2>2. Data Usage</h2>
                    <p>
                        We do not track user behavior, collect analytics, or use any third-party
                        tracking services. Your usage data, progress, and any settings remain private
                        and local to your device only.
                    </p>
                </section>

                <section>
                    <h2>3. Third-Party Services</h2>
                    <p>
                        Melody Ear Gym does not integrate with any third-party analytics, advertising,
                        or data collection services. The app functions independently without sending
                        any data to external servers.
                    </p>
                </section>

                <section>
                    <h2>4. Children's Privacy</h2>
                    <p>
                        Our app does not knowingly collect any information from children under the age of 13.
                        Since we do not collect any data, there is no risk of collecting children's information.
                    </p>
                </section>

                <section>
                    <h2>5. Contact Information</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:{" "}
                        <a href={`mailto:${t.emailAddress}`}>
                            {t.emailAddress}
                        </a>
                    </p>
                </section>

                <section>
                    <h2>6. Changes to This Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. Any changes will be
                        posted on this page with an updated revision date. We encourage you to
                        review this Privacy Policy periodically to stay informed about how we
                        protect your information.
                    </p>
                </section>

                <section>
                    <h2>7. Your Consent</h2>
                    <p>
                        By using Melody Ear Gym, you consent to this Privacy Policy. If you do
                        not agree with this policy, please do not use our app.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default PrivacyPolicy;










