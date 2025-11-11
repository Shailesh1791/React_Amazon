import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderTrackingDashboard from "./OrderTrackingDashboard";

describe("OrderTrackingDashboard Test cases", () => {

    it("OrderTrackingDashboard render test", () => {
        render(<OrderTrackingDashboard />);
    });
});