import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UseDrawerContext } from '../shared/contexts';

export const AppRouter = () => {
    const { toggleDrawer } = UseDrawerContext();

    return (
        <Routes>
            <Route path="/initialPage" element={<Button variant='contained' color='primary' onClick={toggleDrawer} >página inicial </Button>} />
            <Route path="*" element={<Navigate to={'/initialPage'} />} />
        </Routes>);
};