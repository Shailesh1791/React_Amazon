import React from 'react';
import { OrderProvider } from './OrderContext';
import OrderDisplayPage from './OrderDisplayPage';

const OrderDashboardDsiplay: React.FC = () => {
    return (
        <OrderProvider>
            <OrderDisplayPage />
        </OrderProvider>
    );
};

export default OrderDashboardDsiplay;