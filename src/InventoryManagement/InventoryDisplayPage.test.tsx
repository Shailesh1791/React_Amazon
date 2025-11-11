import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InventoryDisplayPage from "./InventoryDisplayPage";

describe("InventoryDisplayPage Test cases", () => {

    it("InventoryDisplayPage render test", () => {
        render(<InventoryDisplayPage />);
    });
});