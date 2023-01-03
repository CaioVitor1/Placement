import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerData {
  DrawerIsOpen: boolean;
  toggleDrawer: () => void;
}

const DrawerContext = createContext({} as IDrawerData);

export const UseDrawerContext = () => {
    return useContext(DrawerContext);
};

interface IToggleDrawer {
  children: React.ReactNode
}
export const TestToggleDrawer: React.FC<IToggleDrawer> = ({ children }) => {
    const [DrawerIsOpen, setDrawerIsOpen] = useState(false);

    const toggleDrawer = useCallback(() => {
        setDrawerIsOpen(DrawerIsOpen => !DrawerIsOpen);
    }, []);



    return (
        <DrawerContext.Provider value={{ DrawerIsOpen, toggleDrawer }}>
            {children}          
        </DrawerContext.Provider>
    );
};