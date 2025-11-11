import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaymentDashboard from "./PaymentDashboard";

describe("PaymentDashboard Test cases", () => {

    it("PaymentDashboard render test", () => {
        render(<PaymentDashboard />);
    });
});