import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
    return (
    <Routes>
        <Route path="/initialPage" element={<> pagina inicial</>} />
        <Route path="*" element={<Navigate to={"/initialPage"} />} />
    </Routes>)
}