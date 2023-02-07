import React, {createContext, PropsWithChildren, useState} from 'react';

interface usersProps {
    userData: null,
    setUserData: React.Dispatch<React.SetStateAction<null>>
}

export const CurrentUser = createContext<usersProps | null>(null)

export const Globalprops: React.FC<PropsWithChildren> = ({children}) => {

    const [userData, setUserData] = useState(null)


  return (
    <div>
        <CurrentUser.Provider value={
            {
                userData,
                setUserData
            }
        }>
            {children}
        </CurrentUser.Provider>
    </div>
  )
}

