import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
    return (
    <Routes>
        <Route path="/initialPage" element={<Button variant="contained" color="primary">página inicial </Button>} />
        <Route path="*" element={<Navigate to={"/initialPage"} />} />
    </Routes>)
}