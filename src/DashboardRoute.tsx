import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, ButtonGroup } from '@mui/material';
import { Suspense } from "react";

const OrderDashboard = React.lazy(() => import("./OrderManagement/OrderDashboard"));
const ProductDashboard = React.lazy(() => import("./ProductManagement/ProductDashboard"));
const DashbaordHome = React.lazy(() => import("./DashboardHome"));

const DashboardRoute: React.FC = () => {

    return (
        <>
            <Suspense fallback={<div>Loading route...</div>}>
                <AppBar position="static">
                    <Toolbar>
                        <ButtonGroup variant="outlined">
                            <Button color="inherit" component={Link} to="/amazon-app/home">Home</Button>
                            <Button color="inherit" component={Link} to="/amazon-app/products">Product</Button>
                            <Button color="inherit" component={Link} to="/amazon-app/orders">Order</Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
                <Routes>
                    <Route path="/home" element={<DashbaordHome />}></Route>
                    <Route path="/products" element={<ProductDashboard />}></Route>
                    <Route path="/orders" element={<OrderDashboard />}></Route>
                </Routes>
            </Suspense>
        </>
    );
};


export default React.memo(DashboardRoute);