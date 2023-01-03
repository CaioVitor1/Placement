import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { Sidebar } from './shared/components';
import { AppThemeProvider, TestToggleDrawer } from './shared/contexts';
export const App = () => {
    return (
        <AppThemeProvider>
            <TestToggleDrawer>
                <BrowserRouter>
                    <Sidebar>
                        <AppRouter />
                    </Sidebar>
               
                </BrowserRouter>
            </TestToggleDrawer>
        </AppThemeProvider>
    
    );
};

