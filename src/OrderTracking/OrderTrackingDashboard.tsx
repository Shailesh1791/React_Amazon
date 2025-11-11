import React, { useEffect, useState } from "react";



const OrderTrackingDashboard: React.FC = (): React.ReactElement => {
    const [price, setPrice] = useState<string>("Loading...");
    const [trades, setTrades] = useState<string[]>([]);

    useEffect(() => {
        const socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

        socket.onopen = () => {
            console.log("✅ Connected to Binance WebSocket");
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const tradePrice = parseFloat(data.p).toFixed(2);
            setPrice(tradePrice);
            setTrades((prev) => [tradePrice, ...prev.slice(0, 4)]);
        };

        socket.onclose = () => {
            console.log("❌ Disconnected from Binance");
        };

        return () => socket.close();
    }, []);

    return (
        <div style={{ fontFamily: "sans-serif", padding: 20 }}>
            <h2>💰 Live BTC/USDT Price</h2>
            <h1 style={{ color: "green" }}>${price}</h1>
            <h4>Recent Trades:</h4>
            <ul>
                {trades.map((p, i) => (
                    <li key={i}>${p}</li>
                ))}
            </ul>
        </div>
    );

}
export default React.memo(OrderTrackingDashboard);