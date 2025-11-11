import React from "react";
import PaymentDisplayPage from "./PaymentDisplayPage";



const PaymentDashboard: React.FC = (): React.ReactElement => {
    return (
        <PaymentDisplayPage />
    );

}
export default React.memo(PaymentDashboard);