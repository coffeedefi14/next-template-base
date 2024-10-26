"use client"
import { useHomeContextData } from '@/components/providers/HomePageContext'; // Import the context


const Switcher = () => {

  // Use the useContext hook to access the context and retrieve the switcher value
  const { switcher, setSwitcher } = useHomeContextData();
  //console.log(setSwitcher)

    const handleCheckboxChange = () => {
      setSwitcher(!switcher)
    }

    return (
        <>
        <label className='mb-4 inline-flex cursor-pointer select-none items-center justify-center rounded-full border border-border-1'>
                <input
                    type='checkbox'
                    className='sr-only'
                    checked={switcher}
                    onChange={handleCheckboxChange}
                />
                <span
            className={`flex items-center rounded-full px-8 py-1 text-xs font-medium ${!switcher ? 'bg-interaction text-foreground' : 'text-grey-2'
                        }`}
                >
                  
                    Financial Insights (FI)
                </span>
                <span
            className={`flex items-center rounded-full px-8 py-1 text-xs font-medium ${switcher ? 'bg-interaction text-foreground' : 'text-grey-2'
                        }`}
                >
                   
                    Retire Efficiently (RE)
                </span>
            </label>
        </>
    )
}

export default Switcher
