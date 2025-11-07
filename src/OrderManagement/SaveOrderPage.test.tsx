import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SaveOrderPage from "./SaveOrderPage";

describe("SaveOrderPage Test case", () => {
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

    it("Save Order button display", () => {
        render(<SaveOrderPage onOrderSave={orderSave} />);
        const saveOrderButton = screen.getAllByText("Save Order");
        expect(saveOrderButton[0]).toBeInTheDocument();
        fireEvent.click(saveOrderButton[0]);
    });

    it("display address change event test", () => {
        render(<SaveOrderPage onOrderSave={orderSave} />);
        const addresInput = screen.getByLabelText("Address") as HTMLInputElement;
        fireEvent.change(addresInput, { target: { value: "Pune" } });
        expect(addresInput.value).toBe("Pune");
    });

    it("First name change test case", () => {
        render(<SaveOrderPage onOrderSave={orderSave} />);
        const firstNameChange = screen.getByLabelText("First name") as HTMLInputElement;
        fireEvent.change(firstNameChange, { target: { value: "Shyam" } });
        expect(firstNameChange.value).toBe("Shyam");
    });

});