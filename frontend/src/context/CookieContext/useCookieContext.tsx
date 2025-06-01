import { useContext } from "react";
import { CookieContext } from "./context";

export const useCookieConsent = () => useContext(CookieContext);
