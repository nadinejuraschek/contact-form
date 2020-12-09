// REACT
import { createContext, useState } from 'react';

type ContextProps = {
  data: any;
  setData: (values: any) => void;
};

type ProviderProps = { children: React.ReactNode };

export const FormDataContext = createContext<ContextProps>({
  data: {},
  setData: (values: any) => console.log('Data is empty.'),
});

export const FormDataProvider = ({ children }: ProviderProps) => {
  const [data, setData] = useState({});

  return (
    <FormDataContext.Provider value={{ data, setData }}>
      {children}
    </FormDataContext.Provider>
  );
};
