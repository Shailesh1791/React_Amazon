import React, { useContext, useState } from 'react';
import { OrderContext } from './OrderContext';

const OrderDisplayPage: React.FC = () => {

    const context = useContext(OrderContext);
    const [order, setOrder] = useState({
        orderId: "",
        orderName: "",
        price: "",
        description: ""
    });

    if (!context) {
        throw new Error('Order must be used within a UserProvider');
    }

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setOrder((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const { orders, addOrder, removeOrder } = context;

    return (
        <>
            <div>
                <h2>Add Order</h2>
                <input id='ordID' name='orderId' type='text' data-testid="orderIDTest" value={order.orderId} onChange={handleChange} />
                <input id='ordname' name='orderName' type='text' value={order.orderName} onChange={handleChange} />
                <input id='ordID2' name='price' type='text' value={order.price} onChange={handleChange} />
                <input id='ordID3' name='description' type='text' value={order.description} onChange={handleChange} />
                <button data-testid="addOrderBtn" onClick={() => addOrder(order)}>Add Order</button>
                <button data-testid="removeOrderBtn" onClick={() => removeOrder("200")}>Remove Order</button>
            </div>
            <div>
                <h2>Order Page</h2>
                {orders && orders.map((order,indx) => (
                    <div key={indx}>
                        <p>Name: {order.orderName}</p>
                        <p>Description: {order.description}</p>
                        <p>Price: {order.price}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OrderDisplayPage;