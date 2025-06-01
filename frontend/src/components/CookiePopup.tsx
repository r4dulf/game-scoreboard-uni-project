import CookieConsent from "react-cookie-consent";
import { useCookieConsent } from "../context/CookieContext/useCookieContext";

const CookiePopup = () => {
  const { consent, acceptConsent } = useCookieConsent();

  if (consent) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      onAccept={acceptConsent}
    >
      We use cookies to authenticate users and save preferences.{" "}
      <a href="/privacy">Learn more</a>
    </CookieConsent>
  );
};

export default CookiePopup;
