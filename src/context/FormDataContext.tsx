// REACT
import { createContext, useState } from 'react';

type ContextProps = {
  data: any;
  setData: (values: any) => void;
};

type ProviderProps = { children: JSX.Element };

export const FormDataContext = createContext<ContextProps>({
  data: {},
  setData: (values: any) => console.log('Data is empty.'),
});

export const FormDataProvider = ({ children }: ProviderProps): JSX.Element => {
  const [data, setData] = useState({});

  return (
    <FormDataContext.Provider value={{ data, setData }}>
      {children}
    </FormDataContext.Provider>
  );
};
