import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [userLoggedIn , setLoggedInUser] = useState({
        username : "grumpy19",
        avatarUrl : "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
  })

  return (
    <UserContext.Provider value={{ userLoggedIn, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext