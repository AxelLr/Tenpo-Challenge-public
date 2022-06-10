import React, {useContext, useState, Dispatch, SetStateAction} from 'react';

type ICoordinates = {latitude: number; longitude: number};

export interface IUser {
  address: string;
  addressDetails: string;
  coordinates: ICoordinates;
}

interface IContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

const Context = React.createContext({} as IContext);

interface Props {
  children: React.ReactNode;
}

export const useUser = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('Must be inside proper provider');
  }
  return context;
};

export const UserContext: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState({} as IUser);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </Context.Provider>
  );
};
