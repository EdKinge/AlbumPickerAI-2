import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export function PopupProvider({children}) {
  const [ open, setOpen ] = useState();

  const togglePopup = () => {setOpen(prev => !prev)};

  return (
    <PopupContext.Provider value={{open, togglePopup}}>
      {children}
    </PopupContext.Provider>
  );
}

export const usePopup = () => useContext(PopupContext);