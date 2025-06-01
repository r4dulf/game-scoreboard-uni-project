import CookieConsent from "react-cookie-consent";
import { useCookieConsent } from "../context/CookieContext/useCookieContext";
import { Button } from "./Button";

const CookiePopup = () => {
  const { consent, acceptConsent } = useCookieConsent();

  if (consent) return null;

  return (
    <CookieConsent
      location="bottom"
      onAccept={acceptConsent}
      disableButtonStyles
      ButtonComponent={(
        props: React.ButtonHTMLAttributes<HTMLButtonElement>
      ) => <Button {...props}>Accept Cookies</Button>}
    >
      We use cookies to authenticate users and save preferences.{" "}
      <a href="/privacy">Learn more</a>
    </CookieConsent>
  );
};

export default CookiePopup;
