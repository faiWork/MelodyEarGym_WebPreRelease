import React, { useState } from "react";
import "./App.css";
import { useLanguage } from "./useLanguage";
import { translations } from "./translations";

function App() {
  const { t, language, setLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  return (
    <div className="App">
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
                onClick={() => {
                  setLanguage(langKey);
                  setShowLanguageMenu(false);
                }}
              >
                {translations[langKey].name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="animated-background">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="container">
        <div className="content">
          <div className="badge">NEW</div>
          <h1 className="title">
            <span className="title-gradient">{t.appTitle}</span>
          </h1>
          <p className="description">{t.description}</p>
          <div className="app-store-notice">
            <span className="app-store-icon">📱</span>
            <span className="app-store-text">{t.availableInAppStore}</span>
            <span className="app-store-sparkle">✨</span>
          </div>
          <div className="music-notes">
            <div className="music-note note-1">♪</div>
            <div className="music-note note-2">♫</div>
            <div className="music-note note-3">♬</div>
          </div>
        </div>

        <div className="sections">
          <section className="section-card card-hover">
            <div className="section-icon">📱</div>
            <h2 className="section-title">{t.whatIsTitle}</h2>
            <p className="section-content">{t.whatIsContent}</p>
          </section>

          <section className="section-card card-hover">
            <div className="section-icon">🎵</div>
            <h2 className="section-title">{t.aboutTitle}</h2>
            <div className="section-content">
              {t.aboutContent.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="section-card card-hover">
            <div className="section-icon">💬</div>
            <h2 className="section-title">{t.supportTitle}</h2>
            <p className="section-content">{t.supportDescription}</p>
            <div className="support-box support-box-glow">
              <div className="support-item">
                <svg
                  className="support-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div className="support-text">
                  <div className="support-label">{t.emailLabel}</div>
                  <a href={`mailto:${t.emailAddress}`} className="support-link">
                    {t.emailAddress}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="footer">
          <p className="copyright">{t.copyright}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
