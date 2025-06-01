import { createContext } from "react";

export const CookieContext = createContext<{
  consent: boolean;
  acceptConsent: () => void;
}>({
  consent: false,
  acceptConsent: () => {},
});
