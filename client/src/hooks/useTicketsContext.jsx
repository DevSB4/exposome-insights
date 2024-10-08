import { TicketsContext } from "@/context/ticketsContext";
import { useContext } from "react";

export const useTicketsContext = () => {
  const context = useContext(TicketsContext);

  if (!context) {
    throw Error(
      "useTicketsContext must be used inside an TicketsContextProvider"
    );
  }

  return context;
};
