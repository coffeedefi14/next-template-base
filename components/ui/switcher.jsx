"use client"
import { useContext } from 'react'
import { AppContext } from '@/components/context-provider'; // Import the context


const Switcher = () => {

  // Use the useContext hook to access the context and retrieve the switcher value
  const { switcher, setSwitcher } = useContext(AppContext);


    const handleCheckboxChange = () => {
      setSwitcher(!switcher)
    }

    return (
        <>
        <label className='border-muted mb-4 inline-flex cursor-pointer select-none items-center justify-center rounded-full border'>
                <input
                    type='checkbox'
                    className='sr-only'
                    checked={switcher}
                    onChange={handleCheckboxChange}
                />
                <span
            className={`flex items-center rounded-full px-8 py-1 text-xs font-medium ${!switcher ? 'text-foreground bg-muted' : 'text-muted-foreground'
                        }`}
                >
                  
                    Unmarried
                </span>
                <span
            className={`flex items-center rounded-full px-8 py-1 text-xs font-medium ${switcher ? 'text-foreground bg-muted' : 'text-muted-foreground'
                        }`}
                >
                   
                    Newly Married
                </span>
            </label>
        </>
    )
}

export default Switcher
