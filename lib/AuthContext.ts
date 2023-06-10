import { createContext, useState } from 'react';

type User = {
  id: number;
  name: string;
};

type UserContextProps = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {}
});

cexport const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };
