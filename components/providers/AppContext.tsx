"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { siteConfig } from '@/config/site'
export interface UserData {
  unique_id: string | null;
  code: string |null;
  
}

interface AppContextType {
  userData: UserData;
  
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  
  
}

const AppContext = createContext<AppContextType>({
  userData: { unique_id: null, code: null,  },
 
 
  setUserData: () => { },
 
 
});

interface AppContextProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [userData, setUserData] = useState<UserData>({
    unique_id: '',
    code: null,
  
  });

 

  const [useronboarded, setUseronboarded] = useState<boolean>(false);





  return (
    <AppContext.Provider value={{ userData, setUserData,  }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContextData = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContextData must be used within a ContextData provider');
  }
  return context;
};
