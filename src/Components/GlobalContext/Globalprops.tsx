import React, {createContext, PropsWithChildren, useState} from 'react';

interface loginuser{
    name: string,
    email: string,
    image: string
}

interface usersProps {
    userData: loginuser,
    setUserData: React.Dispatch<React.SetStateAction<loginuser>>
}

export const CurrentUser = createContext<usersProps | null>(null)

export const Globalprops: React.FC<PropsWithChildren> = ({children}) => {

    const [userData, setUserData] = useState({} as loginuser)


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

