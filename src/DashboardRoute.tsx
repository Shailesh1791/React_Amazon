import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, ButtonGroup } from '@mui/material';
import { Suspense } from "react";
const DashbaordHome = React.lazy(() => import("./DashboardHome"));

const DashboardRoute: React.FC = () => {

    return (
        <>
            <Suspense fallback={<div>Loading Dashboard Page...</div>}>
                <Routes>
                    <Route path="/home/*" element={<DashbaordHome />}></Route>
                </Routes>
            </Suspense>
        </>
    );
};


export default React.memo(DashboardRoute);