import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom"

// Lazy loaded pages
const HomePage = lazy(() => import('@/pages/HomePage'));
const ClimateGovernancePage = lazy(() => import('@/pages/ClimateGovernancePage'));
const ClimateInformationPage = lazy(() => import('@/pages/ClimateInformation'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
// const ClimateAgendaPage = lazy(() => import('@/pages/ClimateAgendaPage'));
// const NewsPage = lazy(() => import('@/pages/NewsPage'));

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/climate-governance" element={<ClimateGovernancePage />} />
            <Route path="/climate-information" element={<ClimateInformationPage />} />
            {/* <Route path="/climate-agenda" element={<ClimateAgendaPage />} />
            <Route path="/news" element={<NewsPage />} /> */}
            {/* Fallbacks */}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    )
}

export default AppRoutes