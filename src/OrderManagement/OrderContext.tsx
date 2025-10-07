import React, { createContext, useState, ReactNode } from "react";

type Order = {
  orderId: String,
  orderName: String,
  price: String,
  description: String
}

type OrderContextType = {
  orders: Order[],
  addOrder: (order: Order) => void
  removeOrder: (orderId: String) => void
}

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

type OrderProviderProps = {
  children: ReactNode;
};

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([
    {
      orderId: "100",
      orderName: "IPhone Mobile",
      price: "250000",
      description: "Mobile Apple brand"
    }
  ]);

  const addOrder = (order: Order) => {
    setOrders(ord => [...ord, order]);
  };

  const removeOrder = (orderId: String) => {
    setOrders((prev) => prev.filter((p) => p.orderId !== orderId));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};