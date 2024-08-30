"use client"
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ContextDataType {
     switcher: boolean,
    //setSwitcher: React.Dispatch<React.SetStateAction<any>>;
    setSwitcher: (switcher: boolean) => void;
}

const ContextData = createContext<ContextDataType>({
  switcher:false ,
  setSwitcher: () => { },
});

interface PageContextProps {
    children: ReactNode;
}

export const HomePageContext = ({ children }: PageContextProps) => {
  const [switcher, setSwitcher] = useState(false);

    return (
      <ContextData.Provider value={{ switcher, setSwitcher }}>
            {children}
      </ContextData.Provider>
    );
};

export const useHomeContextData = () => {
  const context = useContext(ContextData);
    if (!context) {
      throw new Error('ContextData is null or empty');
    }
    return context;
};
