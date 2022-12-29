import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';
import React from 'react';
export const AppRouter = () => {
    const { toggleTheme } = useAppThemeContext();

    return (
        <Routes>
            <Route path="/initialPage" element={<Button variant='contained' color='primary' onClick={toggleTheme} >página inicial </Button>} />
            <Route path="*" element={<Navigate to={'/initialPage'} />} />
        </Routes>);
};