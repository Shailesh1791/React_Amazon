import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderDashboard from "./OrderDashboard";

describe("OrderDashboard Test cases", () => {

    it("OrderDashboard render test", () => {
        render(<OrderDashboard />);
    });
});