import { useContext } from "react";
import { TitleColorContext } from "../contexts/TitleColorContext";

export default function useTitleColorContext() {
  const context = useContext(TitleColorContext);

  if (!context) {
    throw new Error(
      "useTitleColorContext must be used within a TitleColorProvider"
    );
  }

  return context;
}
