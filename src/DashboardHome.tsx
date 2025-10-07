import React, { useEffect, useState } from 'react';
import { dashboardMappingService } from './services';
import PortalDisplay from './PortalComponent/PortalDisplayPage';
import './App.css'

const DashbaordHome: React.FC = (): React.ReactElement => {
    const serviceCall = dashboardMappingService();

    const [count, setCount] = useState(0);

    useEffect(() => {
        const orderServiceCall = async () => {
            const data = await serviceCall.getOrderDataList();
            console.log("order list", data);
        };
        const productServiceCall = async () => {
            const data = await serviceCall.getProductDataList();
            console.log("product list", data);
        }
        orderServiceCall();
        productServiceCall();
    }, []);

    return (
        <>
            <h1>Amazon Store</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <PortalDisplay/>
        </>
    )
};

export default React.memo(DashbaordHome);