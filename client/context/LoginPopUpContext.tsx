import { createContext,  useState, ReactNode } from "react";

type PopUpContextType = {
  popUp: boolean;
  displayPopUp: () => void;
};

type LoginPopUpContextProps = {
  children: ReactNode;
};

export const PopUpContext = createContext<PopUpContextType | null>(null);



const LoginPopUpContext = ({ children }: LoginPopUpContextProps) => {

  const [popUp, setPopUp] = useState<boolean>(false);

  function displayPopUp(): void {
    setPopUp(() => !popUp);
  }

  const popUpContextValue: PopUpContextType = {
    popUp,
    displayPopUp,
  };

  return (
    <PopUpContext.Provider value={popUpContextValue}>
      {children}
    </PopUpContext.Provider>
  );
};

export default LoginPopUpContext;

