import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

interface User {
  login: string;
  password: string;
  interests: string;
}

type ContextType = {
  users: User[];
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  setUsers: Dispatch<SetStateAction<User[]>>
};

const AppContext = createContext<ContextType | undefined>(undefined);

const AppContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const contextValue: ContextType = {
    user,
    users,
    setUser,
    setUsers
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): ContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export { AppContextProvider, useAppContext };
