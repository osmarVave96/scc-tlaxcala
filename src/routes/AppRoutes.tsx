import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom"

// Lazy loaded pages
const HomePage = lazy(() => import('@/pages/HomePage'));
const ClimateGovernancePage = lazy(() => import('@/pages/ClimateGovernancePage'));
// const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));


const AppRoutes = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/climate-governance" element={<ClimateGovernancePage />} />

            {/* Fallbacks */}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    )
}

export default AppRoutes