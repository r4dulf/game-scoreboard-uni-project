import { useState } from "react";
import { CookieContext } from "./context";

export const CookieProvider = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsent] = useState(
    localStorage.getItem("cookieConsent") === "true"
  );

  const acceptConsent = () => {
    localStorage.setItem("cookieConsent", "true");

    setConsent(true);
  };

  return (
    <CookieContext.Provider value={{ consent, acceptConsent }}>
      {children}
    </CookieContext.Provider>
  );
};
