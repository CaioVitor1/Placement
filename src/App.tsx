import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { Sidebar } from './shared/components';
import { AppThemeProvider } from './shared/contexts';
export const App = () => {
    return (
        <AppThemeProvider>
            <BrowserRouter>
                <Sidebar>
                    <AppRouter />
                </Sidebar>
               
            </BrowserRouter>
        </AppThemeProvider>
    
    );
};

