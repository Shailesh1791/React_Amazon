import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, ButtonGroup } from '@mui/material';
import { Suspense } from "react";

const OrderDashboard = React.lazy(() => import("./OrderManagement/OrderDashboard"));
const ProductDashboard = React.lazy(() => import("./ProductManagement/ProductDashboard"));
const DashbaordHome = React.lazy(() => import("./DashboardHome"));
const LoginService = React.lazy(() => import("./login/index"));

const DashboardRoute: React.FC = () => {

    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<div>Loading route...</div>}>
                    <AppBar position="static">
                        <Toolbar>
                            <ButtonGroup variant="outlined">
                                <Button color="inherit" component={Link} to="/">Home</Button>
                                <Button color="inherit" component={Link} to="/products">Product</Button>
                                <Button color="inherit" component={Link} to="/orders">Order</Button>
                                <Button color="inherit" component={Link} to="/login">Login</Button>
                            </ButtonGroup>
                        </Toolbar>
                    </AppBar>
                    <Routes>
                        <Route path="/" element={<DashbaordHome />}></Route>
                        <Route path="/products" element={<ProductDashboard />}></Route>
                        <Route path="/orders" element={<OrderDashboard />}></Route>
                        <Route path="/login" element={<LoginService />}></Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
};


export default React.memo(DashboardRoute);