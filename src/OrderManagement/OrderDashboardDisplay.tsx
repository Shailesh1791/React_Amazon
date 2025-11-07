import React from 'react';
import { OrderProvider } from './OrderContext';
import OrderDisplayPage from './OrderDisplayPage';

const OrderDashboardDisplay: React.FC = () => {
    return (
        <OrderProvider>
            <OrderDisplayPage />
        </OrderProvider>
    );
};

export default OrderDashboardDisplay;