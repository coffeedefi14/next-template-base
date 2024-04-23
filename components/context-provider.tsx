"use client"

import { createContext, useState, FC, ReactNode } from 'react';

interface GlobalContextProps {
  switcher: boolean,
  user: any;
  setSwitcher: (switcher: boolean) => void;
  setUser: (user: any) => void;
 
}


// Define your context
export const AppContext = createContext<GlobalContextProps>({
  user: {},
  switcher: false,
  setUser: () => { },
  setSwitcher: () => { },
});;

// Define your context provider component
const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

  // Define your state or any other logic here
  const [user, setUser] = useState<any>({});
  const [switcher, setSwitcher] = useState<boolean>(false);

    return (
      <AppContext.Provider value={{ user, switcher, setUser, setSwitcher, }}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
