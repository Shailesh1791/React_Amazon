import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";

const DashboardRoute = React.lazy(() => import("./DashboardRoute"));
const LoginPage = React.lazy(() => import("./login"));

const ApplicationRoute: React.FC = () => {
    return (
        <>
            <Suspense fallback={<div>Loading route...</div>}>
                <Routes>
                    <Route path="/amazon-app/login" element={<LoginPage />}></Route>
                    <Route path="/amazon-app/*" element={
                        <ProtectedRoute>
                            <DashboardRoute />
                        </ProtectedRoute>}>
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default React.memo(ApplicationRoute);