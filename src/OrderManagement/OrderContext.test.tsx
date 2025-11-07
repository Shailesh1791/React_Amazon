import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { OrderProvider } from "./OrderContext";

describe("OrderProvider Test cases", () => {
    const OrderProviderProps = jest.fn();
    it("OrderProvider render test", () => {
        render(<OrderProvider children />);
    });
});