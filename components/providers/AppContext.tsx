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

  useEffect(() => {
    const init = async () => {
      const BACKEND_URL = siteConfig.links.api;
      const app_name = siteConfig.links.app_name;

      try {
        const response = await fetch(`${BACKEND_URL}/init`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-App-Identifier': app_name,
          },
          credentials: 'include', // Include credentials
          mode: 'cors', // Enable CORS

        });

        const responseData = await response.json();

        // Check the response structure and handle accordingly
        if (responseData.error) {
          // Handle error response
          alert(`Error: ${responseData.message}`);
          console.error(responseData.message);
        } else {

          setUserData((prevUserData: any) => {
            const updatedUserData = { ...prevUserData };

            updatedUserData.code = responseData.data.code;
            if (responseData.data.unique_id) {
              updatedUserData.unique_id = responseData.data.unique_id;
            }
            return updatedUserData;

          });
         
          //console.log(responseData);
        }


      } catch (error: any) {
        console.log(error);
        alert(`Error: ${error.message}`);
      }


    };
    if (!userData.code) {
      //init();
      console.log('init done')
      
    }
    console.log(userData)
  }, [userData]);



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
