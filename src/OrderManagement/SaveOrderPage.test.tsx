import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SaveOrderPage from "./SaveOrderPage";

describe("SaveOrderPage", () => {
    const orderSave = jest.fn();
    it("display first name", () => {
        render(<SaveOrderPage onOrderSave={orderSave} />);
        const firstNameInput = screen.getByTestId("firstName-input");
        expect(firstNameInput).toBeInTheDocument();
    });

    it("display last name", () => {
        render(<SaveOrderPage onOrderSave={orderSave} />);
        const lastNameInput = screen.getByTestId("lastName-input");
        expect(lastNameInput).toBeInTheDocument();
    });

    it("display address", () => {
        render(<SaveOrderPage onOrderSave={orderSave} />);
        const addresInput = screen.getByTestId("address-input");
        expect(addresInput).toBeInTheDocument();
    });

    it("display city input", () => {
        render(<SaveOrderPage onOrderSave={orderSave} />);
        const cityInput = screen.getByTestId("city-input");
        expect(cityInput).toBeInTheDocument();
    });

    it("display State Field", () => {
        render(<SaveOrderPage onOrderSave={orderSave} />);
        const stateInput = screen.getAllByText("State");
        expect(stateInput[0]).toBeInTheDocument();
    });

    it("Save Order button display",()=>{
        render(<SaveOrderPage onOrderSave={orderSave} />);
        const saveOrderButton = screen.getAllByText("Save Order");
        expect(saveOrderButton[0]).toBeInTheDocument();
        fireEvent.click(saveOrderButton[0]);
    });

});