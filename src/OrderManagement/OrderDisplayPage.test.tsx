import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { OrderProvider } from './OrderContext';
import OrderDisplayPage from "./OrderDisplayPage";

describe("OrderDisplayPage Test cases", () => {
    it("render OrderDisplayPage test case", () => {
        render(<OrderProvider>
            <OrderDisplayPage />
        </OrderProvider>);
        const saveBtn = screen.getByTestId("addOrderBtn");
        expect(saveBtn).toBeInTheDocument();
        fireEvent.click(saveBtn);

        const removeBtn = screen.getByTestId("removeOrderBtn");
        expect(removeBtn).toBeInTheDocument();
        fireEvent.click(removeBtn);

    });

    it("OrderDisplayPage test case for change event", () => {
        render(<OrderProvider>
            <OrderDisplayPage />
        </OrderProvider>);
        const orderInputTest = screen.getByTestId("orderIDTest") as HTMLInputElement;
        fireEvent.change(orderInputTest, { target: { name: "orderId", value: "100" } });
        expect(orderInputTest.value).toBe("100");
    });

    it("throws error if used outside provider", () => {
        const spy = jest.spyOn(console, "error").mockImplementation(() => {});
        expect(() => render(<OrderDisplayPage />)).toThrow(
            "Order must be used within a UserProvider"
        );
        spy.mockRestore();
    });
});